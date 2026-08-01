// Reemplaza la sección "Let's Create Something Amazing" por el buscador
// de iglesias adventistas en el Home. Se mantiene el nombre de archivo
// CallToAction.tsx para no romper el import en HomePage.tsx.

import { motion } from 'motion/react';
import { ChurchFinder } from './ChurchFinder';

export function CallToAction() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl tracking-tighter mb-6">
            Encuentra una iglesia adventista cerca de ti
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Únete a una comunidad local. Busca por ciudad, colonia o código postal y encuentra
            horarios, dirección y contacto.
          </p>

          <div className="text-left max-w-2xl mx-auto">
            <ChurchFinder variant="dark" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
