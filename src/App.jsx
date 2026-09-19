import About from "./Components/About";
import Banner from "./Components/Banner";
import { ContactUs } from "./Components/Contact";
import Nav from "./Components/Nav";
import Services from "./Components/Services";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-sky-400/30 selection:text-sky-200">
      <Nav />
      <main>
        <Banner />
        <About />
        <Services />
        <ContactUs />
      </main>
      <footer className="py-8 text-center text-xs font-mono text-slate-500 border-t border-slate-800/80">
        <p className="flex items-center justify-center gap-2 flex-wrap px-4">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="text-sky-300">Phuc Vy</span> • Embedded Systems & AI Lab • PTIT
          </span>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://orcid.org/0009-0003-7132-2816"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-300 transition"
          >
            ORCID: 0009-0003-7132-2816
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
