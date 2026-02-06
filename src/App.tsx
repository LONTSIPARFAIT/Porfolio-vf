import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Écouter le scroll pour l'effet parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="relative">
        {/* Particules d'arrière-plan avec effet parallax */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translateY(${scrollY * 0.1}px)`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20">
          <div className="px-5 md:px-[2%] lg:px-[5%] max-w-7xl mx-auto">
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </main>

        {/* Bouton retour en haut */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
          aria-label="Retour en haut"
        >
          ↑
        </button>
      </div>
    </div>
  );
}