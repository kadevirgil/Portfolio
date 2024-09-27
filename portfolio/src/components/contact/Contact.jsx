import { AiFillMail } from "react-icons/ai";
import Reveal from "../../common/Reveal";

const Contact = () => {
  return (
    <section className="px-8 py-12" id="contact">
      <div className="mx-auto max-w-xl rounded-xl bg-gray-800 px-8 py-12">
        <Reveal width="w-full">
          <h4 className="text-center text-4xl font-black md:text-5xl">
            Contact<span className="text-sky-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="my-8 text-center leading-relaxed text-zinc-300">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/kade-virgil-a6522a285/"
              target="_blank"
              className="text-sky-300 hover:underline"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <a href="mailto:kadevirgil@gmail.com">
            <div className="mx-auto flex w-fit items-center justify-center gap-2 whitespace-normal text-lg transition-colors duration-200 hover:text-sky-300 md:text-2xl">
              <AiFillMail />
              <span>kadevirgil@gmail.com</span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
