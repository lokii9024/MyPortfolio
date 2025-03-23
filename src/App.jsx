import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About/About.jsx";
import Loader from "./Pages/Loader.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

const App = () => {
  const [loading,setLoading] = useState(true);

  useEffect( () => {
    const timer = setTimeout( () => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if(loading){
    return <Loader/>
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
