import { Component, createSignal } from 'solid-js';
import { Routes, Route, A } from "@solidjs/router";

const Navbar: Component = () => {
  const [isMenu, setMenu]         = createSignal(true);
  const [isMenuOpen, setMenuOpen] = createSignal(true);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen());
  };

  const toggleButton = () => {
    setMenu(!isMenu());
  };

  return (
    <nav class="bg-white">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center"></a>
        <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" 
          aria-expanded={isMenu() ? "true" : "false"}
          onClick={toggleButton}>
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
        <div id="navbar-solid-bg" class="hidden w-full md:block md:w-auto" style={`display: ${isMenu() ? 'block' : 'none'}`}>
        {isMenuOpen() &&
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="/reads"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                reads
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                blog
              </a>
            </li>
          </ul>
        }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;