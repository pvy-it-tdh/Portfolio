import HTMLImage from "./images/html5.png";
import CSSImage from "./images/css.png";
import JS from "./images/js.png";
import reactImage from "./images/react.webp";
import nodejs from "./images/nodejs.png";
import spring from "./images/spring.png";
import java from "./images/java.png";
import cpp from "./images/c++.jpg";
import tailwind from "./images/tailwind.png";
import postgres from "./images/postgres.jpg";

const Services = () => {
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-down"
        className="text-[52px] font-semibold mb-20 leading-normal text-blue-400 text-center"
      >
        Services
      </h1>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center flex-column"
      >
        <img src={HTMLImage} alt="HTML5 Logo" className="service-image" />
        <img src={CSSImage} alt="CSS Logo" className="service-image" />
        <img src={JS} alt="JavaScript Logo" className="service-image" />
        <img src={reactImage} alt="React Logo" className="service-image" />
        <img src={nodejs} alt="Node.js Logo" className="service-image" />
        <img src={spring} alt="Spring Logo" className="service-image" />
        <img src={java} alt="java Logo" className="service-image" />
        <img src={cpp} alt="c++ Logo" className="service-image" />
        <img src={tailwind} alt="tailwind Logo" className="service-image" />
        <img src={postgres} alt="postgrs Logo" className="service-image" />
      </div>
    </div>
  );
};

export default Services;
