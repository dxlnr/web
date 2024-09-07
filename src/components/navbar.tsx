import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

const Navbar: Component = () => {
  const [isMenu, setMenu] = createSignal(true);

  const toggleButton = () => {
    setMenu(!isMenu());
  };

  const [strokeColor, setStrokeColor] = createSignal(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#000000"
      : "#000000",
  );
  const updateColor = (e) => {
    setStrokeColor(e.matches ? "#000000" : "#000000");
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
          class="inline-flex items-center p-2 w-12 h-12 opacity-70 justify-center text-sm rounded-lg md:hidden hover:bg-gray-50"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenu() ? "true" : "false"}
          onClick={toggleButton}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>bars</title>{" "}
              <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>{" "}
            </g>
          </svg>
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
              <li>
                <A
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-2"
                >
                  blog
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
