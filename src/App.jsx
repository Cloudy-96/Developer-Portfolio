import "./App.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="grid lg:flex min-h-[450px] lg:h-dvh bg-slate-950">
        <hero className="hidden lg:max-w-[35%] lg:flex bgImage min-h-[450px] rounded">
          <div className="self-intro flex-col space-y-4 py-2 rounded m-4 px-4 bg-opacity-[50%] gradient h-fit justify-items-center border">
            <h1 className="text-xl lg:text-3xl text-dark-txt text-center">
              Software Developer
            </h1>

            <div className="lg:text-xl text-dark-txt">
              <p className="text-dark-txt ">
                Hi I'm Kat S, a frontend developer based in Leamington Spa, UK.
              </p>

              <p className=" text-dark-txt ">
                {" "}
                I specialize in <scan>React</scan>, <scan>JavaScript</scan>,
                <scan> Vue Js</scan>, <scan>CSS</scan>,<scan>Tailwind</scan>,
                and <scan>Node.js</scan>.
              </p>
            </div>
          </div>
        </hero>

        <hero className="lg:hidden bgImageGithub p-6">
          <div className="self-intro flex-col space-y-4 py-2 rounded mx-4 px-4 my-auto bg-opacity-[50%] gradient h-fit justify-items-center border">
            <h1 className="text-xl lg:text-5xl text-dark-txt text-center">
              Software Developer
            </h1>

            <div className="lg:text-xl text-dark-txt">
              <p className="text-dark-txt ">
                Hi I'm Kat S, a frontend developer based in Leamington Spa, UK.
              </p>

              <p className=" text-dark-txt ">
                {" "}
                I specialize in <scan>React</scan>, <scan>JavaScript</scan>,
                <scan> Vue Js</scan>, <scan>CSS</scan>,<scan>Tailwind</scan>,
                and <scan>Node.js</scan>.
              </p>
            </div>
          </div>
        </hero>

        <main className="bg-slate-950 lg:max-w-[65%] flex flex-col px-[20px] overflow-y-scroll">
          {/* ABOUT ME */}
          <AboutMe />

          {/* EXPERIENCE */}
          <Experience />
          
          {/* PORTFOLIO */}
          <Portfolio />

          {/* CONTACT */}
          {/* <Contact /> */}
        </main>
      </div>
    </>
  );
}

export default App;
