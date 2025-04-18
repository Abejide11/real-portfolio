import { content } from "../Content";
import pic from "../assets/Screenshot 2025-04-15 163127.jpg";
import todo from "../assets/todo.jpg";
import analog from "../assets/analog.jpg";
import stop from "../assets/stop.jpg";
// import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary py-14 mt-20" id="projects">
      <div className="container mx-auto px-5 min-h-screen flex flex-col justify-between">
        <div>
          <h2
            className="title text-3xl md:text-4xl font-bold text-center mb-2"
            data-aos="fade-down"
          >
            {Projects.title}
          </h2>
          <h4
            className="subtitle text-lg text-center mb-8 text-gray-600"
            data-aos="fade-down"
          >
            {Projects.subtitle}
          </h4>

          
          <div className="flex flex-col gap-12">
            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <img
                src={pic}
                alt="Calculator project screenshot"
                className="w-full md:w-[300px] rounded shadow-lg"
                data-aos="fade-up"
              />
              <div className="text-left max-w-md">
                <p className="text-base text-gray-700 mb-4">
                  Mobile calculator built with <strong>HTML</strong>,{" "}
                  <strong>CSS</strong>, and <strong>JavaScript</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://calculator-vert-nine-74.vercel.app/",
                        "_blank"
                      )
                    }
                    className="btn bg-dark_primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Abejide11/calculator/",
                        "_blank"
                      )
                    }
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md border border-transparent"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <img
                src={todo}
                alt="Todo project screenshot"
                className="w-full md:w-[300px] rounded shadow-lg"
                data-aos="fade-up"
              />
              <div className="text-left max-w-md">
                <p className="text-base text-gray-700 mb-4">
                  TodoList built with <strong>HTML</strong>,{" "}
                  <strong>CSS</strong>, and <strong>JavaScript</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://todolist-smoky-seven.vercel.app/",
                        "_blank"
                      )
                    }
                    className="btn bg-dark_primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Abejide11/todolist/",
                        "_blank"
                      )
                    }
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md border border-transparent"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <img
                src={analog}
                alt="Analog Clock project screenshot"
                className="w-full md:w-[300px] rounded shadow-lg"
                data-aos="fade-up"
              />
              <div className="text-left max-w-md">
                <p className="text-base text-gray-700 mb-4">
                  Analog Clock built with <strong>HTML</strong>,{" "}
                  <strong>CSS</strong>, and <strong>JavaScript</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://analog-clock-iota-rosy.vercel.app/",
                        "_blank"
                      )
                    }
                    className="btn bg-dark_primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Abejide11/Analog-clock",
                        "_blank"
                      )
                    }
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md border border-transparent"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-6">
              <img
                src={stop}
                alt="Stopwatch project screenshot"
                className="w-full md:w-[300px] rounded shadow-lg"
                data-aos="fade-up"
              />
              <div className="text-left max-w-md">
                <p className="text-base text-gray-700 mb-4">
                  Stop watch built with <strong>HTML</strong>,{" "}
                  <strong>CSS</strong>, and <strong>JavaScript</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://stop-watch-oj78.vercel.app/",
                        "_blank"
                      )
                    }
                    className="btn bg-dark_primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Abejide11/stopWatch",
                        "_blank"
                      )
                    }
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md border border-transparent"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
