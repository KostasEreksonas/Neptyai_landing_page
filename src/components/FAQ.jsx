
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to implement NeptyAI?',
      answer: 'Most customers are up and running within 24-48 hours. Our streamlined onboarding process includes automated discovery, configuration, and integration with your existing infrastructure.',
    },
    {
      question: 'What network devices and protocols does NeptyAI support?',
      answer: 'NeptyAI supports all major network vendors including Cisco, Juniper, Arista, and more. We work with standard protocols like SNMP, NetFlow, sFlow, and provide REST APIs for custom integrations.',
    },
    {
      question: 'Is my network data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption (AES-256), comply with SOC 2 Type II, GDPR, and HIPAA standards. Your data is stored in geographically distributed data centers with multiple redundancy layers.',
    },
    {
      question: 'Can I try NeptyAI before committing?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. Our team will help you set up and optimize the platform during your trial period.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include email support. Professional plans get priority support with 4-hour response times. Enterprise customers receive 24/7 phone support and a dedicated account manager.',
    },
    {
      question: 'How does the AI learn my network?',
      answer: 'Our AI engine analyzes historical data, traffic patterns, and performance metrics over the first 7-14 days to build a baseline. It continuously learns and adapts to changes in your network environment.',
    },
  ];

  return (
    <section className="py-24 px-4 relative bg-slate-950/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            Everything you need to know about NeptyAI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
