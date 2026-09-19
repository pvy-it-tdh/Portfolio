import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const ContactUs = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm("service_56faf8d", "template_fhdkpol", form.current, {
        publicKey: "xtEu02FytCEqXRkZZ",
      })
      .then(
        () => {
          setSending(false);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setSending(false);
          setStatus("error");
        }
      );
  };

  return (
    <div id="Contact" className="relative py-24 px-8 lg:px-24 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-300 font-semibold px-3 py-1 rounded-full bg-sky-950/70 border border-sky-400/30">
            // GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white">
            Contact <span className="text-sky-300">Me</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-base">
            Feel free to reach out for research collaboration, embedded AI discussions, or academic inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 text-sky-300 font-mono">
              <FaMapMarkerAlt className="text-sky-400" /> Embedded Systems & AI Lab, PTIT
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="p-8 md:p-10 rounded-2xl bg-slate-800/40 border border-sky-500/20 shadow-[0_0_30px_rgba(56,189,248,0.08)]"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-slate-300 font-mono">
                  Your Name
                </label>
                <input
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                  placeholder="e.g. John Doe"
                  type="text"
                  name="from_name"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-slate-300 font-mono">
                  Your Email
                </label>
                <input
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                  placeholder="e.g. name@domain.com"
                  type="email"
                  name="from_email"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-300 font-mono">
                Message
              </label>
              <textarea
                required
                name="message"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition resize-none"
                rows="5"
                placeholder="Share your thoughts, inquiry or proposal..."
              ></textarea>
            </div>

            {status === "success" && (
              <div className="p-4 rounded-xl bg-sky-950/80 border border-sky-400/40 text-sky-300 text-center text-sm font-medium">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-950/80 border border-red-400/40 text-red-300 text-center text-sm font-medium">
                ✕ Something went wrong. Please try again or reach out directly.
              </div>
            )}

            <button
              disabled={sending}
              type="submit"
              className="self-center flex items-center gap-2 px-8 py-3.5 mt-2 font-semibold text-slate-950 bg-sky-400 rounded-xl hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] focus:outline-none transition-all duration-300 disabled:opacity-50 cursor-pointer"
            >
              <FaPaperPlane className="text-sm" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
