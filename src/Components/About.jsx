
import profileImage from "./images/profile.jpg"; // Corrected import

const About = () => {
  return (
    <div>
      <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal text-blue-400 uppercase"
          >
            About Me
          </h1>
          <p data-aos="fade-left">
            Code dạy ta học Bug dạy ta khôn!! Tôi là một người code rất hay bị
            bug nhưng sau khi bị bug bạn nhận ra được điều và học được điều gì
            sau khi fix được con bug đó
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <button className="neno-button shadow-x1 hover:shadow-blue-400 text-white border-2 hover:bg-blue-800  border-blue-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-down"
          src={profileImage}
          className=" border-2 p-1 lg:order-first"
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
};
export default About;
