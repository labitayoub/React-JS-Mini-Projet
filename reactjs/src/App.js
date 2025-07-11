
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-red-500 text-center text-white min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/article/:name" element={<Article />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
