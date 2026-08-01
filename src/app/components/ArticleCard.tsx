import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FaithArticle } from '../data/faithContent';

interface ArticleCardProps {
  article: FaithArticle;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <Link to={`/work/${article.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-gray-500 tracking-wide mb-3">
            <span className="px-3 py-1 bg-gray-100 rounded-full">{article.tag}</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="text-xl tracking-tight mb-2 group-hover:text-gray-700 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
        </div>
      </motion.article>
    </Link>
  );
}
