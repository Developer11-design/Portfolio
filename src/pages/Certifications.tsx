import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface CertificationsProps {
  setFullScreenImage: (image: string | null) => void;
}

const Certifications = ({ setFullScreenImage }: CertificationsProps) => {
  const [activeCertFilter, setActiveCertFilter] = useState<'All' | 'Courses' | 'Tests' | 'BootCamps'>('All');
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      name: "ArcGIS Python Spatial Data Science",
      category: "Courses",
      imagePath: "/certs/ArcGIS.png",
      badgeClass: "px-4 py-2 bg-black text-fuchsia-400 border-fuchsia-600 hover:bg-fuchsia-800/20 hover:text-white transition-all cursor-pointer"
    },
    {
      name: "Machine Learning Bootcamp (S4DS)",
      category: "BootCamps",
      imagePath: "/certs/Soham Kishor Walam.png",
      badgeClass: "px-4 py-2 bg-slate-950 text-sky-400 border-cyan-500 hover:bg-sky-900/40 hover:shadow-sky-500/30 shadow-md transition-all cursor-pointer"
    },
    {
      name: "Data Science & Analytics (HP)",
      category: "Courses",
      imagePath: "/certs/HP_Data.jpg",
      badgeClass: "px-4 py-2 bg-black text-green-400 border-green-600 shadow-inner hover:bg-green-900/30 hover:shadow-green-500/20 transition-all cursor-pointer"
    },
    {
      name: "AWS Cloud Services",
      category: "Courses",
      imagePath: "/certs/AWS_cloud.png",
      badgeClass: "px-4 py-2 bg-yellow-600/20 text-yellow-300 border-yellow-500 cursor-pointer hover:bg-yellow-700/30 transition-colors"
    },
    {
      name: "PyTorch (OpenCV)",
      category: "BootCamps",
      imagePath: "/certs/PyTorch.png",
      badgeClass: "px-4 py-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-600 text-white font-medium rounded-md shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-200 ease-in-out cursor-pointer"
    },
    {
      name: "SQL Intermediate Test (HackerRank)",
      category: "Tests",
      imagePath: "/certs/SQL.png",
      badgeClass: "px-5 py-2 bg-black text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black shadow-[0_0_10px_#22d3ee80] transition-all duration-300 ease-in-out font-mono tracking-wider cursor-pointer"
    },
    {
      name: "Python Basic Test (HackerRank)",
      category: "Tests",
      imagePath: "/certs/Test.png",
      badgeClass: "px-5 py-2 bg-[#0d1117] text-[#3b82f6] border border-[#3b82f6] rounded-md hover:bg-[#3b82f6] hover:text-black shadow-[0_0_12px_#3b82f680] transition duration-300 ease-in-out font-mono tracking-widest cursor-pointer"
    },
    {
      name: "AWS Cloud Foundations",
      category: "Courses",
      imagePath: "/certs/AWS.png",
      badgeClass: "px-4 py-2 bg-purple-900/40 text-indigo-200 border-indigo-500 hover:bg-purple-700/50 transition-all cursor-pointer"
    },
    {
      name: "Tensorflow & Keras (OpenCV)",
      category: "BootCamps",
      imagePath: "/certs/TensorFlow & Keras.png",
      badgeClass: "px-4 py-2 bg-zinc-900 text-green-400 border-green-500 font-mono hover:bg-zinc-800 transition-colors cursor-pointer"
    },
    {
      name: "Develop ML Solutions (AWS)",
      category: "Courses",
      imagePath: "/certs/Develop ML Solutions.png",
      badgeClass: "px-4 py-2 bg-gradient-to-r from-red-700 via-green-600 to-blue-600 text-white border-0 hover:brightness-110 transition-all"
    },
    {
      name: "Optimize ML Models (AWS)",
      category: "Courses",
      imagePath: "/certs/Optimize models.png",
      badgeClass: "px-4 py-2 bg-cyan-950 text-emerald-300 border-emerald-500 hover:bg-emerald-900/30 transition-all cursor-pointer"
    },
    {
      name: "Build with AI (Saylor)",
      category: "Tests",
      imagePath: "/certs/Build with AI.png",
      badgeClass: "px-4 py-2 bg-gradient-to-r from-fuchsia-700 via-purple-600 to-cyan-500 text-white border-0 hover:brightness-110 transition-all cursor-pointer"
    },
    {
      name: "GenAI with Diffusion Models (AWS)",
      category: "Courses",
      imagePath: "/certs/GenAI with Diffusion models.png",
      badgeClass: "px-4 py-2 bg-black text-lime-400 border-lime-500 shadow-lg shadow-lime-500/20 hover:bg-lime-800/40 transition-all cursor-pointer"
    },
    {
      name: "Data Engineeering (AWS)",
      category: "Courses",
      imagePath: "/certs/Data Engg.png",
      badgeClass: "px-4 py-2 bg-[#7b5d5d] text-[#f0e0dc] border-[#b89a95] shadow-md shadow-[#b89a95]/20 hover:bg-[#8d6c6c] transition-all cursor-pointer"
    },
    {
      name: "Data Science (SkillUp)",
      category: "Courses",
      imagePath: "/certs/SkillUp.png",
      badgeClass: "px-4 py-2 bg-[#2e3a59] text-[#d8e0f0] border border-[#4b5b88] shadow-md shadow-[#4b5b88]/30 hover:bg-[#3b4a6d] transition-all duration-200 ease-in-out cursor-pointer"
    },
    {
      name : "Python and AI (DevTown)",
      category : "BootCamps",
      imagePath : "/certs/Python and AI.png",
      badgeClass : "px-4 py-2 bg-[#f0f4f8] text-[#1f2937] border border-[#d1d5db] shadow-sm shadow-[#9ca3af]/20 hover:bg-[#e5edf5] transition-all duration-200 ease-in-out cursor-pointer"
    },
    {
      name : "GenAI (PreGrad)",
      category : "BootCamps",
      imagePath : "/certs/GenAI.png",
      badgeClass : "px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-300/40 hover:brightness-110 transition-all duration-300 ease-in-out cursor-pointer"
    },
    {
      name : "Python Project (PreGrad)",
      category : "BootCamps",
      imagePath : "/certs/PyPro.png",
      badgeClass : "px-4 py-2 bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 text-black font-bold rounded-lg shadow-lg shadow-lime-300/30 hover:contrast-125 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    },
    {
      name : "Cisco Net ACad (Python)",
      category : "Courses",
      imagePath : ["/certs/PyPI.png"],
      badgeClass : "px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-300/40 hover:brightness-110 transition-all duration-300 ease-in-out cursor-pointer"
    },
    {
      name : "Cisco Python Essentials",
      category : "Tests",
      imagePath : ["/certs/badge.png"],
      badgeClass : "px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-300/40 hover:brightness-110 transition-all duration-300 ease-in-out cursor-pointer"
    }
  ];

  const filteredCertifications = certifications.filter(cert => {
    if (activeCertFilter === 'All') {
      return true;
    }
    return cert.category === activeCertFilter;
  });

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Certifications</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
  {["All", "Courses", "Tests", "BootCamps"].map((filter) => (
    <Button
      key={filter}
      variant={activeCertFilter === filter ? "default" : "outline"}
      className={
        activeCertFilter === filter
          ? "bg-purple-600 hover:bg-purple-700 text-white"
          : "border-purple-500 text-black hover:bg-white hover:text-purple-700"
      }
      onClick={() => setActiveCertFilter(filter as any)}
    >
      {filter}
    </Button>
  ))}
</div>


        {/* Filtered Certifications Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? filteredCertifications : filteredCertifications.slice(0, 3)).map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group rounded-xl overflow-hidden shadow-md bg-slate-900 hover:scale-105 transition-transform">
                  {/* Image Preview (first image in array or string) */}
                  <img
                    src={Array.isArray(cert.imagePath) ? cert.imagePath[0] : cert.imagePath}
                    alt={cert.name}
                    className="h-40 w-full object-cover group-hover:opacity-90 transition"
                  />
                  {/* Text + Category */}
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {cert.name}
                    </h3>
                    <span className={`${cert.badgeClass} text-xs rounded-full border px-3 py-1`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
              </DialogTrigger>

              {/* Dialog Content */}
              <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-white">{cert.name}</DialogTitle>
                  <DialogDescription className="text-gray-300 mt-2">
                    Click on any image to view in full size.
                  </DialogDescription>
                </DialogHeader>

                {/* Show multiple images if array */}
                <div className="mt-4 flex flex-col gap-4 items-center">
                  {(Array.isArray(cert.imagePath) ? cert.imagePath : [cert.imagePath]).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFullScreenImage(img)}
                      className="cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${cert.name} Certificate ${idx + 1}`}
                        className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                      />
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View More / View Less Button */}
        {filteredCertifications.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
