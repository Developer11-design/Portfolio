const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: About Text */}
          <div className="flex-1 text-gray-300 text-2xl leading-relaxed max-w-2xl">
            <p>
              Hello! I'm Soham Walam, a dedicated Data Science and Machine Learning professional
              with a BTech in CSE (Data Science). I have worked upon
              building data-driven solutions ranging from interactive dashboards and
              predictive ML models to modern web applications. I've interned at Deloitte, BCG X,
              and Prasunet Foundation, honing my skills in full-stack development, analytics,
              and cloud deployment.
            </p>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/main.jpeg"
              alt="Soham Walam"
              className="w-80 h-80 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
