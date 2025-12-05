import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PoliticalTestApp from './apps/politicalTest/PoliticalTestApp.jsx';
import UnitedNations from './apps/unitedNations/UnitedNations.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PoliticalTestApp />} />
        <Route path='/un' element={<UnitedNations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;