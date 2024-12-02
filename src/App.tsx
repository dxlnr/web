import { Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const Home = lazy(() => import("./routes/home"));
const Blog = lazy(() => import("./routes/blog"));
const Reads = lazy(() => import("./routes/reads"));

const App: Component = () => {
  return (
    <div class="body-font font-mohave min-h-screen">
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/reads" component={Reads} />
      </Routes>
    </div>
  );
};

export default App;
