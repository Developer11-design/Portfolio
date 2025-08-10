import { useState, useRef } from 'react';
import { Github, Codepen, ExternalLink, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  SiPython,
  SiScikitlearn,
  SiOpenai,
  SiVite,
  SiStreamlit,
  SiTensorflow,
  SiKeras,
  SiScipy,
  SiFlask,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiFramer,
  SiFirebase,
  SiChakraui
} from "react-icons/si";
import { MdOutlineNotificationsActive } from "react-icons/md";

interface ProjectsProps {
  setFullScreenImage: (image: string | null) => void;
}

const Projects = ({ setFullScreenImage }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web3' | 'Machine Learning' | 'App'>('All');

  const projects = [
    {
      title: "JusticePal",
      description:
        "Advanced ML chatbot using Gradio and Scikit-Learn for real-time chat with legal data and advisories",
      tech: [
        { icon: <SiPython className="text-yellow-500 text-3xl" /> },
        { icon: <SiScikitlearn className="text-blue-300 text-3xl" /> },
        { icon: <SiOpenai className="text-purple-300 text-3xl" /> },
        { icon: <SiVite className="text-green-400 text-3xl" /> },
        { icon: <SiStreamlit className="text-red-400 text-3xl" /> },
      ],
      category: "Machine Learning",
      details: "Developed a comprehensive chatbot system that gives real advisories suggestion to clients.",
      github: "https://github.com/SohamWalam11/JusticePal-AI-Assistant",
      ss:[
        "/work/JusticePal/byte.png",
      ]
    },
    {
      title: "Band Gap Prediction Model",
      description:
        "Machine Learning model using advanced ML algorithms for material science",
      tech: [
        { icon: <SiPython className="text-yellow-300 text-3xl" /> },
        { icon: <SiScikitlearn className="text-blue-400 text-3xl" /> },
        { icon: <SiTensorflow className="text-orange-400 text-3xl" /> },
        { icon: <SiKeras className="text-red-400 text-3xl" /> },
        { icon: <SiScipy className="text-indigo-300 text-3xl" /> },
      ],
      category: "Machine Learning",
      details:
        "Created a sophisticated band gap prediction model for semiconductor materials using quantum mechanical properties. The project includes a user-friendly web interface and demonstrates expertise in both frontend development and materials science.",
      github: "https://github.com/SohamWalam11/Excavate-25",
      ss: [
        '/work/Excavate/ex_lr.png',
        '/work/Excavate/ex_cm.png',
        '/work/Excavate/ex_dt.png',
        '/work/Excavate/ex_roc.png',
        '/work/Excavate/ex_tf.png',
      ]
    },
    {
      title: "Stock Market Analysis and Prediction",
      description:
        "Comprehensive stock market analysis and prediction system using Python",
      tech: [
        { icon: <SiPython className="text-yellow-300 text-3xl" /> },
        { icon: <SiFlask className="text-gray-400 text-3xl" /> },
        { icon: <SiScikitlearn className="text-blue-300 text-3xl" /> },
        { icon: <SiNextdotjs className="text-white text-3xl" /> },
        { icon: <MdOutlineNotificationsActive className="text-pink-400 text-3xl" /> },
      ],
      category: "Machine Learning",
      details:
        "Developed a stock market analysis and prediction system that utilizes historical stock data to forecast future stock prices. The system employs various machine learning algorithms and provides visualizations of stock trends and predictions.",
      github: "https://github.com/SohamWalam11/Stock-price-prediction",
      ss:[
        '/work/Stocks/acc.png',
        '/work/Stocks/graph.png',
      ]
    },
    {
      title: "COVID-19 Cases Prediction and Analysis",
      description:
        "COVID-19 comprehensive analysis and prediction system using Python",
      tech: [
        { icon: <SiPython className="text-yellow-300 text-3xl" /> },
        { icon: <SiScikitlearn className="text-blue-400 text-3xl" /> },
        { icon: <SiScipy className="text-indigo-300 text-3xl" /> },
        {
          icon: (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg"
              alt="Pandas"
              className="w-12 h-12"
            />
          )
        },
        {
          icon: (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"
              className="w-16 h-12"
            />
          )
        },
        {
          icon: (
            <img
              src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
              alt="Seaborn"
              className="w-16 h-12"
            />
          )
        }
      ],
      category: "Machine Learning",
      details:
        "Developed a COVID-19 case prediction and analysis system that uses historical data to forecast future case trends. The system employs various machine learning algorithms and provides visualizations of case trends and predictions.",
      github: "https://github.com/SohamWalam11/COVID-prediction",
      ss:[
        '/work/COVID/distri.png',
        '/work/COVID/map.png',
        '/work/COVID/perc.png',
      ]
    },
    {
      title: "RAG Powered Chatbot",
      description:
        "A chatbot that uses Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses.",
      tech: [
        { icon: <SiPython className="text-yellow-300 text-3xl" /> },
        { icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="text-sky-400 text-4xl fill-current"
  >
      <rect width="256" height="256" fill="none"/>
      <path d="M128 24C73.2 24 28 69.2 28 124s45.2 100 100 100 100-45.2 100-100S182.8 24 128 24zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm-8-128h-24v96h24c26.5 0 48-21.5 48-48s-21.5-48-48-48z"/>
  </svg>
) },

        { icon: <SiOpenai className="text-white text-3xl" /> },
        { icon: <SiStreamlit className="text-red-400 text-3xl" /> },
        {
          icon: (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
              alt="ipywidgets"
              className="w-10 h-10"
            />
          )
        },
        { icon: <SiChakraui className="text-indigo-400 text-3xl" /> },
      ],
      category: "Machine Learning",
      details:
        "Developed a chatbot that leverages Retrieval-Augmented Generation (RAG) techniques to enhance the accuracy and relevance of responses. It integrates with various data sources and uses advanced NLP models to provide context-aware answers.",
      github: "https://github.com/SohamWalam11/QA-Chatbot",
      ss:[
        '/work/RAG/train.png',
        '/work/RAG/bot.png',
      ],
    },
    {
      title: "My Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills and achievements.",
      tech: [
        { icon: <SiReact className="text-blue-400 text-3xl" /> },
        { icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
        { icon: <SiTypescript className="text-blue-500 text-3xl" /> },
        { icon: <SiVercel className="text-white text-3xl" /> },
        { icon: <SiVite className="text-purple-400 text-3xl" /> },
        { icon: <SiFramer className="text-orange-400 text-3xl" /> }, // Framer Motion
      ],
      category: "Web3",
      details:
        "This very website you are viewing! Built with React and TailwindCSS for a modern, responsive design. Deployed on Vercel.",
      github: "https://github.com/Developer11-design/Portfolio",

    },
    {
      title: "Professional Portfolio Manager",
      description:
        "A responsive Portfolio manager for managing stocks investment and tracking performance.",
      tech: [
        { icon: <SiReact className="text-blue-400 text-3xl" /> },
        { icon: <SiTypescript className="text-blue-500 text-3xl" /> },
        { icon: <SiTailwindcss className="text-sky-300 text-3xl" /> },
        { icon: <Atom className="text-blue-500 text-4xl" /> },
        { icon: <SiFirebase className="text-orange-400 text-3xl" /> },
        { icon: <SiVercel className="text-white text-3xl" /> },
      ],
      category: "Web3",
      details:
        "Developed a user-friendly e-commerce interface, demonstrating skills in component-based UI development and state management.",
      github: "https://github.com/SohamWalam11/Portfolio-Manager",
      ss:[
        '/work/Port/intro.png',
        '/work/Port/stocks.png',
        '/work/Port/news.png',
      ]
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') {
      return true;
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {['All', 'Web3', 'Machine Learning'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={
                activeFilter === filter
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-black-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveFilter(filter as any)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      {project.title}
                      <div className="flex items-center gap-3">

                        {/* GitHub Icon */}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="View GitHub"
                            className="text-purple-400 hover:text-purple-300"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}

                        {/* Screenshot Dialog (CodePen Icon) */}
                        {project.ss && (
                          <Dialog>
                            <DialogTrigger
                              asChild
                              onClick={(e) => e.stopPropagation()}
                              title="View Work"
                            >
                              <button
                                title="View Work"
                                className="text-purple-400 hover:text-purple-300"
                              >
                                <Codepen className="w-5 h-5" />
                              </button>
                            </DialogTrigger>

                            <DialogContent
                              className="bg-slate-800 border-slate-700 max-w-4xl"
                              onClick={(e) => e.stopPropagation()} // Prevent fallback click
                            >
                              <DialogHeader>
                                <DialogTitle className="text-white">{project.title}</DialogTitle>
                                <DialogDescription className="text-gray-300 mt-2">
                                  Click on any image to view in full screen.
                                </DialogDescription>
                              </DialogHeader>

                              <div className="rounded overflow-hidden">
                                <Swiper
                                  navigation
                                  pagination={{ clickable: true }}
                                  modules={[Navigation, Pagination]}
                                  className="w-full h-[400px]"
                                >
                                  {project.ss.map((src, i) => (
                                    <SwiperSlide key={i}>
                                      <button
                                        onClick={() => setFullScreenImage(src)}
                                        className="w-full h-full cursor-pointer"
                                      >
                                        <img
                                          src={src}
                                          alt={`Screenshot ${i + 1}`}
                                          className="object-contain w-full h-full hover:scale-105 transition-transform"
                                        />
                                      </button>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </CardTitle>


                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex}>{tech.icon}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Project Details Dialog */}
              <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-white">{project.title}</DialogTitle>
                  <DialogDescription className="text-gray-300 mt-4">
                    {project.details}
                  </DialogDescription>
                </DialogHeader>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-4"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> View GitHub Repo
                </a>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
