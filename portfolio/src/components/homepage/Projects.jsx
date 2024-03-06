import React from 'react';
import chill from '../../assets/chill.png';
import dope from '../../assets/dope.png';
import race from '../../assets/race.png';


function Projects() {
  return (
    <section id="projects" className="py-16 bg-customWhite">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>

        <div className="grid grid-cols-1 gap-y-20">
        <div className="flex flex-col md:flex-row">
    <img src={chill} alt="Project 1" className="w-full h-auto object-cover md:w-1/2 rounded" />
    <div className="bg-white bg-opacity-75 p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
      <h3 className="text-xl font-semibold mb-2">Project</h3>
      <p className="text-gray-600">Phasellus fermentum consequat diam sit amet mattis. Nam auctor fermentum nunc, vel scelerisque neque pretium a. Aliquam pulvinar urna at nulla interdum, id fermentum nisi tempor. Suspendisse potenti.</p>
    </div>
  </div>

  <div className="flex flex-col-reverse md:flex-row">
    <div className="bg-white bg-opacity-75 p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
        <h3 className="text-xl font-semibold mb-2">Project</h3>
        <p className="text-gray-600">Phasellus fermentum consequat diam sit amet mattis. Nam auctor fermentum nunc, vel scelerisque neque pretium a. Aliquam pulvinar urna at nulla interdum, id fermentum nisi tempor. Suspendisse potenti.</p>
    </div>
    <img src={dope} alt="Project 2" className="w-full h-auto object-cover md:w-1/2 rounded md:ml-auto transform scale-x-[-1]" />
</div>


<div className="flex flex-col md:flex-row">
      <img src={race} alt="Project 3" className="w-full h-auto object-cover md:w-1/2 rounded" />
    <div className="bg-white bg-opacity-75 p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
      <h3 className="text-xl font-semibold mb-2">Project</h3>
      <p className="text-gray-600">Phasellus fermentum consequat diam sit amet mattis. Nam auctor fermentum nunc, vel scelerisque neque pretium a. Aliquam pulvinar urna at nulla interdum, id fermentum nisi tempor. Suspendisse potenti.</p>
    </div>
  </div>
</div>







      </div>      
    </section>
  );
}

export default Projects;
