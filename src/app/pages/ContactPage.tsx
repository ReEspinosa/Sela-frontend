import { motion } from 'motion/react';
import { Mail, Facebook, Instagram, Youtube, MapPin, Phone, BookOpen, Download } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Correo', value: 'contacto@sela.org', href: 'mailto:contacto@sela.org' },
  { icon: Phone, label: 'Teléfono', value: '55 1234 5678', href: 'tel:+525512345678' },
  { icon: MapPin, label: 'Ubicación', value: 'Ciudad de México', href: '#' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

// CAMBIA: reemplaza href por la URL real de cada PDF cuando la tengas.
const recursos = [
  { title: 'Biblia Reina-Valera 1960 (PDF)', description: 'Texto completo, descarga gratuita.', href: '#' },
  { title: 'Biblia Nueva Versión Internacional (PDF)', description: 'Texto completo, descarga gratuita.', href: '#' },
  { title: 'El Deseado de todas las gentes', description: 'Elena G. de White', href: '#' },
  { title: 'El Camino a Cristo', description: 'Elena G. de White', href: '#' },
  { title: 'El Conflicto de los Siglos', description: 'Elena G. de White', href: '#' },
  { title: 'Patriarcas y Profetas', description: 'Elena G. de White', href: '#' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // CAMBIA: conecta esto a tu backend de contacto.
    console.log('Mensaje de contacto:', formData);
    setEnviado(true);
    setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            ¿Tienes una pregunta, quieres compartir tu testimonio o necesitas ayuda? Escríbenos.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {enviado ? (
              <div className="p-8 bg-gray-50 rounded-lg text-center">
                <h3 className="text-2xl tracking-tight mb-2">Mensaje enviado</h3>
                <p className="text-gray-600 mb-6">
                  Gracias por escribirnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="text-sm tracking-wide underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm tracking-wide mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-sm tracking-wide mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm tracking-wide mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm tracking-wide mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-black text-white rounded-lg tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Enviar mensaje
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl tracking-tight mb-8">Información de contacto</h2>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className="p-3 bg-white rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                    <div className="tracking-tight">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h2 className="text-3xl tracking-tight mb-6">Síguenos</h2>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-black hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Biblioteca digital */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">Biblioteca digital</h2>
            <p className="text-gray-600 max-w-2xl">
              Descarga o consulta materiales para profundizar en tu estudio. Todo el contenido es
              gratuito.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <motion.a
                key={recurso.title}
                href={recurso.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow flex items-start gap-4"
              >
                <div className="p-3 bg-gray-50 rounded-lg shrink-0">
                  <BookOpen size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="tracking-tight mb-1">{recurso.title}</h4>
                  <p className="text-gray-500 text-sm mb-3">{recurso.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm tracking-wide">
                    <Download size={14} />
                    Descargar
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
