// Página de detalle de un artículo de Fe de Jesús (ruta /work/:id).
// Se mantiene el nombre de archivo ProjectDetailPage.tsx para no romper
// el import y la ruta ya definidos en App.tsx.

import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { faithArticles } from '../data/faithContent';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = faithArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl mb-4">Artículo no encontrado</h1>
        <Link to="/work" className="text-blue-600 hover:underline">
          Volver a Fe de Jesús
        </Link>
      </div>
    );
  }

  const relacionados = faithArticles.filter((a) => a.id !== id).slice(0, 3);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-sm tracking-wide hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Volver a Fe de Jesús
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 tracking-wide">
            <span className="px-3 py-1 bg-gray-100 rounded-full">{article.tag}</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tighter mb-6">{article.title}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12"
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{article.excerpt}</p>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:bg-gray-800 transition-colors"
            >
              Solicitar un estudio bíblico sobre este tema
            </Link>
          </div>
        </motion.div>
      </article>

      {relacionados.length > 0 && (
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl tracking-tight mb-12">Otros artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relacionados.map((relArticle, index) => (
                <Link key={relArticle.id} to={`/work/${relArticle.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={relArticle.image}
                        alt={relArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-gray-500 tracking-wide mb-2">{relArticle.tag}</div>
                      <h3 className="text-xl tracking-tight mb-2 group-hover:text-gray-700 transition-colors">
                        {relArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relArticle.excerpt}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
