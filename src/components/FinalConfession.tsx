import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const FinalConfession = () => {
  const [answered, setAnswered] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const handleYes = () => {
    setAnswered(true);
    setCelebrating(true);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-md">
        {!answered ? (
          <>
            {/* Pulsing heart */}
            <motion.div
              className="mb-8 inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="text-rose"
                animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={80} fill="currentColor" className="drop-shadow-lg" />
              </motion.div>
            </motion.div>
            
            {/* Question */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-handwritten text-rose-dark mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I just wanted to ask you...
            </motion.h1>
            
            <motion.p
              className="text-4xl sm:text-5xl md:text-6xl font-handwritten text-rose mb-12 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Will you be mine? 💖
            </motion.p>
            
            {/* Response buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                className="px-10 py-4 bg-rose text-primary-foreground rounded-full font-handwritten text-2xl shadow-glow hover:shadow-deep transition-all"
                onClick={handleYes}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes! 💕
              </motion.button>
              
              <motion.button
                className="px-10 py-4 bg-petal text-rose-dark rounded-full font-handwritten text-2xl shadow-romantic hover:shadow-glow transition-all"
                onClick={handleYes}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Of course! 🥰
              </motion.button>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Celebration */}
            <motion.div
              className="mb-8 relative inline-block"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                <Sparkles size={60} className="text-gold mx-auto mb-4" />
              </motion.div>
              <motion.div
                className="text-rose"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={100} fill="currentColor" className="drop-shadow-lg" />
              </motion.div>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-handwritten text-rose-dark mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              You made me the happiest! 🎉
            </motion.h1>
            
            <motion.p
              className="text-2xl sm:text-3xl font-handwritten text-rose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I love you endlessly 💝
            </motion.p>
            
            {/* Floating celebration hearts */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: -100,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Heart size={16 + Math.random() * 20} fill="currentColor" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FinalConfession;
