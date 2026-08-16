// Muestra 3 videos destacados de Fe de Jesús en el Home.
// Se mantiene el nombre de archivo FeaturedProjects.tsx para no romper el import en HomePage.tsx.

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { VideoCard } from './VideoCard';
import { faithVideos } from '../data/faithContent';

const destacadosIds = ['video-origen-del-pecado', 'video-dios', 'video-fe'];

export function FeaturedProjects() {
  const destacados = faithVideos.filter((v) => destacadosIds.includes(v.id));

  return (
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex justify-between items-end">
            <div>
              <h2 className="text-5xl md:text-7xl tracking-tighter mb-4">Fe de Jesús</h2>
              <p className="text-gray-600 text-lg">
                Mira la explicación de cada doctrina en video y profundiza leyendo el artículo completo
              </p>
            </div>
            <Link to="/work">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="hidden md:flex items-center gap-2 text-sm tracking-wide hover:gap-4 transition-all"
              >
                Ver todos los videos
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destacados.map((video, index) => (
                <VideoCard key={video!.id} video={video!} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/work">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-sm tracking-wide"
              >
                Ver todos los videos
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
  );
}