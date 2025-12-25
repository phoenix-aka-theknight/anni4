import { motion } from "framer-motion";
import { useMemo } from "react";

interface FallingPetalsProps {
  count?: number;
}

const FallingPetals = ({ count = 20 }: FallingPetalsProps) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
      swayAmount: 30 + Math.random() * 50,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            width: petal.size,
            height: petal.size * 1.3,
          }}
          initial={{ y: "-10vh", rotate: petal.rotation }}
          animate={{
            y: "110vh",
            rotate: [petal.rotation, petal.rotation + 180, petal.rotation + 360],
            x: [0, petal.swayAmount, -petal.swayAmount, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 20 26"
            fill="none"
            className="w-full h-full drop-shadow-sm"
          >
            <ellipse
              cx="10"
              cy="13"
              rx="8"
              ry="12"
              fill="hsl(350, 80%, 85%)"
              opacity="0.7"
            />
            <ellipse
              cx="10"
              cy="13"
              rx="5"
              ry="8"
              fill="hsl(350, 75%, 80%)"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
