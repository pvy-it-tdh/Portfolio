import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_56faf8d", "template_fhdkpol", form.current, {
        publicKey: "xtEu02FytCEqXRkZZ",
      })
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
           console.error(error);
           alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="Contact">
      <h1
        data-aos="fade-down"
        className="text-[52px] font-semibold mb-10 leading-normal text-blue-400 text-center"
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col lg:w-1/2 mx-auto"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="flex flex-col w-full lg:w-1/2">
            <label className="mb-2 text-gray-600">Name</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-200 border-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter Your Name"
              type="text"
              name="from_name"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <label className="mb-2 text-gray-600">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-200 border-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter Your Email"
              type="email"
              name="from_email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-600">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 rounded-lg bg-gray-200 border-2 focus:outline-none focus:border-blue-400"
            cols="20"
            rows="6"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button className="self-center px-6 py-3 mt-4 font-semibold text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          Send
        </button>
      </form>
    </div>
  );
};
