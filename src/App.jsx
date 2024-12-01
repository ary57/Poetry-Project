import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import PoetPage from './pages/PoetPage';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="poet/:name" element={<PoetPage />} />
    </Routes>
  </BrowserRouter>)
}

export default App
