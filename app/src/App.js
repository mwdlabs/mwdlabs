import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './_misc/Pages/Home';
import About from './_misc/Pages/About';
import Projects from './_misc/Pages/Projects';
import Contact from './_misc/Pages/Contact';
import Skills from './_misc/Pages/Skills';
import PrivacyPolicy from './_misc/Pages/PrivacyPolicy';
import Services from './_misc/Pages/Services';
import Founder from './_misc/Pages/Founder';
import ProjectDetails from './_misc/Components/ProjectDetails';
import NavigationBar from './_misc/Components/NavigationBar';
import Footer from './_misc/Components/Footer';
import Cursor from './_misc/Components/Cursor';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import particules from './Utilities/Particules';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Retourne le jsx de l'App. 
 * @return {jsx}
 */
function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,     
    });
  }, []);

  // const handleInit = async (main)=>{
  //   await loadSlim(main)
  // }
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <ScrollToTop />
          <Cursor />
          <NavigationBar/>

          <div className="main-content">
            <Routes>
              <Route index path='/' element={<div className="home-page"><Home/></div>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/project/:id" element={<ProjectDetails/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/privacy" element={<PrivacyPolicy/>}/>
              <Route path="/founder" element={<Founder/>}/>
            </Routes>
          </div>
          
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
