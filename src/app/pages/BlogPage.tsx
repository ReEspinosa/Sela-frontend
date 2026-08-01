import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-MX', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function PostCard({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  return (
    <Link to={`/blog/${post.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="text-xs text-gray-500 tracking-wide mb-3">{post.category}</div>
          <h3 className="text-xl tracking-tight mb-3 group-hover:text-gray-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime}
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export function BlogPage() {
  const destacado = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const masLeidos = blogPosts.filter((p) => p.featured);
  const enTendencia = blogPosts.filter((p) => p.trending);

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Reflexiones sobre la Biblia, la vida cristiana y preguntas frecuentes de fe.
          </p>
        </motion.div>
      </div>

      {/* Artículo destacado */}
      {destacado && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <Link to={`/blog/${destacado.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={destacado.image}
                    alt={destacado.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-black text-white text-xs tracking-wide rounded-full mb-4 w-fit">
                    Destacado
                  </span>
                  <h2 className="text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-gray-700 transition-colors">
                    {destacado.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{destacado.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {formatDate(destacado.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {destacado.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      )}

      {/* Más leídos */}
      {masLeidos.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-10">Más leídos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masLeidos.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* En tendencia */}
      {enTendencia.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-10">En tendencia esta semana</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enTendencia.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Todos los artículos */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-10">Todos los artículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
