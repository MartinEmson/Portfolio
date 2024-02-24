import React from 'react';

function Footer() {
    return (
        <footer class="bg-black text-white py-8 rounded-br-lg rounded-bl-3xl">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <h2 class="text-xl font-bold">Martin Lindevall</h2>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-2">Quick Links</h3>
        <ul>
          <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-2">Socials</h3>
        <ul>
          <li><a href="#" class="text-gray-400 hover:text-white">Instagram</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">LinkedIn</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>


    );
}

export default Footer;