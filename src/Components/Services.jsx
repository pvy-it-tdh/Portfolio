import { 
  SiCplusplus, 
  SiPython, 
  SiPytorch, 
  SiTensorflow, 
  SiOpencv, 
  SiStmicroelectronics, 
  SiRaspberrypi, 
  SiArduino, 
  SiLinux, 
  SiDocker, 
  SiGit, 
  SiNvidia 
} from "react-icons/si";
import { FaMicrochip, FaBrain, FaWaveSquare, FaNetworkWired, FaTerminal, FaWifi, FaCogs } from "react-icons/fa";

const Services = () => {
  const categories = [
    {
      title: "Embedded Systems & Hardware",
      subtitle: "Firmware, RTOS & Low-level Control",
      icon: <FaMicrochip className="text-2xl text-sky-300" />,
      skills: [
        { name: "C / C++ (Embedded)", icon: <SiCplusplus className="text-sky-400" /> },
        { name: "STM32 & ARM Cortex", icon: <SiStmicroelectronics className="text-sky-400" /> },
        { name: "FreeRTOS & RTOS", icon: <FaCogs className="text-sky-400" /> },
        { name: "ESP32 & Arduino", icon: <SiArduino className="text-sky-400" /> },
        { name: "Peripheral Protocols", desc: "UART, SPI, I2C, CAN Bus, ADC/DAC" },
        { name: "Toolchains", desc: "STM32CubeIDE, Keil, Logic Analyzer" },
      ],
    },
    {
      title: "Signal Processing (DSP)",
      subtitle: "Filtering, FFT & Sensor Analysis",
      icon: <FaWaveSquare className="text-2xl text-sky-300" />,
      skills: [
        { name: "Digital Filtering", desc: "FIR, IIR, Kalman Filters, Butterworth" },
        { name: "Spectral Analysis", desc: "FFT, STFT, Wavelet Transform" },
        { name: "CMSIS-DSP", desc: "ARM Cortex-M Hardware DSP Acceleration" },
        { name: "Sensor Signal Processing", desc: "IMU (Accel/Gyro), PPG, ECG, Biosignals" },
        { name: "Feature Extraction", desc: "Time & Frequency domain features for TinyML" },
        { name: "Analysis Tools", desc: "MATLAB, SciPy & NumPy Signal" },
      ],
    },
    {
      title: "Artificial Intelligence & Edge AI",
      subtitle: "Deep Learning, TinyML & Vision",
      icon: <FaBrain className="text-2xl text-sky-300" />,
      skills: [
        { name: "Python", icon: <SiPython className="text-sky-400" /> },
        { name: "PyTorch & Deep Learning", icon: <SiPytorch className="text-sky-400" /> },
        { name: "TensorFlow & TinyML", icon: <SiTensorflow className="text-sky-400" /> },
        { name: "Computer Vision", icon: <SiOpencv className="text-sky-400" />, desc: "OpenCV, YOLO, Tracking" },
        { name: "Edge Platforms", icon: <SiNvidia className="text-sky-400" />, desc: "NVIDIA Jetson, Raspberry Pi" },
        { name: "Model Optimization", desc: "Quantization (INT8), Pruning, ONNX" },
      ],
    },
    {
      title: "IoT, Systems & Tools",
      subtitle: "Networking Protocols & Linux",
      icon: <FaNetworkWired className="text-2xl text-sky-300" />,
      skills: [
        { name: "Embedded Linux", icon: <SiLinux className="text-sky-400" /> },
        { name: "Raspberry Pi & SBCs", icon: <SiRaspberrypi className="text-sky-400" /> },
        { name: "IoT Protocols", icon: <FaWifi className="text-sky-400" />, desc: "MQTT, BLE, HTTP, WebSockets" },
        { name: "Git & Version Control", icon: <SiGit className="text-sky-400" /> },
        { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
        { name: "System Shell", icon: <FaTerminal className="text-sky-400" /> },
      ],
    },
  ];

  return (
    <div id="Services" className="relative py-24 px-6 lg:px-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-300 font-semibold px-3 py-1 rounded-full bg-sky-950/70 border border-sky-400/30">
            // TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white">
            Skills & <span className="text-sky-300">Research Domains</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base">
            Bridging embedded hardware, real-time signal processing, and intelligent deep learning models at the edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="rounded-2xl p-6 bg-slate-800/40 border border-sky-500/20 hover:border-sky-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-950/70 border border-sky-400/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-200 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-sky-300/80 font-mono mb-5">
                  {category.subtitle}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60 hover:border-sky-400/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                        {skill.icon && <span className="text-base">{skill.icon}</span>}
                        <span>{skill.name}</span>
                      </div>
                      {skill.desc && (
                        <p className="text-[11px] text-slate-400 mt-0.5 font-mono pl-0.5">
                          {skill.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/40 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="text-sky-300/80">Domain #{idx + 1}</span>
                <span>Active Research</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
