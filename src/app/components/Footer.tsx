import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { useChatbot } from '../context/ChatbotContext';

const footerLinks = {
  sitio: [
    { label: 'Nosotros', path: '/about' },
    { label: 'Fe de Jesús', path: '/work' },
    { label: 'Lecciones', path: '/services' },
    { label: 'Contacto', path: '/contact' },
  ],
  recursos: [
    { label: 'Blog', path: '/blog' },
    { label: 'Biblioteca digital', path: '/contact' },
    { label: 'Buscar iglesia', path: '/about' },
    { label: 'Solicitar estudio bíblico', path: '/services' },
  ],
};

const socialLinks = [
  { icon: Mail, label: 'Correo', href: 'mailto:contacto@sela.org' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const { openChatbot } = useChatbot();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl tracking-tight mb-4">Selá</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Un espacio para explorar las verdades bíblicas: doctrina adventista, estudio de la
              Biblia y una comunidad que acompaña el proceso.
            </p>
            <button
              onClick={() => openChatbot()}
              className="mb-6 px-5 py-2.5 bg-white text-black rounded-full text-sm tracking-wide hover:bg-gray-100 transition-colors"
            >
              Asistente Bíblico
            </button>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">Sitio</h4>
            <ul className="space-y-3">
              {footerLinks.sitio.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="tracking-wide mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 Selá. Iglesia Adventista del Séptimo Día.</p>
        </div>
      </div>
    </footer>
  );
}
