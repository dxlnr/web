import { Routes, Route, A } from "@solidjs/router";

const Navbar = () => {
  return (
    <nav class="bg-white relative z-10 bg-opacity-0">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-16 lg:px20">
        <div class="flex items-center justify-between h-20">
          <div class="w-full flex items-center justify-between">
            <div class="flex-shrink-0">
              <A href="/"></A>
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline space-x-4 md:gap-16 gap-0.5 text-base tracking-widest ml-10">
                <A href="/blog"></A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
