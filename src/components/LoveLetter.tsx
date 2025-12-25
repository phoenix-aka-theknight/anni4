import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LoveLetterProps {
  onComplete: () => void;
}

const letterContent = [
  "My Sweetest Laddu,",
  "",
  "Since the first time I saw you,",
  "my heart felt something special.",
  "",
  "Every time I see your photos,",
  "I keep staring at your eyes for hours.",
  "",
  "Every smile you make makes my world shine bright,",
  "your laugh is the moment I live for.",
  "",
  "You make my ordinary days feel special,",
  "I find myself thinking about you.",
  "",
  "At every moment, even in my dreams,",
  "I always wish that I never wake up from it.",
  "",
  "Without you, my world feels empty.",
  "You are not just my love, you are my best friend, my everything.",
  "",
  "I will always love you and hold your hand through every situation.",
  "You are my sunshine, my nightlight.",
  "",
  "Words could never fully explain",
  "how much you mean to me,",
  "but I wanted you to know...",
  "",
  "I wanna be your favorite person forever ❤️",
  "",
  "Yours completely and forever,",
  "Your Anirudh ❤️",
];

const LoveLetter = ({ onComplete }: LoveLetterProps) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (visibleLines < letterContent.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowButton(true), 500);
    }
  }, [visibleLines]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative max-w-lg w-full"
        initial={{ y: 100, opacity: 0, rotateX: 20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Letter paper */}
        <div
          className="relative bg-cream rounded-lg p-6 sm:p-10 shadow-deep"
          style={{
            background: "linear-gradient(180deg, hsl(30 50% 97%) 0%, hsl(30 45% 94%) 100%)",
            boxShadow: "0 20px 60px hsl(350 40% 40% / 0.15), 0 0 0 1px hsl(30 30% 85% / 0.5)",
          }}
        >
          {/* Decorative corner flourish */}
          <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-rose-light/40 rounded-tl-lg" />
          <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-rose-light/40 rounded-br-lg" />
          
          {/* Letter content */}
          <div className="relative z-10 space-y-1">
            {letterContent.map((line, index) => (
              <motion.p
                key={index}
                className={`font-handwritten text-lg sm:text-xl leading-relaxed ${
                  index === 0 ? "text-2xl sm:text-3xl text-rose-dark mb-4" : 
                  line.includes("Forever") ? "text-xl sm:text-2xl text-rose-dark mt-6" :
                  line.includes("❤️") ? "text-xl sm:text-2xl text-rose-dark" :
                  "text-foreground"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: index < visibleLines ? 1 : 0,
                  y: index < visibleLines ? 0 : 10,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {line || "\u00A0"}
              </motion.p>
            ))}
          </div>
          
          {/* Small floating hearts */}
          <motion.div
            className="absolute top-6 right-6 text-rose/40"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        </div>
        
        {/* Continue button */}
        {showButton && (
          <motion.button
            className="mt-8 mx-auto block px-8 py-4 bg-rose text-primary-foreground rounded-full font-handwritten text-xl shadow-glow hover:shadow-deep transition-shadow"
            onClick={onComplete}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            One last thing ❤️
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default LoveLetter;
