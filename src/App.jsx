import About from "./Components/About";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Services from "./Components/Services";

function App() {

  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Banner />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App
