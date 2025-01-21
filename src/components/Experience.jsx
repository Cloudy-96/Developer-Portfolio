// import {
//   ReactSVG,
//   JavascriptSVG,
//   TypescriptSVG,
//   HtmlSVG,
//   CssSVG,
//   NodeSVG,
//   TailwindSVG,
//   JwtSVG,
//   ExpressJsSVG,
//   JiraSVG,
//   GitSVG,
// } from "../svgs/tech-skills";
import "./Experience.css";
const Experience = () => {
  return (
    <>
      <div className="mx-auto px-3 border-b-2 w-[100%] pt-[28px]">
        <h2 className="text-raleway-md mx-auto">Experience:</h2>

        <section className="pr-12 flex flex-col space-y-3  pb-[28px]">
          <div className="max-w-5xl text-left mx-auto flex-flex-col space-y-[16px]">
            <p>Developer at OhBaby! Games</p>
          </div>
        </section>
 git pull       <section className="pr-12 flex flex-col space-y-3  pb-[28px]">
          <div className="max-w-5xl text-left mx-auto flex-flex-col space-y-[16px]">
            <p>
              Completed a full-time 6-month training program as a full stack
              developer at Boolean Coding Academy. Worked on various projects
              that taught me how to turn user requirements into software and
              work through the full development cycle using React, JavaScript,
              RESTful APIs, and PostgreSQL.
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
    </>
  );
};

export default Experience;
