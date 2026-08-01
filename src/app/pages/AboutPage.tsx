import { motion } from 'motion/react';
import { BookOpen, Heart, Calendar, Users } from 'lucide-react';
import { ChurchFinder } from '../components/ChurchFinder';

const creemos = [
  { title: 'La Biblia', description: 'Como única fuente de fe y doctrina.' },
  { title: 'La gracia', description: 'La salvación se recibe por fe en Jesucristo, no se gana.' },
  { title: 'El sábado', description: 'Día de reposo y adoración desde la creación.' },
  { title: 'El cuerpo', description: 'Un templo que se cuida como parte de la vida espiritual.' },
  { title: 'La segunda venida', description: 'La esperanza central de la fe cristiana.' },
];

const cifras = [
  { icon: Calendar, value: '1863', label: 'Año de organización oficial' },
  { icon: Users, value: '200+', label: 'Países con presencia adventista' },
  { icon: BookOpen, value: '22', label: 'Lecciones de estudio bíblico' },
];

export function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">Quiénes somos</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Somos parte de la Iglesia Adventista del Séptimo Día, un movimiento cristiano
                mundial que basa su fe y su forma de vivir en la Biblia como única regla de fe y
                práctica.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La Iglesia Adventista del Séptimo Día es una comunidad cristiana protestante
                presente en más de 200 países. Su nombre resume dos convicciones centrales: la
                observancia del sábado como día de reposo, tal como lo establece el cuarto
                mandamiento, y la espera activa de la segunda venida de Jesucristo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cree en la Biblia como la Palabra de Dios y en la salvación por gracia, a través
                de la fe en Jesucristo. No exige perfección para pertenecer: acompaña el proceso
                de cada persona en su búsqueda de la verdad.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl tracking-tight mb-6">Lo que creemos</h3>
              <div className="space-y-5">
                {creemos.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-black rounded-full mt-2 shrink-0" />
                    <div>
                      <span className="tracking-tight">{item.title}</span>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cifras */}
      <div className="bg-black text-white py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {cifras.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-4" size={40} />
                <div className="text-5xl tracking-tight mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Nuestra forma de acompañar */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl tracking-tight mb-12"
        >
          Cómo te acompañamos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <Heart className="mb-4" size={32} />
            <h4 className="text-xl tracking-tight mb-2">Sin presión</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Puedes preguntar, dudar y avanzar a tu propio ritmo.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <BookOpen className="mb-4" size={32} />
            <h4 className="text-xl tracking-tight mb-2">Con base bíblica</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cada respuesta se fundamenta en la Escritura, no en opiniones.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <Users className="mb-4" size={32} />
            <h4 className="text-xl tracking-tight mb-2">En comunidad</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              No estás solo en este proceso: hay una iglesia cerca de ti.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Buscador de iglesias */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl tracking-tight mb-4"
          >
            Encuentra una congregación cerca de ti
          </motion.h2>
          <p className="text-gray-600 mb-10">
            No tienes que vivir esta fe en soledad. Busca la iglesia adventista más cercana a tu
            domicilio.
          </p>
          <ChurchFinder />
        </div>
      </div>
    </div>
  );
}
