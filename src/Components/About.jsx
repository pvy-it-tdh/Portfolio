
import esaiLabImage from "./images/esai_lab.jpg";
import { FaMicrochip, FaBrain, FaWaveSquare, FaNetworkWired } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

const About = () => {
  return (
    <div id="About" className="relative py-20 border-t border-slate-800/80">
      <div className="lg:px-44 px-8 flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center">
        <div className="flex flex-col justify-center lg:items-start items-center text-white max-w-2xl mt-10 lg:mt-0">
          <div
            data-aos="fade-right"
            className="inline-block text-xs uppercase tracking-widest text-sky-300 font-mono font-semibold mb-2"
          >
            // BACKGROUND & INTERESTS
          </div>
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-normal text-white"
          >
            About <span className="text-sky-300">Me</span>
          </h2>
          <p
            data-aos="fade-left"
            className="text-base lg:text-lg text-slate-300 leading-relaxed font-light mb-4 text-center lg:text-left"
          >
            I am a passionate researcher at the <strong className="text-sky-200 font-medium">Embedded Systems & Artificial Intelligence (AI) Lab at PTIT</strong>. 
            My research revolves around the convergence of physical hardware, digital signal processing, and intelligent algorithms.
          </p>
          <p
            data-aos="fade-left"
            className="text-base lg:text-lg text-slate-300 leading-relaxed font-light mb-8 text-center lg:text-left"
          >
            I specialize in digital signal processing (<span className="text-sky-300 font-medium">DSP, noise filtering & time-frequency analysis</span>), 
            deploying optimized deep learning models onto resource-constrained edge hardware (<span className="text-sky-300 font-medium">TinyML & Edge AI</span>), 
            and designing real-time firmware (<span className="text-sky-300 font-medium">RTOS, Embedded C/C++</span>).
          </p>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            <div className="p-4 rounded-xl bg-slate-800/60 border border-sky-400/20 hover:border-sky-400/60 transition duration-300 group">
              <div className="text-sky-300 text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaMicrochip />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Embedded & RTOS</h3>
              <p className="text-xs text-slate-400">STM32, ARM Cortex, FreeRTOS, Low-level Drivers</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-sky-400/20 hover:border-sky-400/60 transition duration-300 group">
              <div className="text-sky-300 text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaWaveSquare />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Signal Processing (DSP)</h3>
              <p className="text-xs text-slate-400">Digital Filters, FFT, Wavelet, IMU / Biosignals</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-sky-400/20 hover:border-sky-400/60 transition duration-300 group">
              <div className="text-sky-300 text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaBrain />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Edge AI & TinyML</h3>
              <p className="text-xs text-slate-400">Computer Vision, Quantization, PyTorch, Jetson</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-sky-400/20 hover:border-sky-400/60 transition duration-300 group">
              <div className="text-sky-300 text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaNetworkWired />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">IoT & Systems</h3>
              <p className="text-xs text-slate-400">MQTT, Embedded Linux, Sensor Fusion & Actuators</p>
            </div>
          </div>
        </div>

        <div className="relative group lg:order-first" data-aos="fade-down">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400/30 to-cyan-500/30 blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative rounded-2xl border-2 border-sky-400/30 p-2 bg-slate-900/80 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
            <img
              src={esaiLabImage}
              className="rounded-xl object-contain"
              alt="ESAI Lab - PTITHCM"
              style={{
                width: "360px",
                height: "auto",
                maxHeight: "260px",
              }}
            />
            <div className="text-center mt-2 font-mono text-xs text-sky-300/90 tracking-wide">
              PTITHCM • ESAI Laboratory
            </div>
            <div className="flex justify-center mt-2.5">
              <a
                href="https://orcid.org/0009-0003-7132-2816"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-sky-400/30 hover:border-[#a6ce39] text-xs font-mono text-slate-300 hover:text-white transition duration-300 shadow-sm"
              >
                <SiOrcid className="text-[#a6ce39] text-sm" />
                <span>ORCID: 0009-0003-7132-2816</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
