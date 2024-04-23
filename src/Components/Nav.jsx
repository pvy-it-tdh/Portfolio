import { Link } from "react-scroll";

const Nav = () => {
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate 900 trasition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true}  to="Home">
            <li className="my-4 borderb border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 borderb border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 borderb border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 borderb border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 borderb border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3x1 font-bold">Logo</span>
        </div>
        <div className="lg: flex md: lg: flex-1 items center justify-end font-normal">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] ">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects"> 
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true}k to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
