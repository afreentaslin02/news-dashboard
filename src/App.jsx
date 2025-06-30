import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MySummaries from './pages/MySummaries';
import './style.css';

import Navbar from './components/Navbar';
import ArticalDetails from './components/ArticleDetail';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='summaries' element={<MySummaries />} />



      </Routes>

    </div>
  );
};

export default App;

