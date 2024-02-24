import React from 'react';
import chill from '../../assets/chill.png';
import dope from '../../assets/dope.png';
import race from '../../assets/race.png';




function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>

        <div class="grid grid-cols-1 gap-y-20">
        <div class="flex">
    <img src={chill} alt="Project 1" class="w-full h-auto object-cover md:w-1/2 rounded" />
    <div class="bg-white bg-opacity-75 p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
      <h3 class="text-xl font-semibold mb-2">Project</h3>
      <p class="text-gray-600">Phasellus fermentum consequat diam sit amet mattis. Nam auctor fermentum nunc, vel scelerisque neque pretium a. Aliquam pulvinar urna at nulla interdum, id fermentum nisi tempor. Suspendisse potenti.</p>
    </div>
  </div>

  <div class="flex flex-col-reverse md:flex-row">
    <div class="bg-white bg-opacity-75 p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
        <h3 class="text-xl font-semibold mb-2">Project</h3>
        <p class="text-gray-600">Phasellus fermentum consequat diam sit amet mattis. Nam auctor fermentum nunc, vel scelerisque neque pretium a. Aliquam pulvinar urna at nulla interdum, id fermentum nisi tempor. Suspendisse potenti.</p>
    </div>
    <img src={dope} alt="Project 2" class="w-full h-auto object-cover md:w-1/2 rounded md:ml-auto transform scale-x-[-1]" />
</div>


  <div class="flex">
    <img src={race} alt="Project 3" class="w-full h-auto object-cover md:w-1/2 rounded" />
    <div class="bg-white bg-opacity-75 p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
      <h3 class="text-xl font-semibold mb-2">Project</h3>
      <p class="text-gray-600">Phasellus fermentum consequat diam sit amet mattis. Nam auctor fermentum nunc, vel scelerisque neque pretium a. Aliquam pulvinar urna at nulla interdum, id fermentum nisi tempor. Suspendisse potenti.</p>
    </div>
  </div>
</div>







      </div>      
    </section>
  );
}

export default Projects;
