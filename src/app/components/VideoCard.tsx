import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { FaithVideo } from '../data/faithContent';

interface VideoCardProps {
  video: FaithVideo;
  index?: number;
}

export function VideoCard({ video, index = 0 }: VideoCardProps) {
  return (
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
      >
        {video.embedUrl ? (
            <div className="aspect-[9/16] bg-black">
              <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  scrolling="no"
              />
            </div>
        ) : (
            <div className="aspect-[9/16] bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Video próximamente
            </div>
        )}

        <div className="p-6">
          <h3 className="text-xl tracking-tight mb-2">{video.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{video.description}</p>
          {video.instagramUrl && (
              <a
                  href={video.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-wide underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                Ver en Instagram
                <ExternalLink size={14} />
              </a>
          )}
        </div>
      </motion.div>
  );
}