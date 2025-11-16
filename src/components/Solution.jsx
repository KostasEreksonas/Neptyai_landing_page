
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield } from 'lucide-react';

const Solution = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting identifies potential issues before they impact your network, reducing downtime by up to 85%.',
      features: ['Anomaly detection', 'Trend analysis', 'Capacity planning', 'Risk assessment'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Intelligent automation continuously optimizes network performance, bandwidth allocation, and resource utilization in real-time.',
      features: ['Auto-scaling', 'Load balancing', 'Traffic routing', 'Resource allocation'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Shield,
      title: 'Real-Time Monitoring',
      description: 'Comprehensive visibility across your entire network infrastructure with instant alerts and actionable insights.',
      features: ['24/7 surveillance', 'Instant alerts', 'Performance metrics', 'Security monitoring'],
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NeptyAI Solution
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your network operations with three powerful AI-driven capabilities 
            that work together seamlessly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{capability.description}</p>

              <ul className="space-y-3">
                {capability.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
