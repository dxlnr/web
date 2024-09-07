import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

const Navbar: Component = () => {
  const [isMenu, setMenu] = createSignal(true);

  const toggleButton = () => {
    setMenu(!isMenu());
  };

  const [strokeColor, setStrokeColor] = createSignal(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#ffffff"
      : "#000000",
  );
  const updateColor = (e) => {
    setStrokeColor(e.matches ? "#ffffff" : "#000000");
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
    <nav class="bg-white text-lg">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-8 sm:px-16 md:px-48 ">
        <a href="#" class="flex items-center "></a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-12 h-12 opacity-70 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenu() ? "true" : "false"}
          onClick={toggleButton}
        >
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Menu / Menu_Alt_01">
                {" "}
                <path
                  id="Vector"
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke={strokeColor()}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
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
