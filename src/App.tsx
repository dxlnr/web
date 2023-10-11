import { Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./routes/home"));
const Blog = lazy(() => import("./routes/blog"));

const App: Component = () => {
  return (
    <div class="font-sans">
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Routes>
    </div>
  );
};

export default App;
