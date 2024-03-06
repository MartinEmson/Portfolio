import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
      <footer className="bg-black text-white py-8 md:py-16">
  <div className="container mx-auto py-8 px-4 border-b border-slate-200">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 order-2 md:order-1">
        <ul className='flex flex-col md:flex-row'>
          <li className="mr-0 md:mr-4 mb-2 md:mb-0"><a href="#" className="text-gray-400 hover:text-white hover:underline">Home</a></li>
          <li className="mr-0 md:mr-4 mb-2 md:mb-0"><a href="#about" className="text-gray-400 hover:text-white hover:underline">About</a></li>
          <li className="mr-0 md:mr-4 mb-2 md:mb-0"><a href="#projects" className="text-gray-400 hover:text-white hover:underline">Projects</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="flex order-1 md:order-2 mb-4 md:mb-0">
        <ul className='flex flex-row'>
          <li className="mr-4 text-2xl"><a href="https://www.instagram.com/martinlindevall/" target="_blank" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
          <li className="mr-4 text-2xl"><a href="https://www.linkedin.com/in/martin-lindevall-65750a238/" target="_blank" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
          <li className='text-2xl'><a href="https://github.com/MartinEmson" target="_blank" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>




    );
}

export default Footer;