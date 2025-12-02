import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import html2canvas from 'html2canvas';

Chart.register(...registerables);

const ResultScreen = ({ result, userTraits, traitNames, onRestart, onShare, onDownload }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const shareableRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (chartRef.current && result) {
      // Destroy previous chart if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Get top 6 traits
      const topTraits = Object.entries(userTraits)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6);

      const labels = topTraits.map(([trait]) => traitNames[trait] || trait);
      const userData = topTraits.map(([, value]) => value);
      const leaderData = topTraits.map(([trait]) => result.traits[trait] || 0);

      // Calculate max value for chart
      const allValues = [...userData, ...leaderData];
      const maxValue = Math.max(...allValues);
      const chartMax = maxValue + (maxValue * 0.3); // 30% padding

      chartInstance.current = new Chart(chartRef.current, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'شخصیت شما',
              data: userData,
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.8)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(59, 130, 246, 1)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6
            },
            {
              label: result.name,
              data: leaderData,
              backgroundColor: 'rgba(139, 92, 246, 0.1)',
              borderColor: 'rgba(139, 92, 246, 0.8)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(139, 92, 246, 1)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6,
              borderDash: [5, 5]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              beginAtZero: true,
              max: chartMax,
              ticks: {
                stepSize: Math.ceil(chartMax / 5),
                backdropColor: 'transparent',
                font: {
                  family: 'Vazirmatn',
                  size: 10
                }
              },
              pointLabels: {
                font: {
                  family: 'Vazirmatn',
                  size: 12,
                  weight: '500'
                },
                color: '#333'
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              angleLines: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: 'Vazirmatn',
                  size: 12
                },
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              titleFont: {
                family: 'Vazirmatn',
                size: 13
              },
              bodyFont: {
                family: 'Vazirmatn',
                size: 12
              },
              padding: 12,
              cornerRadius: 8,
              displayColors: false,
              rtl: true,
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: ${context.raw}/4`;
                }
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [result, userTraits, traitNames]);

  const handleDownload = async () => {
    if (!shareableRef.current || !result || isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // Clone the element for download
      const element = shareableRef.current.cloneNode(true);
      element.style.width = '600px';
      element.style.padding = '40px';
      element.style.backgroundColor = '#ffffff';
      element.style.borderRadius = '24px';
      
      // Add download-specific styling
      element.classList.add('download-version');
      
      // Create download preview container
      const container = document.createElement('div');
      container.style.cssText = `
        position: fixed;
        top: -9999px;
        left: -9999px;
        width: 600px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        border-radius: 24px;
      `;
      
      const content = document.createElement('div');
      content.className = 'preview-content';
      content.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 32px 28px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        text-align: center;
      `;
      
      // Create download header
      const header = document.createElement('div');
      header.className = 'download-header';
      header.innerHTML = `
        <div class="download-title">نتایج تست شخصیت سیاسی</div>
        <div class="result-name" style="font-size: 32px; font-weight: 700; margin: 8px 0; color: #1a1a1a;">${result.name}</div>
        <div class="result-title" style="font-size: 14px; color: #666; margin-bottom: 24px;">${result.title}</div>
      `;
      
      // Create match section
      const matchSection = document.createElement('div');
      matchSection.className = 'preview-match';
      matchSection.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 16px;
        padding: 20px;
        text-align: center;
        margin: 24px 0;
      `;
      matchSection.innerHTML = `
        <div class="preview-match-score" style="font-size: 48px; font-weight: 700; margin-bottom: 4px;">${result.percentage}%</div>
        <div class="preview-match-label" style="font-size: 13px; opacity: 0.9;">درصد تطابق</div>
      `;
      
      // Create description
      const description = document.createElement('div');
      description.className = 'preview-description';
      description.style.cssText = `
        font-size: 15px;
        line-height: 1.8;
        color: #444;
        background: #f8f8f8;
        border-radius: 12px;
        padding: 16px;
        margin: 24px 0;
        text-align: right;
      `;
      description.textContent = result.description;
      
      // Create traits grid
      const topTraits = Object.entries(result.traits || {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4);
      
      const traitsGrid = document.createElement('div');
      traitsGrid.className = 'preview-traits';
      traitsGrid.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin: 24px 0;
      `;
      
      traitsGrid.innerHTML = topTraits.map(([trait, score]) => `
        <div class="preview-trait-item" style="background: #f8f8f8; border-radius: 12px; padding: 12px; text-align: center;">
          <div class="preview-trait-name" style="font-size: 12px; color: #666; margin-bottom: 8px; font-weight: 600;">${traitNames[trait] || trait}</div>
          <div class="preview-trait-bar" style="height: 4px; background: #e0e0e0; border-radius: 2px; overflow: hidden; margin-bottom: 6px;">
            <div class="preview-trait-fill" style="height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 2px; width: ${(score / 4) * 100}%"></div>
          </div>
          <div class="preview-trait-score" style="font-size: 11px; font-weight: 700; color: #333;">${score}/4</div>
        </div>
      `).join('');
      
      // Create footer
      const footer = document.createElement('div');
      footer.className = 'preview-footer';
      footer.style.cssText = `
        text-align: center;
        padding-top: 20px;
        border-top: 2px solid #f0f0f0;
        margin-top: 24px;
      `;
      footer.innerHTML = `
        <div class="preview-footer-text" style="font-size: 13px; color: #999; font-weight: 500;">نتیجه تست شخصیت سیاسی</div>
        <div class="preview-footer-url" style="font-size: 12px; color: #667eea; font-weight: 600; margin-top: 4px;">strategic.imalixd.ir</div>
      `;
      
      // Assemble the download preview
      content.appendChild(header);
      content.appendChild(matchSection);
      content.appendChild(description);
      content.appendChild(traitsGrid);
      content.appendChild(footer);
      container.appendChild(content);
      document.body.appendChild(container);
      
      // Capture and download
      const canvas = await html2canvas(container, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        logging: false
      });
      
      const link = document.createElement('a');
      link.download = `personality-test-${result.name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      // Cleanup
      document.body.removeChild(container);
      
      if (onDownload) {
        onDownload();
      }
      
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('خطا در دانلود تصویر');
    } finally {
      setIsDownloading(false);
    }
  };

  const topTraits = Object.entries(result.traits || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  return (
    <div className="result-screen active">
      <div className="result-wrapper">
        {/* بخش اصلی برای نمایش */}
        <div ref={shareableRef} id="shareableContent">
          <div className="result-header">
            <img 
              className="result-image" 
              src={result.image} 
              alt={result.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/140x140?text=Leader';
              }}
            />
            <div className="result-name">{result.name}</div>
            <div className="result-title">{result.title}</div>
          </div>

          <div className="match-container">
            <div className="match-score">{result.percentage}%</div>
            <div className="match-label">درصد تطابق</div>
          </div>

          <div className="result-description">{result.description}</div>

          <div className="traits-grid">
            {topTraits.map(([trait, score]) => (
              <div key={trait} className="trait-item">
                <div className="trait-name">{traitNames[trait] || trait}</div>
                <div className="trait-bar">
                  <div 
                    className="trait-fill" 
                    style={{ width: `${(score / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="trait-score">{score}/4</div>
              </div>
            ))}
          </div>

          <div className="result-detail">
            <div className="detail-label">سبک رهبری</div>
            <div className="detail-value">{result.governingStyle}</div>
          </div>
        </div>

        <div className="personality-chart-container">
          <h3 className="chart-title">نمودار مقایسه شخصیتی</h3>
          <div className="chart-wrapper">
            <canvas ref={chartRef} id="personalityChart"></canvas>
          </div>
        </div>

        <div className="action-buttons">
          <button 
            className="action-btn" 
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? 'در حال دانلود...' : '📥 دانلود به صورت تصویر'}
          </button>
          <button className="action-btn" onClick={onShare}>
            کپی نتیجه
          </button>
          <button className="action-btn secondary" onClick={onRestart}>
            آزمون دوباره
          </button>
          <a
            href="https://daramet.com/Im_Lotfi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="action-btn secondary">حمایت از توسعه دهنده</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;