import { Component, onCleanup, onMount } from "solid-js";
import { A } from "@solidjs/router";

import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import Info from "../components/info";

const Home: Component = () => {
  return (
    <>
      <div class="flex flex-col h-screen w-full dark:bg-darkMode">
        <Navbar />
        <div class="flex flex-col justify-center items-center flex-grow">
          <main class="h-10 text-left"></main>
          <Info />
        </div>
      </div>
    </>
  );
};

export default Home;
