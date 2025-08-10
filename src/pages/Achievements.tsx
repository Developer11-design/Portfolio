import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface AchievementsProps {
  setFullScreenImage: (image: string | null) => void;
}

const Achievements = ({ setFullScreenImage }: AchievementsProps) => {
  const achievements = [
    {
      title: "IIT Kharagpur National Level Hackathon",
      subtitle: "Amongst Top 10 Teams out of 170+ Teams",
      description:
        "Selected among the top 10 teams out of 170+ teams in a prestigious national-level hackathon at IIT Kharagpur. Developed an innovative solution combining Machine Learning for real-time minerals usage.",
      image: "./achieve/Composit_Excavate.png",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    },
    {
      title: "IIT Delhi Space Ideathon",
      subtitle: "Top 3 Position amongst 100+ Teams",
      description:
        "Achieved top 3 ranking in an ideation competition at IIT Delhi, focusing on space technology solutions. Developed a prototype for a satellite data analysis tool using Python and machine learning.",
      image: "./achieve/Tryst IIT Delhi Ideathon.png",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    },
    {
      title: "ByteVerse 7.0 National Level Hackathon",
      subtitle: "Amongst top 7 teams out of 172 teams",
      description:
        "Achieved top 7 team position in the hackathon by creating a chatbot for legal advisories using Gradio and Streamlit for deployment.",
      image: "/achieve/ByteVerse.jpg",
      color: "bg-gradient-to-r from-green-500 to-teal-500 text-white",
    },
    {
      title: "HackForge Sustainability Hackathon",
      subtitle: "Top 5 Position out of 20 teams",
      description:
        "Secured top 5 position in HackForge, an intercollege hackathon organized by NMIMS, focusing on business technology solutions. Developed a comprehensive data analytics dashboard using Python and Tableau.",
      image: "./achieve/HackForge.jpg",
      color: "bg-gradient-to-r from-slate-700 to-slate-800 text-white", // fallback
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-[#1a063b]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card
                  className={`border border-slate-700 hover:scale-105 cursor-pointer transition-transform duration-300 bg-slate-900 text-white`}
                >
                  <CardHeader className="p-4">
                    <button
                      onClick={() => setFullScreenImage(achievement.image)}
                      className="cursor-pointer"
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-40 object-contain rounded mb-4 hover:scale-105 transition-transform"
                      />
                    </button>
                    <CardTitle className="text-lg font-bold text-center leading-snug">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-yellow-400 text-center font-medium mt-2">
                      {achievement.subtitle}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </DialogTrigger>

              <DialogContent className="bg-slate-800 border-slate-700">
                <DialogHeader>
                  <DialogTitle className="text-white">{achievement.title}</DialogTitle>
                  <DialogDescription className="text-gray-300 mt-2">
                    {achievement.description}
                  </DialogDescription>
                </DialogHeader>
                <button
                  onClick={() => setFullScreenImage(achievement.image)}
                  className="cursor-pointer mt-4"
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-auto max-h-[400px] object-contain rounded hover:scale-105 transition-transform"
                  />
                </button>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
