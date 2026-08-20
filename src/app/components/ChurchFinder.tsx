// Buscador de iglesias adventistas.
// Manda directamente a Google Maps (navegación en la misma pestaña, no pop-up)
// ya centrado en la ubicación de la persona, con la búsqueda
// "Iglesia Adventista del Séptimo Día" lista y los pines reales de Google Maps.
//
// Usamos navegación directa (window.location.href) en vez de abrir pestaña
// nueva porque los navegadores móviles (sobre todo Safari en iOS) bloquean
// o rompen los pop-ups abiertos después de una acción async como pedir
// geolocalización, incluso con el truco de abrir la pestaña en blanco antes.
// Navegar en la misma pestaña es 100% confiable en cualquier navegador.
//
// Dos formas de ubicar a la persona:
// 1. "Usar mi ubicación" -> geolocalización del navegador (se difumina un poco).
// 2. Escribir una ciudad -> se geocodifica con Nominatim (OpenStreetMap, gratis,
//    solo para convertir el nombre de la ciudad en coordenadas).

import { useState } from 'react';
import { Search, LocateFixed, Loader2, MapPin } from 'lucide-react';

const BUSQUEDA = 'Iglesia Adventista del Séptimo Día';

function difuminarUbicacion(lat: number, lng: number): [number, number] {
  const deltaLat = (Math.random() - 0.5) * 0.02;
  const deltaLng = (Math.random() - 0.5) * 0.02;
  return [lat + deltaLat, lng + deltaLng];
}

function irAGoogleMaps(lat: number, lng: number) {
  const url = `https://www.google.com/maps/search/${encodeURIComponent(BUSQUEDA)}/@${lat},${lng},13z`;
  window.location.href = url;
}

async function geocodificarCiudad(ciudad: string): Promise<[number, number] | null> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(ciudad)}&format=json&limit=1`;
  const response = await fetch(url);
  if (!response.ok) return null;
  const data = await response.json();
  if (!data || data.length === 0) return null;
  return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
}

interface ChurchFinderProps {
  variant?: 'light' | 'dark';
}

export function ChurchFinder({ variant = 'light' }: ChurchFinderProps) {
  const [query, setQuery] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const isDark = variant === 'dark';

  function pedirUbicacion() {
    setError('');
    setCargando(true);

    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización. Prueba buscando tu ciudad.');
      setCargando(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
          const [lat, lng] = difuminarUbicacion(pos.coords.latitude, pos.coords.longitude);
          irAGoogleMaps(lat, lng);
        },
        (err) => {
          console.error('Error de geolocalización:', err);
          if (err.code === err.PERMISSION_DENIED) {
            setError('No diste permiso de ubicación. Puedes buscar por ciudad en su lugar.');
          } else {
            setError('No pudimos obtener tu ubicación. Intenta buscar por ciudad.');
          }
          setCargando(false);
        },
        { enableHighAccuracy: false, timeout: 10000 }
    );
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    setError('');
    setCargando(true);

    const coords = await geocodificarCiudad(query.trim());

    if (!coords) {
      setError('No encontramos esa ciudad. Revisa cómo la escribiste, o usa tu ubicación.');
      setCargando(false);
      return;
    }

    irAGoogleMaps(coords[0], coords[1]);
  }

  const inputClasses = isDark
      ? 'w-full pl-11 pr-4 py-4 rounded-full text-sm tracking-wide bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:border-white focus:outline-none transition-colors'
      : 'w-full pl-11 pr-4 py-4 rounded-full text-sm tracking-wide bg-gray-50 text-black placeholder:text-gray-400 border border-gray-200 focus:border-black focus:outline-none transition-colors';

  return (
      <div>
        <p className={`text-xs mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Al abrir el mapa, fíjate que los resultados digan "Adventista del Séptimo Día" —
          a veces aparecen ahí cerca otras iglesias de nombre parecido que no son de esta denominación.
        </p>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ciudad, ej: Guadalajara"
                className={inputClasses}
            />
          </div>
          <button
              type="submit"
              disabled={cargando}
              className={`px-8 py-4 rounded-full tracking-wide transition-colors disabled:opacity-50 flex items-center justify-center gap-2 ${
                  isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'
              }`}
          >
            {cargando ? <Loader2 size={16} className="animate-spin" /> : <MapPin size={16} />}
            Buscar iglesia
          </button>
        </form>

        <button
            type="button"
            onClick={pedirUbicacion}
            disabled={cargando}
            className={`inline-flex items-center gap-2 text-sm tracking-wide underline underline-offset-4 transition-colors disabled:opacity-50 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}
        >
          {cargando ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Abriendo el mapa...
              </>
          ) : (
              <>
                <LocateFixed size={16} />
                Usar mi ubicación
              </>
          )}
        </button>

        {error && <p className={`text-sm mt-3 ${isDark ? 'text-red-400' : 'text-red-500'}`}>{error}</p>}
      </div>
  );
}
