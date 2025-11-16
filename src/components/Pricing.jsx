
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  // These handlers are now deprecated as buttons will use mailto links
  const handleDemo = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleTrial = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small to medium networks',
      features: [
        'Up to 50 devices',
        'Basic predictive analytics',
        'Real-time monitoring',
        'Email support',
        '99.5% uptime SLA',
        'Monthly reports',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$1,499',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 500 devices',
        'Advanced AI analytics',
        'Automated optimization',
        'Priority support',
        '99.9% uptime SLA',
        'Custom integrations',
        'Weekly reports',
        'Dedicated account manager',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited devices',
        'Full AI suite',
        'White-glove onboarding',
        '24/7 phone support',
        '99.99% uptime SLA',
        'Custom development',
        'Real-time reports',
        'Multi-region support',
      ],
      cta: 'Book Demo',
      popular: false,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative bg-slate-900/50 border rounded-2xl p-8 ${
                plan.popular
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                  : 'border-slate-800 hover:border-cyan-500/50'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
              </div>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-slate-800 hover:bg-slate-700'
                } text-white group`}
                size="lg"
              >
                <a href="mailto:info@neptyai.com">
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
