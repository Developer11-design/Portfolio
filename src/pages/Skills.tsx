import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiVite, SiTypescript,
  SiBootstrap, SiTailwindcss, SiPython, SiNumpy, SiPandas, SiScikitlearn,
  SiTensorflow, SiKeras, SiPytorch, SiFastapi, SiScipy, SiMysql, SiPostgresql,
  SiSqlite, SiMongodb, SiPostman, SiNeo4J, SiOracle, SiAmazon, SiGooglecloud, SiStreamlit
} from 'react-icons/si';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Organize skill data by category and icon
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

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-800/50">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-lg">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {skillList.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <div className="text-xs text-gray-300">{skill.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
