
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      stat: '73%',
      label: 'Network Downtime',
      description: 'of enterprises experience critical network failures annually',
    },
    {
      icon: DollarSign,
      stat: '$5.6M',
      label: 'Average Cost',
      description: 'lost per year due to network performance issues',
    },
    {
      icon: Clock,
      stat: '4.5hrs',
      label: 'Resolution Time',
      description: 'average time to identify and resolve network issues',
    },
    {
      icon: TrendingDown,
      stat: '60%',
      label: 'Reactive Approach',
      description: 'of IT teams still rely on reactive problem-solving',
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
            The Network Management{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Crisis
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Traditional network management is failing to keep pace with modern demands, 
            leading to costly downtime and inefficiencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <problem.icon className="w-7 h-7 text-red-400" />
                </div>
              </div>
              <div className="text-4xl font-bold text-red-400 mb-2">{problem.stat}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{problem.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
