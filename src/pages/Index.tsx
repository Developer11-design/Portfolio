import { useState, useEffect, ReactElement } from 'react';
import {
  Mail, Github, Linkedin, ExternalLink, ChevronDown, Award, Briefcase,
  Code2, Download, BrainCircuit, Workflow, Menu, Codepen, X, Atom
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Skills from './Skills';
import About from './About';
import Internships from './Internships';
import Certifications from './Certifications';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';

import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiVite, SiTypescript,
  SiBootstrap, SiTailwindcss, SiPython, SiNumpy, SiPandas, SiScikitlearn,
  SiTensorflow, SiKeras, SiPytorch, SiFastapi, SiScipy, SiMysql, SiPostgresql,
  SiSqlite, SiMongodb, SiPostman, SiNeo4J, SiOracle, SiAmazon, SiGooglecloud, SiStreamlit
} from "react-icons/si";

const skills = {
  "Web Development": [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500 mx-auto" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500 mx-auto" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 mx-auto" /> },
    { name: "React", icon: <SiReact className="text-cyan-400 mx-auto" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600 mx-auto" /> },
    { name: "Vite.js", icon: <SiVite className="text-green-400 text-3xl mx-auto" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 mx-auto" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 mx-auto" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 mx-auto" /> }
  ],
  "Machine Learning & Data Science": [
    { name: "Python", icon: <SiPython className="text-yellow-300 mx-auto" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-400 mx-auto" /> },
    { name: "Pandas", icon: <SiPandas className="text-purple-300 mx-auto" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-300 mx-auto" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 mx-auto" /> },
    { name: "Keras", icon: <SiKeras className="text-red-500 mx-auto" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-red-600 mx-auto" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-400 mx-auto" /> },
    { name: "Scipy", icon: <SiScipy className="text-indigo-300 mx-auto" /> }
  ],
  "Database Management": [
    { name: "MySQL", icon: <SiMysql className="text-blue-700 mx-auto" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 mx-auto" /> },
    { name: "SQLite", icon: <SiSqlite className="text-indigo-400 mx-auto" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 mx-auto" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 mx-auto" /> },
    { name: "Neo4j", icon: <SiNeo4J className="text-blue-500 mx-auto" /> },
    { name: "Oracle", icon: <SiOracle className="text-red-500 mx-auto" /> }
  ],
  "Cloud Services": [
    { name: "AWS", icon: <SiAmazon className="text-yellow-400 w-8 h-8 mx-auto" /> },
    {
      name: "Azure",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
          alt="Azure"
          className="w-14 h-8 mx-auto object-contain"
        />
      )
    },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-red-400 w-8 h-8 mx-auto" /> },
    {
      name: "Vercel",
      icon: (
        <img
          src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico"
          alt="Vercel"
          className="w-8 h-8 mx-auto object-contain"
        />
      )
    },
    { name: "Streamlit", icon: <SiStreamlit className="text-red-400 text-3xl mx-auto" /> }
  ]
};

const allAvailableIcons: {name: string; icon: ReactElement}[] = [];
Object.values(skills).forEach(category => {
  category.forEach(skill => {
    if (!allAvailableIcons.some(existing => existing.name === skill.name)) {
      allAvailableIcons.push(skill);
    }
  });
});

// Utility: Shuffle array
function shuffleArray(array: any[]) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Generate floating tech icons (background effect)
function generateFloatingIcons(count: number) {
  const iconsToUse = shuffleArray([...allAvailableIcons]).slice(0, count);
  const floatingElements = [];

  // Adjust the area not overlapping the main content
  const textContentEstimatedWidthPercent = 60;
  const textContentEstimatedHeightPercent = 45;
  const horizontalMargin = (100 - textContentEstimatedWidthPercent) / 2;
  const verticalMargin = (100 - textContentEstimatedHeightPercent) / 2;

  for (let i = 0; i < iconsToUse.length; i++) {
    const skill = iconsToUse[i];
    const randomSize = `${Math.random() * 1.5 + 1.5}rem`;
    const randomTwinkleDuration = `${2 + Math.random() * 3}s`;
    const randomTwinkleDelay = `${Math.random() * 5}s`;
    const randomFloatDuration = `${12 + Math.random() * 10}s`;
    const randomFloatDelay = `${Math.random() * 8}s`;

    const floatRange = 150;
    const floatX1 = `${(Math.random() - 0.5) * floatRange}px`;
    const floatY1 = `${(Math.random() - 0.5) * floatRange}px`;
    const floatX2 = `${(Math.random() - 0.5) * floatRange}px`;
    const floatY2 = `${(Math.random() - 0.5) * floatRange}px`;
    const floatX3 = `${(Math.random() - 0.5) * floatRange}px`;
    const floatY3 = `${(Math.random() - 0.5) * floatRange}px`;

    const rotateDeg1 = `${(Math.random() - 0.5) * 360}deg`;
    const rotateDeg2 = `${(Math.random() - 0.5) * 360}deg`;
    const rotateDeg3 = `${(Math.random() - 0.5) * 360}deg`;

    let topPosition: string, leftPosition: string;
    const zone = Math.floor(Math.random() * 4);

    switch (zone) {
      case 0:
        topPosition = `${Math.random() * (verticalMargin - 5)}%`;
        leftPosition = `${Math.random() * 100}%`;
        break;
      case 1:
        topPosition = `${(100 - (Math.random() * (verticalMargin - 5)))}%`;
        leftPosition = `${Math.random() * 100}%`;
        break;
      case 2:
        topPosition = `${Math.random() * 100}%`;
        leftPosition = `${Math.random() * (horizontalMargin - 5)}%`;
        break;
      case 3:
        topPosition = `${Math.random() * 100}%`;
        leftPosition = `${(100 - (Math.random() * (horizontalMargin - 5)))}%`;
        break;
      default:
        topPosition = `${Math.random() * 100}%`;
        leftPosition = `${Math.random() * 100}%`;
        break;
    }

    floatingElements.push({
      icon: skill.icon,
      name: skill.name,
      top: topPosition,
      left: leftPosition,
      size: randomSize,
      floatVars: {
        '--float-x1': floatX1,
        '--float-y1': floatY1,
        '--float-x2': floatX2,
        '--float-y2': floatY2,
        '--float-x3': floatX3,
        '--float-y3': floatY3,
        '--rotate-deg1': rotateDeg1,
        '--rotate-deg2': rotateDeg2,
        '--rotate-deg3': rotateDeg3,
        '--float-duration': randomFloatDuration,
        '--float-delay': randomFloatDelay,
        '--twinkle-duration': randomTwinkleDuration,
        '--twinkle-delay': randomTwinkleDelay,
      }
    });
  }
  return floatingElements;
}

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const fullText = "Exploring the Future with ML, AI, and Robotics & Building Smart, Data-Driven Systems";
  const [floatingIcons, setFloatingIcons] = useState<any[]>([]);

  // Hero typing effect
  useEffect(() => {
    if (isTyping && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentIndex === fullText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  // Generate background floating icons once
  useEffect(() => {
    setFloatingIcons(generateFloatingIcons(Math.min(15, allAvailableIcons.length)));
  }, []);

  // Scroll to section utility
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
          <button
            onClick={() => setFullScreenImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-[101]"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={fullScreenImage}
            alt="Full screen view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      {/* Floating Download Resume Button */}
      <a
        href="/SohamWalam_Resume.pdf"
        download="SohamWalam_Resume.pdf"
        className="fixed bottom-6 right-6 z-50 group"
        title="Download Resume"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse"
        >
          <Download className="w-6 h-6" />
        </Button>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Soham Walam
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Internships', 'Certifications', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-purple-400">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-900/95 border-slate-700">
                  <div className="flex flex-col space-y-6 mt-8">
                    {['Home', 'About', 'Internships', 'Certifications', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-white hover:text-purple-400 transition-colors duration-300 text-left text-lg font-medium"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section-container relative">
        {/* Floating Background Icons */}
        {floatingIcons.map((icon, index) => (
          <div
            key={icon.name || index}
            className="floating-tech-icon"
            style={{
              top: icon.top,
              left: icon.left,
              fontSize: icon.size,
              position: "absolute",
              zIndex: 0,
              ...icon.floatVars,
            }}
          >
            {icon.icon}
          </div>
        ))}
        {/* Center Content */}
        <div className="container mx-auto px-6 text-center hero-content-wrapper z-10 relative">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-6xl font-bold mb-12 leading-tight">
              <span className="text-white">Hello, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Soham Walam
              </span>
            </h1>
            <div className="flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 mt-4">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </div>
        </div>
        {/* Scroll Down Arrow */}
        <div
          className="scroll-down-arrow absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="text-white w-8 h-8 animate-bounce" />
        </div>
      </section>

      {/* Main Sections */}
      <About />
      <Internships setFullScreenImage={setFullScreenImage} />
      <Certifications setFullScreenImage={setFullScreenImage} />
      <Projects setFullScreenImage={setFullScreenImage} />
      <Skills />
      <Achievements setFullScreenImage={setFullScreenImage} />
      <Contact />

      {/* Footer */}
      <footer className="py-8 bg-black/30 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Soham Walam | All Rights Reserved</p>
          <p className="mt-2">Built by Soham Walam</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
