import { useState } from "react";
import { Award, Code2, Workflow } from "lucide-react";
import { SiAmazon } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface InternshipsProps {
  setFullScreenImage: (image: string | null) => void;
}

// Official Deloitte Logo (inline via data URI)
const DeloitteIcon = (
  <img
    src={`data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 200">
        <text x="0" y="140" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="#000000">Deloitte</text>
        <circle cx="905" cy="125" r="10" fill="#86BC25" />
      </svg>
    `)}`}
    alt="Deloitte Logo"
    className="w-12 h-12"
  />
);


// Bigger, visible BCG X Logo
const BCGXIcon = (
  <img
    src={`data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 200 60">
        <text x="0" y="45" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#000000">BCG</text>
        <text x="115" y="45" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#00D1B2">X</text>
      </svg>
    `)}`}
    alt="BCG X Logo"
    className="w-12 h-12" // doubled size
  />
);


const Internships = ({ setFullScreenImage }: InternshipsProps) => {
  const [activeInternshipFilter, setActiveInternshipFilter] = useState<
    "All" | "Live" | "Virtual"
  >("All");

  const internships = [
    {
      title: "AI & ML Intern",
      company: "InLighnX Global Pvt Ltd",
      period: "Jul'25 - Aug'25",
      description:
        "Artificial & Machine Learning Intern at InLighnX Global Pvt Ltd, where I learned about CNNs a develop a decisive Neural Network Model with TensorFlow helping the system to work efficiently.",
      icon: <Workflow className="text-blue-400" />,
      category: "Live",
    },
    {
      title: "Data Analyst Intern",
      company: "Prasunet Foundation",
      period: "Feb'25 - Apr'25",
      description:
        "Data Analyst Intern at Prasunet Foundation, where I developed a comprehensive dashboard, built a Flask app for clickstream and customer content analysis, visualized customer behavior to improve engagement, and deployed the solution using Streamlit.",
      icon: <Code2 className="text-blue-400" />,
      category: "Live",
    },
    {
      title: "Data Analyst Deloitte",
      company: "Deloitte",
      description:
        "Data Analyst Intern at Deloitte, where I developed interactive Tableau dashboards and contributed to advanced data analysis and visualization projects.",
      icon: DeloitteIcon,
      category: "Virtual",
      certificate: {
        url: "/certs/Deloitte_Internship_Certificate.png",
        title: "Deloitte Internship Certificate",
      },
    },
    {
      title: "Data Science BCG-X",
      company: "BCG X",
      description:
        "Data Science Intern at BCG X, developed comprehensive customer analysis models and provided actionable insights from complex datasets.",
      icon: BCGXIcon,
      category: "Virtual",
      certificate: {
        url: "/certs/BCGX_Internship_Certificate.png",
        title: "BCG X Internship Certificate",
      },
    },
    {
      title: "AWS Solution Architect",
      company: "Amazon Web Services",
      description:
        "AWS Solution Architect Intern at Amazon Web Services, where I Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times. Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.",
      icon: <SiAmazon className="text-yellow-400" />,
      category: "Virtual",
      certificate: {
        url: "/certs/AWS Forage.png",
        title: "AWS Solution Architect",
      },
    },
  ];

  const filteredInternships = internships.filter((internship) => {
    if (activeInternshipFilter === "All") {
      return true;
    }
    return internship.category === activeInternshipFilter;
  });

  return (
    <section id="internships" className="py-20 bg-slate-700/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Internships
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["All", "Live", "Virtual"].map((filter) => (
            <Button
              key={filter}
              variant={
                activeInternshipFilter === filter ? "default" : "outline"
              }
              className={
                activeInternshipFilter === filter
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "border-purple-500 text-black-300 hover:bg-purple-900/20"
              }
              onClick={() =>
                setActiveInternshipFilter(filter as "All" | "Live" | "Virtual")
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Internships List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredInternships.map((internship, index) => (
            <Card
              key={index}
              className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                {/* Title + Date + Certificate */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {internship.icon}
                    <span className="text-base font-medium tracking-tight text-white">
                      {internship.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {internship.period && (
                      <span className="text-xs text-white whitespace-nowrap">
                        {internship.period}
                      </span>
                    )}
                    {internship.certificate && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="text-emerald-400 hover:text-emerald-500 transition"
                            title="View Certificate"
                          >
                            <Award className="w-5 h-5" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="text-white">
                              {internship.certificate.title}
                            </DialogTitle>
                            <DialogDescription className="text-gray-300 mt-2">
                              Click to view in full size.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 flex justify-center">
                            <button
                              onClick={() =>
                                setFullScreenImage(internship.certificate!.url)
                              }
                              className="cursor-pointer"
                            >
                              <img
                                src={internship.certificate.url}
                                alt={internship.certificate.title}
                                className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                              />
                            </button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 text-sm">
                  {internship.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
