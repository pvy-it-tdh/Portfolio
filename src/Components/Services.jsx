import HTMLImage from "./images/html5.png";
import CSSImage from "./images/css.png";
import JS from "./images/js.png";
import reactImage from "./images/react.webp";
import nodejs from "./images/nodejs.png";

const Services = () => {
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-20 leading-normal text-blue-400 text-center">
        Services
      </h1>
      <div data-aos="fade-up" className="flex flex-wrap justify-center flex-column">
        <img src={HTMLImage} alt="HTML5 Logo" className="service-image" />
        <img src={CSSImage} alt="CSS Logo" className="service-image" />
        <img src={JS} alt="JavaScript Logo" className="service-image" />
        <img src={reactImage} alt="React Logo" className="service-image" />
        <img src={nodejs} alt="Node.js Logo" className="service-image" />
      </div>
    </div>
  );
};

export default Services;
