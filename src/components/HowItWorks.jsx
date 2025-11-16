
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, LineChart, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Database,
      title: 'Connect Your Infrastructure',
      description: 'Seamlessly integrate NeptyAI with your existing network infrastructure in minutes. Our platform supports all major network devices and protocols.',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'AI Learning & Analysis',
      description: 'Our AI engine analyzes your network patterns, traffic flows, and performance metrics to build a comprehensive understanding of your infrastructure.',
    },
    {
      number: '03',
      icon: LineChart,
      title: 'Predictive Insights',
      description: 'Receive actionable insights and predictions about potential issues, optimization opportunities, and capacity planning recommendations.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Automated Optimization',
      description: 'Watch as NeptyAI automatically optimizes your network performance, prevents issues, and maintains peak efficiency 24/7.',
    },
  ];

  return (
    <section className="py-24 px-4 relative bg-slate-950/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get started with NeptyAI in four simple steps and transform your network operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="text-6xl font-bold text-cyan-500/20 mb-4">{step.number}</div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector dot */}
              <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
