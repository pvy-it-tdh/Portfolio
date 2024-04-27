import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import profileImage from "./images/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal"
        >
          Welcome To <span className="text-blue-400">My Website </span>
        </h1>
        <p data-aos="fade-left">
          Code dạy ta học Bug dạy ta khôn!! Tôi là một người code rất hay bị bug
          nhưng sau khi bị bug bạn nhận ra được điều và học được điều gì sau khi
          fix được con bug đó
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/pvy-it-tdh"
                className="text-blue-400 hover:text-blue-300 rounded-full glow p-2"
                target="_blank"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/ph%C3%BAc-vy-l%C3%AA-th%E1%BA%A1ch-645b882ab/"
                className="text-blue-400 hover:text-blue-300 rounded-full glow p-2"
                target="_blank"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076464913673"
                className="text-blue-400 hover:text-blue-300 rounded-full glow p-2"
                target="_blank"
                
              >
                <FaFacebookSquare className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/phucvy.vyphuc/"
                className="text-blue-400 hover:text-blue-300 rounded-full glow p-2"
                target="_blank"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={profileImage}
        className="rounded-full border-2 p-1"
        alt=""
        data-aos="fade-up"
        style={{
          width: "290px",
          height: "290px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Banner;
