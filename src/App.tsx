import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import Navbar from './components/navbar/navbar';

const Home = lazy(() => import ("./pages/home"));
const Blog = lazy(() => import ("./pages/blog"));

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Routes>
    </>
  );
};

export default App;
