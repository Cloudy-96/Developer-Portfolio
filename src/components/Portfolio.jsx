// import { Testing } from "../svgs/tech-stack";
import "./Portfolio.css";
import AOPD from "../assets/AOPD.png";
import BookStat from "../assets/homepage.png";
import AppleDl from "../assets/apple-dl.png";
import GooglePlay from "../assets/googleplay.png";
import screenShot from "../assets/mobile-screenshot.png";

const petProjects = [
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

const OBB = [
  {
    id: 0,
    name: "Oh Baby! Games",
    about:
      "This project was created as a nod to my love of reading and tracking books. BookStat acts as a digital book-journal which allows users to log information in a way that suits them.",
    img: "https://www.ohbabygames.com/assets/obk-b65cc761.jpg",
    readMoreUrl: "https://www.ohbabygames.com/",
  },
  {
    id: 1,
    name: "Oh Baby! Mobile",
    about: "Developed for both ios and Android",
    img: screenShot,
    readMoreUrl:
      "https://play.google.com/store/apps/details?id=com.obbgames.obbmobile&pli=1",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="mx-auto lg:px-3 border-b-2 w-[100%] py-[24px] text-dark-txt flex-col space-y-6">
        <h2 className="text-raleway-md mx-auto">Portfolio:</h2>

        <div className="flex justify-center mx-auto">
          <ul className=" projects flex gap-6 overflow-auto ">
            <li
              key="OBB[0].id"
              className="shadow-dark-primary bg-opacity-[60%] bg-dark-primary shadow-md rounded-md m-2 grid mx-auto w-fit max-w-[400px] cursor-pointer"
            >
              <a
                className="cursor-pointer underline"
                href={
                  OBB[0].readMoreUrl
                    ? OBB[0].readMoreUrl
                    : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="text-xl font-semibold m-4 ">{OBB[0].name}</h2>
                <img
                  className="rounded-md"
                  src={OBB[0].img}
                  alt={`${OBB[0].name} snapshot coming soon`}
                />
                <p className="hidden m-4 text-dark-txt">{OBB[0].about}</p>
              </a>
            </li>

            <li className="shadow-dark-primary bg-opacity-[60%] bg-dark-primary shadow-md rounded-md m-2 grid mx-auto w-fit max-w-[400px]h-[100%]">
              <h2 className="text-xl font-semibold m-4 cursor-pointer">
                {OBB[1].name}
              </h2>
              <div className="flex gap-2 h-[100%] bg-slate-200 rounded-lg">
                <img
                  className="rounded-md h-[200px] cursor-pointer"
                  src={OBB[1].img}
                  alt={`${OBB[1].name} snapshot coming soon`}
                />
                <div className="*:rounded-lg *:w-[100px] space-y-2 flex-col p-1 *:cursor-pointer my-auto">
                  <img className="rounded-md" src={AppleDl} alt={`apple`} />{" "}
                  <img className="rounded-md" src={GooglePlay} />
                </div>
              </div>
              <p className="hidden m-4 text-dark-txt">{OBB[1].about}</p>
            </li>
          </ul>
        </div>

        <div className="mx-auto lg:px-3 w-[100%] text-dark-txt">
          <h2 className="text-raleway-md mx-auto">Solo Projects:</h2>

          <ul className=" projects flex gap-6 overflow-auto ">
            <li className="shadow-dark-primary bg-opacity-[60%] bg-dark-primary shadow-md rounded-md m-2 grid mx-auto w-fit max-w-[400px]h-[100%]">
              <h2 className="text-xl font-semibold m-4 cursor-pointer">
                {petProjects[0].name}
              </h2>
              <img
                className="rounded-md h-[200px] cursor-pointer"
                src={petProjects[0].img}
                alt={`${petProjects[0].name} snapshot coming soon`}
              />
              <p className="hidden m-4 text-dark-txt">{petProjects[0].about}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
