import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

const Navbar: Component = () => {
  const [isMenu, setMenu] = createSignal(true);

  const toggleButton = () => {
    setMenu(!isMenu());
  };

  const [strokeColor, setStrokeColor] = createSignal(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#FFFFFF"
      : "#000000",
  );
  const updateColor = (e) => {
    setStrokeColor(e.matches ? "#FFFFFF" : "#000000");
  };
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.onchange = updateColor;

  onMount(() => {
    if (window.innerWidth < 768) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  });

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  window.addEventListener("resize", handleResize);

  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
    mediaQuery.onchange = null;
  });

  return (
    <nav class="text-lg">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-8 sm:px-16 md:px-48 ">
        <a href="#" class="flex items-center "></a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="flex flex-col justify-between items-center p-2 w-12 h-12 md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenu() ? "true" : "false"}
          onClick={toggleButton}
        >
          <span class="sr-only">Open main menu</span>
          <div class="flex flex-col justify-between h-5 w-8">
            <span
              class={`block w-full h-0.5 bg-gray-800 rounded transition-opacity duration-300 ${
                isMenu() ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              class={`block w-full h-0.5 bg-gray-800 rounded transition-opacity duration-300`}
            ></span>
            <span
              class={`block w-full h-0.5 bg-gray-800 rounded transition-opacity duration-300 ${
                isMenu() ? "opacity-0" : "opacity-100"
              }`}
            ></span>
          </div>
        </button>
        <div
          id="navbar-solid-bg"
          class="hidden w-full md:block md:w-auto "
          style={`display: ${isMenu() ? "block" : "none"}`}
        >
          {isMenu() && (
            <ul class="flex flex-col mt-4 rounded-lg text-right tracking-wider md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <A
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-t border-b rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-2"
                >
                  home
                </A>
              </li>
              <li>
                <A
                  href="/reads"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-2"
                >
                  reads
                </A>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
