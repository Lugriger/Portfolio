
function Projects() {
  const projects = [
    {
      title: "Simple Calculator",
      img: "/images/calculator_1.png",
      description:
        "A basic calculator built with HTML, CSS, and JavaScript. This was one of my first projects and helped me understand how to manage state and events in the browser.",
      github: "https://github.com/Lugriger/Calculator.git",
      demo: "https://calculator-ten-ruddy-18.vercel.app/",
    },
    {
      title: "Demo E-shop",
      img: "/images/e-shop.png",
      description:
        "A demo e-commerce store built for learning purposes. Browse products, view details, manage a shopping cart, and simulate a checkout process. Built with React, React Router, Context API, and Tailwind CSS.",
      github: "https://github.com/Lugriger/demo-eshop",
      demo: "https://demo-eshop-iota.vercel.app/products"  
    },

    {
      title: "Starbucks Clone (Work in Progress)",
      img: "/images/starbucks.png",
      description:
        "A responsive Starbucks homepage clone with a working backend. I’ve already built the homepage, rewards page, and a custom menu that fetches items from a MongoDB database via an Express server. The rest of the site is still in progress, and I'm using this project to keep improving my fullstack skills.",
      github: "https://github.com/Lugriger/Starbucks-Clone.git",
      demo: "https://starbucks-clone-ebon-mu.vercel.app/",
    },
    {
      title: "Weather App",
      img: "/images/weather.png",
      description:
        "React app that fetches live weather data from the OpenWeather API. I learned how to work with APIs, use React hooks, and manage loading states and user input.",
      github: "https://github.com/Lugriger/Weather-App.git",
      demo: "https://weather-app-beta-one-50.vercel.app/",
    },
    {
      title: "Goal Planner App",
      img: "/images/goalplanner.png",
      description:
        "A simple goal planner app that allows users to add, edit, and delete goals. Created in React also using Local Storage.",
        github: "https://github.com/Lugriger/Goal-app",
        demo: "https://goal-app-alpha.vercel.app/"

    }
  ];

  return (
    <section
      id="projects"
      className="mt-40 tracking-wider flex flex-col items-center py-20  "
    >
      <hr className=" backdrop-blur-3xl  w-3/4 h-4 mb-30"/>
      <h1 className="text-4xl mb-20 border-2  rounded-lg px-8 py-4 bg-boxColor">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-40 px-6 max-w-6xl  w-full ">
        {projects.map((project, index) => (
            <div
                key={index}
                className="bg-boxColor border  rounded-xl shadow-md shadow-amber-400 overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
                <img
                src={project.img}
                alt={project.title}
                className="w-full h-96 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                    <h2 className="text-3xl mb-2 text-txCol text-center">{project.title}</h2>
                    <p className="text-xl  font-sans font-semibold text-center mb-4">
                    {project.description}
                    </p>
                </div>
                <div className="flex justify-between pt-4">
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded-lg text-xl text-center hover:bg-gray-900/40 transition-all hover:underline"
                    >
                    GitHub
                    </a>
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded-lg text-xl text-center hover:bg-gray-900/40 transition-all hover:underline"
                    >
                    Live Demo
                    </a>
                </div>
                </div>
            </div>
            ))}

      </div>
    </section>
  );
}

export default Projects;
