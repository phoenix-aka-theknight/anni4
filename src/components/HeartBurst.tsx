import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface Burst {
  id: number;
  x: number;
  y: number;
  hearts: Array<{
    angle: number;
    distance: number;
    size: number;
    delay: number;
  }>;
}

const HeartBurst = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const createBurst = useCallback((x: number, y: number) => {
    const newBurst: Burst = {
      id: Date.now(),
      x,
      y,
      hearts: Array.from({ length: 8 }, (_, i) => ({
        angle: (i * 360) / 8 + Math.random() * 30,
        distance: 60 + Math.random() * 40,
        size: 12 + Math.random() * 12,
        delay: Math.random() * 0.1,
      })),
    };

    setBursts((prev) => [...prev, newBurst]);

    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.touches[0] : e;
      if (!point) return;
      createBurst(point.clientX, point.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleClick);
    };
  }, [createBurst]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {bursts.map((burst) => (
          <div
            key={burst.id}
            className="absolute"
            style={{ left: burst.x, top: burst.y }}
          >
            {burst.hearts.map((heart, i) => (
              <motion.div
                key={i}
                className="absolute text-rose"
                style={{
                  width: heart.size,
                  height: heart.size,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: Math.cos((heart.angle * Math.PI) / 180) * heart.distance,
                  y: Math.sin((heart.angle * Math.PI) / 180) * heart.distance,
                  scale: [0, 1.2, 0.8],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: heart.delay,
                  ease: "easeOut",
                }}
              >
                <Heart
                  className="w-full h-full"
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartBurst;
