import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Code2 className="w-16 h-16 text-accent" />
      </motion.div>
      
      <motion.div
        className="text-2xl font-bold mb-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Perfecto<span className="text-accent">Dev</span>
      </motion.div>
      
      <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;