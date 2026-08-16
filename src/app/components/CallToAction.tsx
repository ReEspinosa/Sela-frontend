import { motion } from 'motion/react';
import { BibleStudyForm } from './BibleStudyForm';

export function CallToAction() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-6">
              Solicita tu estudio bíblico
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Completa tus datos y alguien de nuestro equipo se pondrá en contacto contigo
              para acompañarte en tu estudio.
            </p>
          </div>

          <div className="text-left">
            <BibleStudyForm variant="dark" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
