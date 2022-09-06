// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages imported
import Navbar from './Navbar';
import Home from './Home';
import Article from './Article';
import Programs from './components/programs/Programs';
import Why from './components/Whyus/Why';
import Plans from './components/plans/plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="header">
        <Home />
        <Article />
        <Programs />
        <Why />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
