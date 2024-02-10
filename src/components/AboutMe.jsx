import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="mx-auto px-3 border-b-2 w-[100%] pt-[28px]">
        <h2 className="text-raleway-md mx-auto">About Me:</h2>

        <section className="pr-12 flex flex-col space-y-3  pb-[28px]">
          <p>
            After having studied many subjects, I like to think of myself as a
            jack-of-many-trades,I have discovered my passion for coding. It has
            been a truly amazing journey and the more I code the more I learn. I
            love it.
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
              I summited the tallest mountain in Africa: Mount Kilimanjaro...
              when I have my heart set on something, I will work toward it until
              I succeed, be it scaling a mountain, or learning something new.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
