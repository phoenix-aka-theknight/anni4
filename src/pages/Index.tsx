import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";
import SparkleTrail from "@/components/SparkleTrail";
import HeartBurst from "@/components/HeartBurst";
import Envelope from "@/components/Envelope";
import LoveLetter from "@/components/LoveLetter";
import FinalConfession from "@/components/FinalConfession";

type Scene = "envelope" | "letter" | "confession";

const Index = () => {
  const [currentScene, setCurrentScene] = useState<Scene>("envelope");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionTo = useCallback((scene: Scene) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScene(scene);
      setIsTransitioning(false);
    }, 500);
  }, []);

  const handleOpenEnvelope = () => {
    transitionTo("letter");
  };

  const handleLetterComplete = () => {
    transitionTo("confession");
  };

  return (
    <main className="min-h-screen bg-romantic-gradient overflow-hidden relative">
      {/* Background gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(350 80% 90% / 0.3) 0%, transparent 60%)",
        }}
      />
      
      {/* Ambient particles based on scene */}
      {currentScene === "envelope" && <FloatingHearts count={12} />}
      {currentScene === "letter" && <FallingPetals count={15} />}
      {currentScene === "confession" && (
        <>
          <FloatingHearts count={20} />
          <FallingPetals count={10} />
        </>
      )}
      
      {/* Interactive effects */}
      <SparkleTrail />
      <HeartBurst />
      
      {/* Scene content */}
      <AnimatePresence mode="wait">
        {!isTransitioning && (
          <motion.div
            key={currentScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {currentScene === "envelope" && (
              <Envelope onOpen={handleOpenEnvelope} />
            )}
            
            {currentScene === "letter" && (
              <LoveLetter onComplete={handleLetterComplete} />
            )}
            
            {currentScene === "confession" && <FinalConfession />}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
