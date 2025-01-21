// import { Testing } from "../svgs/tech-stack";
import "./Portfolio.css";
import AOPD from "../assets/AOPD.png";
import BookStat from "../assets/homepage.png";
const projects = [
  {
    name: "BookStat App",
    about:
      "This project was created as a nod to my love of reading and tracking books. BookStat acts as a digital book-journal which allows users to log information in a way that suits them.",
    img: BookStat,
    readMoreUrl: "https://github.com/Cloudy-96/bookstat-server",
    gitHub: "https://github.com/Cloudy-96/BookStat-App",
    techStack: ["JavaScript", "React.js", "HTML", "CSS"],
  },
  {
    name: "GhibVerse",
    about:
      "An (un)official Studio Ghibili Movie wiki page for fans who want to browse through information on these beautiful animated films",
    img: "",
    readMoreUrl: "",
    gitHub: "https://github.com/Cloudy-96/GhibVerse",
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"],
  },
  {
    name: "NASA's Astronomy Image of the Day",
    about:
      "A redesign of NASA's own page, allowing me to explore UI. Using NASA's API this page loads a new image related to astronomy and shares an explanation of what is being shown.",
    img: AOPD,
    readMoreUrl: "https://stars-of-the-day-git-master-cloudy-96.vercel.app/",
    gitHub: "https://github.com/Cloudy-96/Stars-of-the-day",
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"],
  },
  {
    name: "ClimbIt App",
    about:
      "Coming soon... an app for rock climbers that want to keep a record of each of their climbs.",
    img: "",
    readMoreUrl: "",
    gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "..."],
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="mx-auto lg:px-3 border-b-2 w-[100%] pt-[28px]">
        <h2 className="text-raleway-md mx-auto">Portfolio:</h2>

        <div className="flex justify-center mx-auto ">
          <ul className=" projects flex gap-6 overflow-auto">
            {projects.map((project) => (
              <li
                key="project.id"
                className="shadow-light-primary bg-opacity-[60%] shadow-md rounded-md m-2 grid mx-auto w-fit max-w-[400px] cursor-pointer"
              >
                {/* <h2 className="text-xl font-semibold m-4 ">{project.name}</h2> */}
                <img
                  className="rounded-md"
                  src={project.img}
                  alt={`${project.name} snapshot coming soon`}
                />
                <p className="hidden m-4 text-light-txt">{project.about}</p>
                <div className="hidden">
                  <a
                    className="cursor-pointer underline"
                    href={
                      project.readMoreUrl
                        ? project.readMoreUrl
                        : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
                  </a>
                  <br />
                  <a
                    className="cursor-pointer underline "
                    href={project.gitHub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  {/* TECH STACK */}
                  <div className="flex my-2 mx-auto text-light-txt">
                    <ul className="flex gap-5 mx-auto my-2">
                      {project.techStack.map((stack) => (
                        <li className="border border-current p-1 rounded self-center">
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
