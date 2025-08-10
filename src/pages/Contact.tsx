import { Mail, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-slate-800/70 border-slate-700">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <Mail className="text-purple-400" />
                  <a href="mailto:walamsoham@gmail.com" className="hover:text-purple-400 transition-colors">
                    walamsoham@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Linkedin className="text-blue-400" />
                  <a href="https://www.linkedin.com/in/soham-walam-b82446296/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Github className="text-gray-400" />
                  <a href="https://github.com/SohamWalam11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-600 text-center text-gray-400">
                <p>Phone: +91 99872 36183</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
