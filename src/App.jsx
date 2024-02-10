import "./App.css";

function App() {
  const projects = [
    {
      name: "BookStat App",
      about:
        "This project was created as a nod to my love of reading and tracking books. BookStat acts as a digital book-journal which allows users to log information in a way that suits them.",
      img: "BookStat",
      readMoreUrl: "https://github.com/Cloudy-96/bookstat-server",
      gitHub: "https://github.com/Cloudy-96/BookStat-App",
      techStack: ["JavaScript", "React.js", "HTML", "CSS"],
    },
    // {
    //   name: "GhibVerse",
    //   about:
    //     "An (un)official Studio Ghibili Movie wiki page for fans who want to browse through information on these beautiful animated films",
    //   img: "",
    //   readMoreUrl: "",
    //   gitHub: "https://github.com/Cloudy-96/GhibVerse",
    //   techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"],
    // },
    {
      name: "NASA's Astronomy Image of the Day",
      about:
        "A redesign of NASA's own page, allowing me to explore UI. Using NASA's API this page loads a new image related to astronomy and shares an explanation of what is being shown.",
      img: ":)",
      readMoreUrl: "https://stars-of-the-day-git-master-cloudy-96.vercel.app/",
      gitHub: "https://github.com/Cloudy-96/Stars-of-the-day",
      techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"],
    },
    // {
    //   name: "ClimbIt App",
    //   about:
    //     "Coming soon... an app for rock climbers that want to keep a record of each of their climbs.",
    //   img: "",
    //   readMoreUrl: "",
    //   gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   techStack: ["JavaScript", "React.js", "HTML", "CSS", "..."],
    // },
  ];

  return (
    <>
      <div className="flex-col lg:flex h-dvh">
        <hero className="lg:w-[35%] h-dvh sticky bg-light-background">
          {/* <header
            className="relative flex justify-between w-[100%] bg-light-accent "
            id="header"
          >
            <h1 className="title text-raleway-bold text-light-background">
              Kat De Mey
            </h1>
            <nav className="flex gap-4 px-2 right">
              <div className="about-me-button">
                <a href="#about-me">About Me</a>
              </div>
              <div className="FAQs-button">
                <a href="#FAQs">FAQs</a>
              </div>
              <div>
                <a href="#portfolio">Portfolio</a>
              </div>
              <div>
                <a href="#experience">Experience</a>
              </div>
              <div>
                <a href="#contact">Contact</a>
              </div>
            </nav>
          </header> */}

          <div className="self-intro pt-36 pb-20 bg-light-background">
            <h1 className="text-5xl text-light-txt  ">
              Web Developer at OhBaby! Games
            </h1>
            <div className="text-xl text-light-txt  p-6">
              <p className="text-light-txt ">
                Hi I'm Kat, a junior full stack developer based in Leamington
                Spa, UK.
              </p>
              <p className="text-light-txt ">
                Aiming to become the <scan>best</scan> and work for the best.
              </p>
              <p className=" text-light-txt ">
                {" "}
                I specialize in <scan>React</scan>, <scan>JavaScript</scan>,
                <scan> Vue Js</scan>, <scan>CSS</scan>,<scan>Tailwind</scan>,
                and <scan>Node.js</scan>.
              </p>
            </div>
          </div>
        </hero>

        <main className="bg-slate-50 lg:w-[65%] flex flex-col px-[20px] ">
          {/* ABOUT ME */}
          <div className="mx-auto px-3 border-b-2 w-[100%] pt-[28px]">
            <h2 className="text-raleway-md mx-auto">About Me:</h2>

            <section className="pr-12 flex flex-col space-y-3  pb-[28px]">
              <p>
                After having studied many subjects, I like to think of myself as
                a jack-of-many-trades,I have discovered my passion for coding.
                It has been a truly amazing journey and the more I code the more
                I learn. I love it.
              </p>

              <p>
                Some fun facts about me is that I am an avid reader, and rock
                climber, and I also love to have a good time hanging out with
                friends, and learning new languages (the more I learn, the more
                people I can talk to!)
              </p>

              <ul className="font-semibold">
                Something cool that I have acheived:
                <li className="font-normal">
                  I summited the tallest mountain in Africa: Mount
                  Kilimanjaro... when I have my heart set on something, I will
                  work toward it until I succeed, be it scaling a mountain, or
                  learning something new.
                </li>
              </ul>
            </section>
          </div>

          {/* PORTFOLIO */}
          {/* <Portfolio /> */}

          <div className="mx-auto lg:px-3 border-b-2 w-[100%] pt-[28px]">
            <h2 className="text-raleway-md mx-auto">Portfolio:</h2>

            <div className="flex justify-center mx-auto ">
              <ul className=" projects flex gap-6 overflow-x-scroll">
                {projects.map((project) => (
                  <li
                    key="project.id"
                    className="p-8 bg-light-primary bg-opacity-[60%] shadow-xs rounded-md m-2 grid mx-auto w-fit"
                  >
                    <h2 className="text-xl font-semibold m-4 ">
                      {project.name}
                    </h2>
                    <img
                      className="w-96 h-40"
                      src={project.img}
                      alt={`${project.name} snapshot coming soon`}
                    />
                    <p className="hide m-4 text-light-txt">{project.about}</p>
                    <div className="hide">
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

          {/* EXPERIENCE */}
          {/* <Experience /> */}

          <div className="mx-auto px-3 border-b-2 w-[100%] pt-[28px]">
            <h2 className="text-raleway-md mx-auto">Experience:</h2>

            <section className="pr-12 flex flex-col space-y-3  pb-[28px]">
              <div className="max-w-5xl text-left mx-auto flex-flex-col space-y-[16px]">
                <p>
                  Completed a full-time 6-month training program as a full stack
                  developer at Boolean Coding Academy. Worked on various
                  projects that taught me how to turn user requirements into
                  software and work through the full development cycle using
                  React, JavaScript, RESTful APIs, and PostgreSQL.
                </p>

                <p>
                  Have dedicated over 900 hours of study and work on various
                  projects which have included building:
                </p>
                <ul className="experienceUL px-20 list-disc">
                  <li> responsive websites</li>
                  <li> creating dynamic front-end and web applicationss</li>
                  <li> designing, creating and using databases</li>
                  <li> writing and maintaining documentation for APIs</li>
                </ul>
              </div>

              <div className="skills">
                <h3 className="text-xl font-semibold m-10">Tech Stack</h3>

                <ul className="flex justify-center gap-5">
                  <li>HTML & CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>TDD</li>
                  <li>OOP</li>
                  <li>Agile</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CONTACT */}
          {/* <Contact /> */}
        </main>
      </div>
    </>
  );
}

export default App;
