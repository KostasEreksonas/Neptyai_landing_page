
import React from 'react';
import { motion } from 'framer-motion';

const NetworkDiagram = () => {
  const nodes = [
    { id: 1, x: 50, y: 50, size: 'large' },
    { id: 2, x: 20, y: 30, size: 'medium' },
    { id: 3, x: 80, y: 30, size: 'medium' },
    { id: 4, x: 15, y: 70, size: 'small' },
    { id: 5, x: 50, y: 85, size: 'small' },
    { id: 6, x: 85, y: 70, size: 'small' },
    { id: 7, x: 35, y: 15, size: 'small' },
    { id: 8, x: 65, y: 15, size: 'small' },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 7 },
    { from: 3, to: 6 },
    { from: 3, to: 8 },
    { from: 1, to: 5 },
  ];

  const getNodeSize = (size) => {
    switch (size) {
      case 'large': return 'w-16 h-16';
      case 'medium': return 'w-12 h-12';
      case 'small': return 'w-8 h-8';
      default: return 'w-10 h-10';
    }
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[600px]">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          return (
            <motion.line
              key={idx}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: idx * 0.1 }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, idx) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <motion.div
            className={`${getNodeSize(node.size)} rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50 flex items-center justify-center`}
            animate={{
              boxShadow: [
                '0 0 20px rgba(6, 182, 212, 0.5)',
                '0 0 40px rgba(6, 182, 212, 0.8)',
                '0 0 20px rgba(6, 182, 212, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
          
          {/* Pulse effect */}
          <motion.div
            className={`absolute inset-0 ${getNodeSize(node.size)} rounded-full border-2 border-cyan-400`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default NetworkDiagram;
