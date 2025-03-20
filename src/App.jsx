import 'bootstrap/dist/css/bootstrap.min.css'; // Import precompiled Bootstrap css
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import precompiled Bootstrap icons

import React, { useState , useEffect } from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import DoubtForm from './pages/doubt/doubtform';

import { Route, Routes } from 'react-router-dom';

import Problems from './pages/problem/problems';
import Home from './pages/user/home';
import ViewProblem from './pages/problem/viewproblem';
import Roadmaps from './pages/roadmap/roadmaps';
import ActiveDoudts from './pages/doubt/activedoubts';
import ViewDoubt from './pages/doubt/viewdoubt';
import Profile from './components/profile';

function App() {
    const [theme, setTheme] = useState('light');
    const [user , setUser] = useState({});

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')));
      setTheme(localStorage.getItem('theme') || 'light');
    }, []);

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
    }, [theme]);

    const properties = {
        theme:theme,
        setTheme:setTheme,
        user:user,
        setUser:setUser,
        url : import.meta.env.VITE_REACT_APP_API_URL
    }
    return (
    <> <div>
      
    </div>
       <Navbar {...properties}  />

       <Routes>
            <Route path="/" element={<Home {...properties} />} />

            <Route path="/problems" element={<Problems {...properties} />} />
            <Route path="/problems/view/:id" element={<ViewProblem {...properties} />} />
            
            <Route path="/doubts/active" element={<ActiveDoudts {...properties} />} />
            <Route path="/doubts/view" element={<ViewDoubt {...properties} />} />
            {/* <Route path="/doubts/your-doubts" element={<YourDoubts />} /> */}
            
            <Route path="/profile" element={<Profile {...properties} />} />
            <Route path="/login" element={<Login {...properties} />} />
            <Route path="/register" element={<Signup {...properties} />} />

            <Route path="/roadmaps" element={<Roadmaps {...properties} />} />
            <Route path="problems/ask/doubt/:id" element={<DoubtForm {...properties} />} />

          
      </Routes>
      <Footer {...properties} />
    </>
  )
}

export default App
