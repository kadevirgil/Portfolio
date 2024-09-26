import { AiFillMail } from "react-icons/ai";
import Reveal from "../util/Reveal";

const Contact = () => {
  return (
    <section className="py-12 px-8" id="contact">
      <div className="max-w-xl mx-auto bg-gray-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-sky-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="text-sky-300 hover:underline"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-sky-300 hover:underline"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <a href="mailto:bob.ross@notreal.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-indigo-300 transition-colors">
              <AiFillMail />
              <span>bob@notreal.com</span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
