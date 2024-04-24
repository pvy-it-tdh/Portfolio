import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import profileImage from "./images/profile.jpg"; // Corrected import


const About = () => {
  return (
    <div>
      <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
          <h1 className="text-[52px] font-semibold mb-8 leading-normal">
            Welcome To <span className="text-fuchsia-500">My Website </span>
          </h1>
          <p>
            Code dạy ta học Bug dạy ta khôn!! Tôi là một người code rất hay bị
            bug nhưng sau khi bị bug bạn nhận ra được điều và học được điều gì
            sau khi fix được con bug đó
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <AiFillGithub className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <FaLinkedin className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <FaFacebookSquare className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
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
          style={{
            width: "290px",
            height: "290px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
export default About;