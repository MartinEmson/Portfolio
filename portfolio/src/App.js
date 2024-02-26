import {useEffect, useRef} from 'react';
import './App.css';
import Lenis from '@studio-freight/lenis'
import Hero from './components/homepage/Hero.jsx';
import NavBar from './components/ui/NavBar.jsx';
import About from './components/homepage/About.jsx';
import Projects from './components/homepage/Projects.jsx';
import Footer from './components/ui/Footer.jsx';



function App() {
  
  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    const toggleTheme = () => {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
    };

    themeToggleBtn.addEventListener('click', toggleTheme);

    // Cleanup event listener when component unmounts
    return () => {
      themeToggleBtn.removeEventListener('click', toggleTheme);
    };

  }, []); // empty dependency array to run this effect only once on mount


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []); // Empty dependency array to run this effect only once on mount
  
  return (
    <div className="App pt-5 px-5 pb-5 bg-indigo-300">
    {/* <NavBar /> */}
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
