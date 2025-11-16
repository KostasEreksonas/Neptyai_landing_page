
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp Global',
      content: 'NeptyAI reduced our network downtime by 92% in the first quarter. The predictive analytics are game-changing.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Network Director, CloudScale',
      content: 'The automated optimization saved us over $2M annually. Best investment we\'ve made in network infrastructure.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'VP Engineering, DataFlow Inc',
      content: 'Implementation was seamless, and the ROI was immediate. Our team can now focus on innovation instead of firefighting.',
      rating: 5,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their network operations with NeptyAI.
          </p>
        </motion.div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <img alt="TechCorp logo" className="h-12 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1585065799297-ce07d1855c01" />
            <img alt="CloudScale logo" className="h-12 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401" />
            <img alt="DataFlow logo" className="h-12 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
            <img alt="NetSystems logo" className="h-12 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" />
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-cyan-500/30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="border-t border-slate-800 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
