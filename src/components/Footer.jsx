
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Github, Mail, Globe } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
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

  return (
    <footer className="relative py-20 px-4 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using NeptyAI to optimize their network operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 group"
            >
              <a href="mailto:info@neptyai.com">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8"
            >
              <a href="mailto:info@neptyai.com">
                Book Demo
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://horizons-cdn.hostinger.com/9e0bb132-77fb-4f85-8845-7fad9994eaff/7dbefb85ae40731ff16bb0ebb3eb684c.png" alt="NeptyAI logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-white">NeptyAI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-powered network intelligence for modern enterprises.
            </p>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Product</span>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Features</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Security</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Company</span>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">About</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Resources</span>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">API Reference</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Support</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Status</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 NeptyAI. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://neptyai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors"
            >
              <Globe className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
            </a>
            <a
              href="https://www.linkedin.com/company/neptyai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
            </a>
            <a
              href="https://github.com/KostasEreksonas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
            </a>
            <a
              href="mailto:info@neptyai.com"
              className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
