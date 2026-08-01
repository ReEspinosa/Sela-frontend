import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { BibleStudyForm } from '../components/BibleStudyForm';
import { lessons } from '../data/lessons';

export function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">Fe de Jesús — Lecciones</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Un recorrido completo por las doctrinas fundamentales de la fe adventista, lección por
            lección. Revisa el temario y, cuando quieras, solicita un estudio guiado.
          </p>
        </motion.div>
      </div>

      {/* Lecciones */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {lessons.map((lesson) => (
              <AccordionItem
                key={lesson.number}
                value={lesson.number}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-2xl tracking-tighter text-gray-300">{lesson.number}</span>
                    <span className="tracking-tight">{lesson.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pl-12">
                  {lesson.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Formulario de estudio bíblico */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-center">
              Solicita tu estudio bíblico
            </h2>
            <p className="text-gray-600 mb-10 text-center">
              Completa tus datos y alguien de nuestro equipo se pondrá en contacto contigo para
              acompañarte en tu estudio.
            </p>
            <BibleStudyForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
