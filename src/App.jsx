import "./App.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="grid lg:flex h-dvh">
        <hero className="lg:w-[35%] h-dvh lg:relative top-0 bg-light-background">
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

        <main className="bg-slate-50 lg:w-[65%] flex flex-col px-[20px] overflow-y-scroll">
          {/* ABOUT ME */}
          <AboutMe />

          {/* PORTFOLIO */}
          <Portfolio />

          {/* EXPERIENCE */}
          <Experience />

          {/* CONTACT */}
          {/* <Contact /> */}
        </main>
      </div>
    </>
  );
}

export default App;
