// import { LinkedInSVG, GithubSVG } from "../svgs/socials";

const Contact = () => {
  return (
    <>
      <div className="Contact bg-zinc-800 py-10 " id="contact">
        <h2 className="font-mono text-6xl my-7 text-gray-200">Say Hi!</h2>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/Cloudy-96"
            target="_blank"
            rel="noreferrer"
          >
            {/* <GithubSVG /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/kat-de-mey-80409a21b/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {/* <LinkedInSVG /> */}
          </a>
        </div>
        <p className="p-10 text-gray-200">Kat De Mey</p>
      </div>
    </>
  );
};

export default Contact;
