import "./aboutMe.css";
import Me from "../assets/kat.jpeg";

const AboutMe = () => {
  return (
    <div className="flex py-[28px] gap-2  border-y-2 mt-[28px] w-[100%]">
      <img src={Me} alt="" className="h-[350px] rounded-xl hidden md:flex lg:hidden " />
      <div className="mx-auto px-1 lg:px-3 w-[100%]">
        <h2 className="text-raleway-md mx-auto text-dark-txt">About Me:</h2>

        <section className="pr-12 flex flex-col space-y-3 text-dark-txt">
          <p>
            After having studied many subjects, I like to think of myself as a
            jack-of-many-trades,I have discovered my passion for coding. It has
            been a truly amazing journey and the more I code the more I learn. I
            love it.
          </p>

          <p>
            Some fun facts about me is that I am an avid reader, have summited
            the tallest mountain in Africa, and I also love to have a good time
            hanging out with friends, and learning new languages (the more I
            learn, the more people I can talk to!)
          </p>

          {/* <ul className="font-semibold">
            Something cool that I have acheived:
            <li className="font-normal">
              I summited the tallest mountain in Africa: Mount Kilimanjaro...
              when I have my heart set on something, I will work toward it until
              I succeed, be it scaling a mountain, or learning something new.
            </li>
          </ul> */}
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
