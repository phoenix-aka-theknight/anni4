import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative cursor-pointer group"
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* Glow effect behind envelope */}
        <div className="absolute inset-0 bg-rose/20 blur-3xl rounded-full scale-150 group-hover:bg-rose/30 transition-colors duration-500" />
        
        {/* Envelope body */}
        <div className="relative">
          <motion.div
            className="w-64 h-44 sm:w-80 sm:h-52 bg-cream rounded-lg shadow-deep relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, hsl(30 50% 97%), hsl(30 40% 92%))",
            }}
          >
            {/* Envelope flap */}
            <div
              className="absolute top-0 left-0 right-0 h-20 sm:h-24"
              style={{
                background: "linear-gradient(180deg, hsl(30 45% 94%), hsl(30 40% 90%))",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
            
            {/* Heart seal */}
            <motion.div
              className="absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose rounded-full flex items-center justify-center shadow-glow">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" fill="currentColor" />
              </div>
            </motion.div>
            
            {/* Decorative lines */}
            <div className="absolute bottom-4 left-4 right-4 space-y-2">
              <div className="h-1.5 bg-rose-light/50 rounded-full" />
              <div className="h-1.5 bg-rose-light/30 rounded-full w-3/4" />
            </div>
          </motion.div>
          
          {/* Floating hearts around envelope */}
          <motion.div
            className="absolute -top-4 -right-4 text-rose"
            animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={20} fill="currentColor" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-4 text-petal"
            animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Heart size={16} fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Call to action text */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.p
          className="text-2xl sm:text-3xl font-handwritten text-rose-dark"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Tap to open 💌
        </motion.p>
        <p className="text-sm text-muted-foreground mt-2 font-elegant">
          A special message awaits...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;
