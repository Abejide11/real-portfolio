

// export default App;
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });


    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">ABEJIDE TIMILEYIN</h6>
        <p>codeaprogram © All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;
