
import profileImage from "./images/profile.jpg"; // Corrected import

const About = () => {
  return (
    <div>
      <div
        id="About"
        className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
      >
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal text-blue-400 uppercase"
          >
            About Me
          </h1>
          <p data-aos="fade-left" className="text-[20px]">
            I am a passionate learner, always eager to acquire new knowledge.
            Currently, I am seeking an internship as a full-stack developer to
            apply my existing skills, gain new insights, and immerse myself in a
            professional environment. My goal is to become an excellent
            full-stack developer and solution architect soon.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
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
            borderRadius:"50% "
          }}
        />
      </div>
    </div>
  );
};
export default About;
