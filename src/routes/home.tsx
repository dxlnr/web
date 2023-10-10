import { A } from "@solidjs/router";

import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";

const Home: Component = () => {
  return (
    <div class="flex flex-col justify-between p-20">
      <header class="h-10"></header>
      <main class="mb-auto h-10 text-left">
        <div class="font-medium text-slate-800 dark:text-slate-400 hover:underline">
          <A href="http://www.catb.org/~esr/faqs/hacker-howto.html">
            Trying ...{" "}
          </A>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
