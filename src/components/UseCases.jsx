
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cloud, ShoppingCart, Wifi, Hotel as Hospital, GraduationCap } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: 'Enterprise Networks',
      description: 'Optimize complex multi-site networks with centralized AI-driven management and monitoring.',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Ensure seamless cloud connectivity and performance across hybrid and multi-cloud environments.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Maintain 99.99% uptime for your online store with predictive maintenance and auto-scaling.',
    },
    {
      icon: Wifi,
      title: 'ISP & Telecom',
      description: 'Deliver superior service quality with intelligent traffic management and capacity planning.',
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Ensure critical medical systems stay online with proactive monitoring and instant failover.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Support thousands of concurrent users with optimized bandwidth and network performance.',
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
            Built for{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            NeptyAI adapts to your unique network requirements, regardless of your industry or scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
