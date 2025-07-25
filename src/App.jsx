import { useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import FadeContent from './components/FadeContent';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from "./components/Footer";
import { ArrowDown, ArrowUp } from 'lucide-react';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = ['home', 'about', 'skills', 'projects', 'contact','footer'];
  const [atBottom, setAtBottom] = useState(false);

  const handleArrowClick = () => {
    let nextSection = currentSection + 1;
    if (nextSection >= sections.length) {
        nextSection = 0;

    }

    const nextSectionElement = document.getElementById(sections[nextSection])
     if (nextSectionElement) {
        nextSectionElement.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(nextSection);
      }
  }

  useEffect(() => {
  if (isLoading) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, 
    }
  );


  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => {
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  };
}, [isLoading, sections]);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (docHeight > windowHeight && scrollY + windowHeight >= docHeight - 20) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  

  return (
    <>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          

          <FadeContent blur={false} duration={800} easing="ease-in-out" >
            <Navbar />
            <main className="bg-bgCol w-full min-h-screen pt-16 font-bebas text-txCol ">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer/>
            </main>
            
          </FadeContent>
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 animate-bounce text-arrow">
            {!atBottom ? (
            <button onClick={handleArrowClick} className="flex flex-col justify-center items-center cursor-pointer">
              <ArrowDown className="h-2"/>
              <ArrowDown className="h-4" />
              <ArrowDown />
            </button>)
            : (
              <button onClick={scrollToTop} className="flex flex-col justify-center items-center cursor-pointer">
                <ArrowUp/>
                <ArrowUp className="h-4"/>
                <ArrowUp className="h-2"/>
              </button>
            )

            }
            
          </div>

        </>
      )}
    </>
  );
}

export default App;