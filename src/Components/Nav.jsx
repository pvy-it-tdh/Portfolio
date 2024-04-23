import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:font-normal">
          <ul className="flex gap-8 mr-16 text-base">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-fuchsia-600 transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="hover:text-fuchsia-600 transition cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li className="hover:text-fuchsia-600 transition cursor-pointer">
                Services
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
              <li className="hover:text-fuchsia-600 transition cursor-pointer">
                Projects
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-fuchsia-600 transition cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden">
          <button className="transition" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {click && (
        <div className="lg:hidden absolute top-16 w-full left-0 right-0 bg-slate-200 transition">
          <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="Home">
              <li className="my-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="my-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li className="my-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded">
                Services
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
              <li className="my-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded">
                Projects
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="my-4 border-b border-slate-800 hover:bg-slate-600 hover:rounded">
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
