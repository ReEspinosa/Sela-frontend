import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useChatbot } from "../context/ChatbotContext";

export function Hero() {
  const { openChatbot } = useChatbot();
  const text = "Explora las Verdades Bíblicas";
  const words = text.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl tracking-tighter"
            >
              Selá
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-3">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="text-xl md:text-2xl text-gray-600 tracking-wide"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
              Resuelve esas dudas teológicas que nunca te atreverías a preguntar en voz alta:
              nuestro Asistente Bíblico te responde con base en la Biblia, sin juicios.

          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-8"
          >
            <motion.button
              onClick={() => openChatbot()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white rounded-full tracking-wide hover:bg-gray-800 transition-colors"
            >
              Habla con el Asistente Bíblico
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  );
}