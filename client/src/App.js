import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import TemplateBuilder from './TemplateBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/template-builder" element={<TemplateBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;

