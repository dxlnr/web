import { Routes, Route, A } from "@solidjs/router";

const Navbar = () => {
  return (
    <nav className="bg-white relative z-10 bg-opacity-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-4 md:gap-16 gap-0.5 text-base tracking-widest ml-10">
            <A href="/about">about</A>
            <A href="/blog">blog</A>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
