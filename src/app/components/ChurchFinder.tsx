// Buscador de iglesias adventistas. Se usa en Home y en About.
// CAMBIA: cuando tengas una API real de iglesias, reemplaza el filtro
// sobre `churches` por una llamada a esa API dentro de handleSearch.

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Clock, Phone } from 'lucide-react';
import { churches } from '../data/churches';

interface ChurchFinderProps {
  variant?: 'light' | 'dark';
}

export function ChurchFinder({ variant = 'light' }: ChurchFinderProps) {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const results = churches.filter((church) => {
    const texto = `${church.city} ${church.name} ${church.address}`.toLowerCase();
    return texto.includes(query.trim().toLowerCase());
  });

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setHasSearched(true);
  }

  const isDark = variant === 'dark';

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ciudad, colonia o código postal"
            className={`w-full pl-11 pr-4 py-4 rounded-full text-sm tracking-wide focus:outline-none transition-colors ${
              isDark
                ? 'bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:border-white'
                : 'bg-gray-50 text-black placeholder:text-gray-400 border border-gray-200 focus:border-black'
            }`}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className={`px-8 py-4 rounded-full tracking-wide transition-colors ${
            isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Buscar iglesia
        </motion.button>
      </form>

      {hasSearched && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.length === 0 && (
            <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
              No encontramos iglesias en esa zona. Prueba con el nombre de una ciudad cercana.
            </p>
          )}

          {results.map((church) => (
            <motion.div
              key={church.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`p-6 rounded-lg ${isDark ? 'bg-white/10 border border-white/10' : 'bg-gray-50 border border-gray-100'}`}
            >
              <h3 className="tracking-tight mb-3">{church.name}</h3>
              <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{church.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 shrink-0" />
                  <span>{church.schedule}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>{church.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
