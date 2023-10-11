import { Component, onCleanup, onMount } from "solid-js";
import { A } from "@solidjs/router";

import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import Info from "../components/info";

const Home: Component = () => {
  return (
    <>
      <div class="flex flex-col justify-center items-center h-screen w-full">
        <main class="h-10 text-left">
        </main>
        <Info />
      </div>
    </>
  );
};

export default Home;
