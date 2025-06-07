import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClubList from './pages/ClubList';
import ClubDetail from './pages/ClubDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/clubs/:clubId" element={<ClubDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
