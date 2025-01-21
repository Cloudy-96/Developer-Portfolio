import "./App.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="grid lg:flex bg-red-900 min-h-[450px] lg:h-dvh">
        <hero className="lg:max-w-[35%] flex bgImage">
          <div className="self-intro flex-col space-y-4 py-2 rounded mx-4 px-4 my-auto bg-opacity-[50%] gradient h-fit">
            <h1 className="text-xl lg:text-5xl text-light-txt text-center">
              Frontend Developer
            </h1>

            <div className="lg:text-xl text-light-txt">
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

        <main className="bg-slate-50 lg:max-w-[65%] flex flex-col px-[20px] overflow-y-scroll">
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
