import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './pages/Contact/Contacts';
import Home from './pages/Home/Home';
import Header from './shared/Header';
import Blog from './pages/Blog/Blog'
import About from './pages/Home/About';
import NotFound from './shared/NotFound';

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;
