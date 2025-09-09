import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%] ">
        <NavBar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%] ">
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
