import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useChatbot } from '../context/ChatbotContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openChatbot } = useChatbot();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/work', label: 'Fe de Jesús' },
    { path: '/about', label: 'Nosotros' },
    { path: '/services', label: 'Lecciones' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contacto' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="tracking-tight cursor-pointer"
          >
            Selá
          </motion.div>
        </Link>

        {/* Navegación de escritorio */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
            >
              <span className="text-sm tracking-wide transition-colors hover:text-gray-600">
                {item.label}
              </span>
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <button
            onClick={() => openChatbot()}
            className="px-5 py-2 bg-black text-white rounded-full text-sm tracking-wide hover:bg-gray-800 transition-colors"
          >
            Asistente Bíblico
          </button>
        </div>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-sm tracking-wide hover:text-gray-600"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                openChatbot();
              }}
              className="w-full text-left px-5 py-3 bg-black text-white rounded-full text-sm tracking-wide"
            >
              Asistente Bíblico
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
