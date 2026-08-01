import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { FaithVideo } from '../data/faithContent';

interface VideoCardProps {
  video: FaithVideo;
  index?: number;
}

export function VideoCard({ video, index = 0 }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        onClick={() => setIsPlaying(true)}
        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={22} className="ml-1 text-black" fill="black" />
            </div>
          </div>
          <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
            {video.duration}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl tracking-tight mb-2 group-hover:text-gray-700 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{video.description}</p>
        </div>
      </motion.div>

      {isPlaying && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center px-6"
          onClick={() => setIsPlaying(false)}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsPlaying(false)}
            aria-label="Cerrar video"
          >
            <X size={28} />
          </button>
          <div className="max-w-3xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            {video.embedUrl ? (
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center text-white">
                Este video estará disponible pronto.
              </div>
            )}
            <p className="text-white mt-4 tracking-tight">{video.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
