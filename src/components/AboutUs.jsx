
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AboutUs = () => {
  const { toast } = useToast();

  const handleLinkClick = (url) => {
    // Open the URL in a new tab
    window.open(url, '_blank');
    // You can optionally add a toast here if needed, but direct navigation is usually enough for social links.
  };
  
  const teamMembers = [
    {
      name: 'Kostas Ereksonas',
      role: 'Network Security Lead', // Kept role to distinguish but name is same
      description: 'With Master\'s in IT and experience in cryptography research, Kostas is responsible for network security and AI implementation.',
      skills: ['Network Security', 'Machine Learning', 'Project Management'],
      imageUrl: 'https://horizons-cdn.hostinger.com/9e0bb132-77fb-4f85-8845-7fad9994eaff/074585e76d1c6fe0e144597d856fb42c.jpg',
      linkedin: 'https://www.linkedin.com/in/kostasereksonas/',
      github: 'https://github.com/KostasEreksonas',
    },
    {
      name: 'Kostas Ereksonas',
      role: 'AI Implementation Specialist', // Kept role to distinguish but name is same
      description: 'With Master\'s in IT and experience in cryptography research, Kostas is responsible for network security and AI implementation.',
      skills: ['Network Security', 'Machine Learning', 'Project Management'],
      imageUrl: 'https://horizons-cdn.hostinger.com/9e0bb132-77fb-4f85-8845-7fad9994eaff/074585e76d1c6fe0e144597d856fb42c.jpg',
      linkedin: 'https://www.linkedin.com/in/kostasereksonas/',
      github: 'https://github.com/KostasEreksonas',
    },
    {
      name: 'Kostas Ereksonas',
      role: 'Cryptography Researcher', // Kept role to distinguish but name is same
      description: 'With Master\'s in IT and experience in cryptography research, Kostas is responsible for network security and AI implementation.',
      skills: ['Network Security', 'Machine Learning', 'Project Management'],
      imageUrl: 'https://horizons-cdn.hostinger.com/9e0bb132-77fb-4f85-8845-7fad9994eaff/074585e76d1c6fe0e144597d856fb42c.jpg',
      linkedin: 'https://www.linkedin.com/in/kostasereksonas/',
      github: 'https://github.com/KostasEreksonas',
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Innovators
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our team combines decades of experience in AI, network engineering, and cloud computing to build the future of network intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" alt={`Profile picture of ${member.name}`} src={member.imageUrl} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{member.description}</p>
              
              <div className="mb-6">
                <span className="text-sm font-semibold text-white mb-2 block">Key Skills</span>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="bg-cyan-500/10 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 flex items-center gap-3">
                 <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                   <Linkedin className="w-5 h-5" />
                 </a>
                 <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                   <Github className="w-5 h-5" />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
