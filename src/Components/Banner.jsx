import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { Link } from "react-scroll";
import pvyImage from "./images/pvy.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="Home"
      className="lg:px-44 px-8 lg:py-0 py-16 text-center gap-8 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center min-h-[85vh]"
    >
      <div className="h-full lg:py-32 flex flex-col justify-center lg:items-start items-center text-white max-w-2xl">
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-400/30 text-sky-300 text-sm font-mono mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          Embedded Systems, AI & Signal Processing Researcher
        </div>

        <h1
          data-aos="fade-right"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">Phuc Vy</span>
        </h1>

        <p
          data-aos="fade-left"
          className="text-lg lg:text-xl text-slate-300 leading-relaxed font-light mb-8"
        >
          Researcher at the <span className="text-sky-200 font-medium">Embedded Systems & Artificial Intelligence Lab (PTIT)</span>. 
          Focusing on Embedded Firmware, Signal Processing, Edge AI, TinyML, and Real-time Intelligent Systems.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link spy={true} smooth={true} to="Services" offset={-70}>
            <button className="px-6 py-3 rounded-xl bg-sky-400 text-slate-950 font-semibold hover:bg-sky-300 transition duration-300 shadow-[0_0_20px_rgba(56,189,248,0.35)] cursor-pointer">
              Explore Skills
            </button>
          </Link>
          <Link spy={true} smooth={true} to="Contact" offset={-70}>
            <button className="px-6 py-3 rounded-xl border border-sky-400/40 text-sky-300 hover:bg-sky-950/50 hover:border-sky-300 transition duration-300 cursor-pointer">
              Contact Me
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mr-2">Connect:</span>
          <div className="flex space-x-3">
            <a
              href="https://orcid.org/0009-0003-7132-2816"
              className="text-[#a6ce39] hover:text-white p-2.5 rounded-xl bg-slate-800/80 border border-sky-500/20 hover:border-[#a6ce39] hover:shadow-[0_0_15px_rgba(166,206,57,0.4)] transition"
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
              title="ORCID: 0009-0003-7132-2816"
            >
              <SiOrcid className="text-2xl" />
            </a>
            <a
              href="https://github.com/pvy-it-tdh"
              className="text-sky-300 hover:text-white p-2.5 rounded-xl bg-slate-800/80 border border-sky-500/20 hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ph%C3%BAc-vy-l%C3%AA-th%E1%BA%A1ch-645b882ab/"
              className="text-sky-300 hover:text-white p-2.5 rounded-xl bg-slate-800/80 border border-sky-500/20 hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076464913673"
              className="text-sky-300 hover:text-white p-2.5 rounded-xl bg-slate-800/80 border border-sky-500/20 hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/phucvy.vyphuc/"
              className="text-sky-300 hover:text-white p-2.5 rounded-xl bg-slate-800/80 border border-sky-500/20 hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative group" data-aos="fade-up">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400/30 to-cyan-500/30 blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
        <img
          src={pvyImage}
          className="relative rounded-2xl border border-sky-400/30 p-1.5 bg-slate-800/70"
          alt="Phuc Vy - Embedded Systems & AI Lab Researcher"
          style={{
            width: "300px",
            height: "360px",
            objectFit: "cover",
            objectPosition: "center 15%",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            boxShadow: isHovered
              ? "0 0 25px rgba(56, 189, 248, 0.6)"
              : "0 0 10px rgba(56, 189, 248, 0.2)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
};

export default Banner;
