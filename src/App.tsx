import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-20">
        <div className="p-5 max-w-7xl mx-auto">
          <Home />
          <About />
          <Experience />
          <Projects />
        </div>
        <Footer />
      </main>
    </div>
  );
}