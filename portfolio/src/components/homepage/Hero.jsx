import React, {useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from "gsap";

function Hero() {
    const comp = useRef(null)

useLayoutEffect (() => {
    let ctx = gsap.context(() => {
        const t1 = gsap.timeline() 
        t1.to("#intro-slider", {
            yPercent: -110,
            duration: 1.5,
            delay: 1.7,
            ease: "power2.inOut", // Start slow
        })
        
      
        // .from("#title-1", {
        //     opacity: 0,
        //     y: "+=30",
        
        // }) 
        // .to("#title-1", {
        //     opacity: 0,
        //     y: "-=30",
        //     delay: 0.3,
        // }) 
    }, comp)

    return () => ctx.revert()
}, [])

  return (
    <div className='relative' ref={comp}>
        <div id="intro-slider" className="h-screen bg-black absolute top-0 left-0 z-20 w-full flex flex-col justify-center items-center">
        <h1 id="title-1" className='text-4xl font-normal text-customWhite'>Martin Lindevall</h1>
        <h2 id="title-2" className="text-2xl text-customWhite">&#169; 2024</h2>
        </div>
    <div id="hero-section" className="bg-customBlack text-customWhite py-10 px-10 relative h-screen w-full">
      {/* <canvas id="c" class="absolute inset-0 w-4/5 h-3/5 m-auto z-10"></canvas> */}
     <nav className="navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={logo} className="h-8" alt="" />
          <span className="self-center text-customBlack font-semibold text-2xl whitespace-nowrap">emson</span> */}
        </a>

    <div className="absolute top-0 left-0 w-30vw h-50vh rounded-tl-xl">
    <div className="max-w-6xl mx-auto px-12 py-8">
      <h1 className="text-5xl md:text-5xl font-variant mb-4 text-left">Martin Lindevall</h1>
      <p className="text-lg md:text-lg mb-8 text-left">Frontend Developer & Designer</p>
    </div>
    </div>

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-customBlack text-customBlack-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-400 dark:border-gray-700">
            <li>
              <a href="#about" onclick="smoothScroll('#about', 1000)" className="block py-2 px-3 text-customWhite bg-white rounded md:bg-transparent md:text-customBlack-700 md:p-0 dark:text-white md:dark:text-white-500" aria-current="page">About</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-customBlack-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customBlack-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-customBlack-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customBlack-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
            <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm">
    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </div>

  );
}

export default Hero;
