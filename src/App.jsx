import 'bootstrap/dist/css/bootstrap.min.css'; // Import precompiled Bootstrap css
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import precompiled Bootstrap icons

import Navbar from './components/navbar';
import Footer from './components/footer';

import { Route, Routes } from 'react-router-dom';

import Problems from './pages/problems';
import Home from './pages/home';
import ViewProblem from './pages/viewproblem';
import Roadmaps from './pages/roadmaps';

function App() {
    return (
    <>
       <Navbar />
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/problems/view" element={<ViewProblem />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            
      </Routes>
      <Footer />
    </>
  )
}

export default App
