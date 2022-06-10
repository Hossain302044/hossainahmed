import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './pages/Contact/Contacts';
import Home from './pages/Home/Home';
import ProjectDetails from './pages/Home/ProjectDetails';
import Header from './shared/Header';

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ProjectsDetails/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;
