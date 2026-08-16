// Versículo del día. CAMBIA: conecta `verses` a una rotación real (por fecha)
// cuando quieras que cambie automáticamente cada día.

import { motion } from 'motion/react';
import { useChatbot } from '../context/ChatbotContext';

const verses = [
  {
    text: '"Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada."',
    reference: 'Santiago 1:5',
  },
];

export function VerseOfDay() {
  const { openChatbot } = useChatbot();
  const verse = verses[0];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="text-xs tracking-wide text-gray-500 mb-6">Versículo del día</div>
        <p className="text-2xl md:text-3xl tracking-tight leading-relaxed mb-4">{verse.text}</p>
        <p className="text-gray-500 mb-8">{verse.reference}</p>
        <button
          onClick={() => openChatbot(`¿Qué significa ${verse.reference}?`)}
          className="text-sm tracking-wide underline underline-offset-4 hover:text-gray-600 transition-colors"
        >
          Preguntar sobre este versículo
        </button>
      </motion.div>
    </section>
  );
}
