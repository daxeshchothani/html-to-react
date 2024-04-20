import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import About from './pages/About';  
import Blog from './pages/Blog';
import Category from './pages/Category';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Protected from './pages/Protected';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route key={Index} path="/" element={<Protected Component={Index}/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/about" element={<Protected Component={About}/> } />
          <Route path="/category" element={<Protected Component={Category}/> } />
          <Route path="/testimonial" element={<Protected Component={Testimonial}/> } />
          <Route path="/blog" element={<Protected Component={Blog}/>} />
          <Route path="/contact" element={<Protected Component={Contact}/>} />
          <Route path="/login" element={<Protected Component={Login}/> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
