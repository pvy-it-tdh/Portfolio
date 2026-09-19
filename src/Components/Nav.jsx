import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="h-10vh flex justify-between items-center text-white lg:py-5 px-8 md:px-20 py-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl lg:text-3xl font-bold tracking-tight">
            Phuc<span className="text-sky-300">Vy</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-full">
            Embedded & AI
          </span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:font-normal">
          <ul className="flex gap-8 mr-6 text-base font-medium text-slate-300">
            <Link spy={true} smooth={true} to="Home" offset={-70}>
              <li className="hover:text-sky-300 transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About" offset={-70}>
              <li className="hover:text-sky-300 transition cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services" offset={-70}>
              <li className="hover:text-sky-300 transition cursor-pointer">
                Skills & Research
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact" offset={-70}>
              <li className="hover:text-sky-300 transition cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden text-sky-300 text-xl">
          <button className="p-2 transition" onClick={handleClick} aria-label="Toggle Menu">
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {click && (
        <div className="lg:hidden absolute top-full w-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition">
          <ul className="text-center text-lg py-8 px-6 text-slate-200">
            <Link spy={true} smooth={true} to="Home" offset={-70} onClick={() => setClick(false)}>
              <li className="my-3 py-2 border-b border-slate-800 hover:text-sky-300 hover:bg-slate-800/60 rounded transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About" offset={-70} onClick={() => setClick(false)}>
              <li className="my-3 py-2 border-b border-slate-800 hover:text-sky-300 hover:bg-slate-800/60 rounded transition cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services" offset={-70} onClick={() => setClick(false)}>
              <li className="my-3 py-2 border-b border-slate-800 hover:text-sky-300 hover:bg-slate-800/60 rounded transition cursor-pointer">
                Skills & Research
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact" offset={-70} onClick={() => setClick(false)}>
              <li className="my-3 py-2 border-b border-slate-800 hover:text-sky-300 hover:bg-slate-800/60 rounded transition cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
