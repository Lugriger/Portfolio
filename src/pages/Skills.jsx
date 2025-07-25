import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs } from "react-icons/fa";
import { DiJavascript,DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from 'react-icons/si';




const skills = [
  {
    logo: <FaHtml5 />,
    type: "HTML",
    description: "The foundation of all my web pages – I use clean and semantic markup.",
    color: "text-orange-600",
  },
  {
    logo: <FaCss3Alt />,
    type: "CSS",
    description: "Responsive layouts using Flexbox, Grid and animations.",
    color: "text-blue-500",
  },
  {
    logo: <DiJavascript />,
    type: "JavaScript",
    description: "Core JS concepts like DOM, events, and API handling.",
    color: "text-yellow-400",
  },
  {
    logo: <FaReact className="animate-spinSlow" />,
    type: "React",
    description: "Components, props, hooks, and dynamic rendering.",
    color: "text-cyan-400",
  },
  {
    logo: <RiTailwindCssFill />,
    type: "Tailwind CSS",
    description: "Utility-first CSS framework for fast UI building.",
    color: "text-cyan-500",
  },
  {
    logo: <FaNodeJs />,
    type: "Node JS",
    description: "Server-side development with Express and RESTful APIs.",
    color: "text-green-500",
  },
  {
    logo: <DiMongodb/>,
    type: "MongoDB",
    description: "NoSQL database for storing and retrieving data.",
    color: "text-green-800",
  },
  {
    logo: <SiExpress/>,
    type: "Express",
    description: "Fast backend framework used with Node.js to handle routing and APIs.",
    color: "text-gray-500"

  }
];


function Skills() {

    return(
        <>
        <section id="skills" className="flex justify-center flex-col items-center mt-40 gap-10">
            <hr className="  backdrop-blur-3xl  w-3/4 h-4 mb-30"/>
            <h1 className=" text-4xl border-2 bg-boxColor rounded-lg min-w-80 h-24 flex items-center justify-center transition-all duration-150 mb-16">
                Skills
            </h1>
            

            
                <ul className="py-35 px-4 grid grid-cols-1 md:grid-cols-4 items-center lg:grid-cols-8 gap-8 justify-center tracking-wider">
                    {skills.map((skill, index) => (
                        <li key={index} className="p-4 flex flex-row  md:flex-col items-center text-start md:text-center gap-4 justify-between">
                            <span className={`text-8xl ${skill.color}`}>{skill.logo}</span>
                            <p className={`text-xl ${skill.color}`}>{skill.type}</p>
                            <p className="text-sm font-sans  font-semibold px-2 py-2 max-w-60  bg-boxColor rounded-lg max-h-[240px] text-txCol">{skill.description}</p>
                        </li>
                    ))}

                </ul>
            

        </section>
            
        </>
    )

}

export default Skills;