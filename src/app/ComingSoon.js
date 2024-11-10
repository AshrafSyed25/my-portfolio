// src/app/ComingSoon.js
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white/90 max-w-lg mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          This site is being crafted with precision and passion by a dedicated software developer. Stay tuned for an innovative experience that’s worth the wait.
        </motion.p>
        <motion.p
          className="text-md font-medium text-indigo-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Launching Soon – Watch this Space!
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="w-16 h-16 rounded-full border-4 border-t-indigo-600 border-indigo-300 animate-spin"></div>
        </motion.div>
      </div>
    </div>
  );
}
