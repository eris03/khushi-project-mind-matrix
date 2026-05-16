import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface AudioVisualizerProps {
  isPlaying: boolean;
  color?: string;
  count?: number;
  className?: string;
}

export default function AudioVisualizer({ isPlaying, color = "bg-earth", count = 8, className }: AudioVisualizerProps) {
  return (
    <div className={cn("flex items-center gap-1 h-6", className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          animate={isPlaying ? {
            height: [
              "20%", "60%", "40%", "100%", "70%", "30%", "85%", "50%", "20%"
            ][(i + Math.floor(Math.random() * 5)) % 9],
          } : { 
            height: "15%" 
          }
          }
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className={cn("w-1 rounded-full", color)}
          style={{
            boxShadow: isPlaying ? `0 0 10px rgba(93,64,55,0.3)` : 'none'
          }}
        />
      ))}
    </div>
  );
}
