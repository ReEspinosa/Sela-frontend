import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const modalidades = [
  { value: 'en-linea', label: 'En línea' },
  { value: 'presencial', label: 'Presencial' },
];

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

// Cada país tiene: nombre en español, código de teléfono, y aliases para búsqueda
// (sin acentos, en inglés, variantes comunes)
interface PaisInfo {
  nombre: string;
  codigo: string;
  aliases: string[];
}

const paisesData: PaisInfo[] = [
  { nombre: 'Afganistán', codigo: '+93', aliases: ['afganistan', 'afghanistan'] },
  { nombre: 'Albania', codigo: '+355', aliases: ['albania'] },
  { nombre: 'Alemania', codigo: '+49', aliases: ['alemania', 'germany'] },
  { nombre: 'Andorra', codigo: '+376', aliases: ['andorra'] },
  { nombre: 'Angola', codigo: '+244', aliases: ['angola'] },
  { nombre: 'Antigua y Barbuda', codigo: '+1-268', aliases: ['antigua', 'antigua and barbuda'] },
  { nombre: 'Arabia Saudita', codigo: '+966', aliases: ['arabia saudita', 'saudi arabia'] },
  { nombre: 'Argelia', codigo: '+213', aliases: ['argelia', 'algeria'] },
  { nombre: 'Argentina', codigo: '+54', aliases: ['argentina'] },
  { nombre: 'Armenia', codigo: '+374', aliases: ['armenia'] },
  { nombre: 'Australia', codigo: '+61', aliases: ['australia'] },
  { nombre: 'Austria', codigo: '+43', aliases: ['austria'] },
  { nombre: 'Azerbaiyán', codigo: '+994', aliases: ['azerbaiyan', 'azerbaijan'] },
  { nombre: 'Bahamas', codigo: '+1-242', aliases: ['bahamas'] },
  { nombre: 'Bangladés', codigo: '+880', aliases: ['bangladesh', 'banglades'] },
  { nombre: 'Barbados', codigo: '+1-246', aliases: ['barbados'] },
  { nombre: 'Baréin', codigo: '+973', aliases: ['barein', 'bahrain'] },
  { nombre: 'Bélgica', codigo: '+32', aliases: ['belgica', 'belgium'] },
  { nombre: 'Belice', codigo: '+501', aliases: ['belice', 'belize'] },
  { nombre: 'Benín', codigo: '+229', aliases: ['benin'] },
  { nombre: 'Bielorrusia', codigo: '+375', aliases: ['bielorrusia', 'belarus'] },
  { nombre: 'Bolivia', codigo: '+591', aliases: ['bolivia'] },
  { nombre: 'Bosnia y Herzegovina', codigo: '+387', aliases: ['bosnia', 'bosnia and herzegovina'] },
  { nombre: 'Botsuana', codigo: '+267', aliases: ['botsuana', 'botswana'] },
  { nombre: 'Brasil', codigo: '+55', aliases: ['brasil', 'brazil'] },
  { nombre: 'Bulgaria', codigo: '+359', aliases: ['bulgaria'] },
  { nombre: 'Burkina Faso', codigo: '+226', aliases: ['burkina faso'] },
  { nombre: 'Burundi', codigo: '+257', aliases: ['burundi'] },
  { nombre: 'Cabo Verde', codigo: '+238', aliases: ['cabo verde', 'cape verde'] },
  { nombre: 'Camboya', codigo: '+855', aliases: ['camboya', 'cambodia'] },
  { nombre: 'Camerún', codigo: '+237', aliases: ['camerun', 'cameroon'] },
  { nombre: 'Canadá', codigo: '+1', aliases: ['canada'] },
  { nombre: 'Chile', codigo: '+56', aliases: ['chile'] },
  { nombre: 'China', codigo: '+86', aliases: ['china'] },
  { nombre: 'Chipre', codigo: '+357', aliases: ['chipre', 'cyprus'] },
  { nombre: 'Colombia', codigo: '+57', aliases: ['colombia'] },
  { nombre: 'Corea del Norte', codigo: '+850', aliases: ['corea del norte', 'north korea'] },
  { nombre: 'Corea del Sur', codigo: '+82', aliases: ['corea del sur', 'south korea'] },
  { nombre: 'Costa de Marfil', codigo: '+225', aliases: ['costa de marfil', 'ivory coast'] },
  { nombre: 'Costa Rica', codigo: '+506', aliases: ['costa rica'] },
  { nombre: 'Croacia', codigo: '+385', aliases: ['croacia', 'croatia'] },
  { nombre: 'Cuba', codigo: '+53', aliases: ['cuba'] },
  { nombre: 'Dinamarca', codigo: '+45', aliases: ['dinamarca', 'denmark'] },
  { nombre: 'Ecuador', codigo: '+593', aliases: ['ecuador'] },
  { nombre: 'Egipto', codigo: '+20', aliases: ['egipto', 'egypt'] },
  { nombre: 'El Salvador', codigo: '+503', aliases: ['el salvador'] },
  { nombre: 'Emiratos Árabes Unidos', codigo: '+971', aliases: ['emiratos arabes unidos', 'uae', 'united arab emirates'] },
  { nombre: 'España', codigo: '+34', aliases: ['espana', 'spain'] },
  { nombre: 'Estados Unidos', codigo: '+1', aliases: ['estados unidos', 'usa', 'united states', 'eu', 'eua'] },
  { nombre: 'Estonia', codigo: '+372', aliases: ['estonia'] },
  { nombre: 'Etiopía', codigo: '+251', aliases: ['etiopia', 'ethiopia'] },
  { nombre: 'Filipinas', codigo: '+63', aliases: ['filipinas', 'philippines'] },
  { nombre: 'Finlandia', codigo: '+358', aliases: ['finlandia', 'finland'] },
  { nombre: 'Francia', codigo: '+33', aliases: ['francia', 'france'] },
  { nombre: 'Ghana', codigo: '+233', aliases: ['ghana'] },
  { nombre: 'Grecia', codigo: '+30', aliases: ['grecia', 'greece'] },
  { nombre: 'Guatemala', codigo: '+502', aliases: ['guatemala'] },
  { nombre: 'Haití', codigo: '+509', aliases: ['haiti'] },
  { nombre: 'Honduras', codigo: '+504', aliases: ['honduras'] },
  { nombre: 'Hungría', codigo: '+36', aliases: ['hungria', 'hungary'] },
  { nombre: 'India', codigo: '+91', aliases: ['india'] },
  { nombre: 'Indonesia', codigo: '+62', aliases: ['indonesia'] },
  { nombre: 'Irak', codigo: '+964', aliases: ['irak', 'iraq'] },
  { nombre: 'Irán', codigo: '+98', aliases: ['iran'] },
  { nombre: 'Irlanda', codigo: '+353', aliases: ['irlanda', 'ireland'] },
  { nombre: 'Islandia', codigo: '+354', aliases: ['islandia', 'iceland'] },
  { nombre: 'Israel', codigo: '+972', aliases: ['israel'] },
  { nombre: 'Italia', codigo: '+39', aliases: ['italia', 'italy'] },
  { nombre: 'Jamaica', codigo: '+1-876', aliases: ['jamaica'] },
  { nombre: 'Japón', codigo: '+81', aliases: ['japon', 'japan'] },
  { nombre: 'Jordania', codigo: '+962', aliases: ['jordania', 'jordan'] },
  { nombre: 'Kenia', codigo: '+254', aliases: ['kenia', 'kenya'] },
  { nombre: 'Kuwait', codigo: '+965', aliases: ['kuwait'] },
  { nombre: 'Líbano', codigo: '+961', aliases: ['libano', 'lebanon'] },
  { nombre: 'Luxemburgo', codigo: '+352', aliases: ['luxemburgo', 'luxembourg'] },
  { nombre: 'Malasia', codigo: '+60', aliases: ['malasia', 'malaysia'] },
  { nombre: 'Marruecos', codigo: '+212', aliases: ['marruecos', 'morocco'] },
  { nombre: 'México', codigo: '+52', aliases: ['mexico', 'mx'] },
  { nombre: 'Moldavia', codigo: '+373', aliases: ['moldavia', 'moldova'] },
  { nombre: 'Mongolia', codigo: '+976', aliases: ['mongolia'] },
  { nombre: 'Montenegro', codigo: '+382', aliases: ['montenegro'] },
  { nombre: 'Mozambique', codigo: '+258', aliases: ['mozambique'] },
  { nombre: 'Nicaragua', codigo: '+505', aliases: ['nicaragua'] },
  { nombre: 'Nigeria', codigo: '+234', aliases: ['nigeria'] },
  { nombre: 'Noruega', codigo: '+47', aliases: ['noruega', 'norway'] },
  { nombre: 'Nueva Zelanda', codigo: '+64', aliases: ['nueva zelanda', 'new zealand'] },
  { nombre: 'Países Bajos', codigo: '+31', aliases: ['paises bajos', 'netherlands', 'holanda', 'holland'] },
  { nombre: 'Pakistán', codigo: '+92', aliases: ['pakistan'] },
  { nombre: 'Panamá', codigo: '+507', aliases: ['panama'] },
  { nombre: 'Paraguay', codigo: '+595', aliases: ['paraguay'] },
  { nombre: 'Perú', codigo: '+51', aliases: ['peru'] },
  { nombre: 'Polonia', codigo: '+48', aliases: ['polonia', 'poland'] },
  { nombre: 'Portugal', codigo: '+351', aliases: ['portugal'] },
  { nombre: 'Puerto Rico', codigo: '+1-787', aliases: ['puerto rico'] },
  { nombre: 'Reino Unido', codigo: '+44', aliases: ['reino unido', 'uk', 'united kingdom', 'england', 'inglaterra'] },
  { nombre: 'República Checa', codigo: '+420', aliases: ['republica checa', 'czech republic'] },
  { nombre: 'República Dominicana', codigo: '+1-809', aliases: ['republica dominicana', 'dominican republic'] },
  { nombre: 'Rumania', codigo: '+40', aliases: ['rumania', 'romania'] },
  { nombre: 'Rusia', codigo: '+7', aliases: ['rusia', 'russia'] },
  { nombre: 'Senegal', codigo: '+221', aliases: ['senegal'] },
  { nombre: 'Serbia', codigo: '+381', aliases: ['serbia'] },
  { nombre: 'Singapur', codigo: '+65', aliases: ['singapur', 'singapore'] },
  { nombre: 'Sudáfrica', codigo: '+27', aliases: ['sudafrica', 'south africa'] },
  { nombre: 'Suecia', codigo: '+46', aliases: ['suecia', 'sweden'] },
  { nombre: 'Suiza', codigo: '+41', aliases: ['suiza', 'switzerland'] },
  { nombre: 'Tailandia', codigo: '+66', aliases: ['tailandia', 'thailand'] },
  { nombre: 'Turquía', codigo: '+90', aliases: ['turquia', 'turkey'] },
  { nombre: 'Ucrania', codigo: '+380', aliases: ['ucrania', 'ukraine'] },
  { nombre: 'Uruguay', codigo: '+598', aliases: ['uruguay'] },
  { nombre: 'Venezuela', codigo: '+58', aliases: ['venezuela'] },
  { nombre: 'Vietnam', codigo: '+84', aliases: ['vietnam'] },
];

function quitarAcentos(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function buscarPaises(input: string): PaisInfo[] {
  if (!input) return [];
  const lower = quitarAcentos(input.toLowerCase());
  const resultados: PaisInfo[] = [];
  for (let i = 0; i < paisesData.length; i++) {
    const p = paisesData[i];
    const nombreNorm = quitarAcentos(p.nombre.toLowerCase());
    const coincide =
      nombreNorm.startsWith(lower) ||
      p.aliases.some((a) => a.startsWith(lower));
    if (coincide) {
      resultados.push(p);
      if (resultados.length >= 6) break;
    }
  }
  return resultados;
}

interface FormData {
  nombre: string;
  telefono: string;
  pais: string;
  lada: string;
  correo: string;
  modalidad: string;
}

const initialState: FormData = {
  nombre: '',
  telefono: '',
  pais: '',
  lada: '',
  correo: '',
  modalidad: '',
};

interface FormErrors {
  nombre?: string;
  telefono?: string;
  pais?: string;
  correo?: string;
  modalidad?: string;
}

interface BibleStudyFormProps {
  variant?: 'light' | 'dark';
}

export function BibleStudyForm({ variant = 'light' }: BibleStudyFormProps) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorServer, setErrorServer] = useState('');
  const [sugerencias, setSugerencias] = useState<PaisInfo[]>([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const paisRef = useRef<HTMLDivElement>(null);

  const isDark = variant === 'dark';

  const inputBase = 'w-full px-4 py-3 rounded-lg focus:outline-none transition-colors';
  const inputOk = isDark
    ? `${inputBase} bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white`
    : `${inputBase} bg-gray-50 border border-gray-200 focus:border-black`;
  const inputErr = isDark
    ? `${inputBase} bg-white/10 border border-red-400 text-white placeholder-gray-400 focus:border-red-300`
    : `${inputBase} bg-gray-50 border border-red-400 focus:border-red-500`;

  const labelClasses = isDark
    ? 'block text-sm tracking-wide mb-2 text-gray-300'
    : 'block text-sm tracking-wide mb-2';

  const errorClasses = 'text-red-400 text-xs mt-1';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (paisRef.current && !paisRef.current.contains(e.target as Node)) {
        setMostrarSugerencias(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === 'telefono') {
      // Solo dígitos, máximo 15
      const soloDigitos = value.replace(/\D/g, '').slice(0, 15);
      setFormData((prev) => ({ ...prev, telefono: soloDigitos }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Limpiar error del campo que se está editando
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (name === 'pais') {
      const resultados = buscarPaises(value);
      setSugerencias(resultados);
      setMostrarSugerencias(resultados.length > 0);
      // Si borraron el país, limpiar lada
      if (!value) {
        setFormData((prev) => ({ ...prev, lada: '' }));
      }
    }
  }

  function seleccionarPais(pais: PaisInfo) {
    setFormData((prev) => ({ ...prev, pais: pais.nombre, lada: pais.codigo }));
    setMostrarSugerencias(false);
    setSugerencias([]);
    setErrors((prev) => ({ ...prev, pais: undefined }));
  }

  function validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validarFormulario(): FormErrors {
    const e: FormErrors = {};

    if (!formData.nombre.trim()) {
      e.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      e.nombre = 'Escribe tu nombre completo';
    }

    if (!formData.telefono) {
      e.telefono = 'El teléfono es obligatorio';
    } else if (formData.telefono.length < 7) {
      e.telefono = 'El número es muy corto';
    } else if (formData.telefono.length > 15) {
      e.telefono = 'El número es muy largo';
    }

    if (!formData.pais.trim()) {
      e.pais = 'Selecciona un país';
    }

    if (!formData.correo.trim()) {
      e.correo = 'El correo es obligatorio';
    } else if (!validarEmail(formData.correo)) {
      e.correo = 'Escribe un correo válido (ej: tu@correo.com)';
    }

    if (!formData.modalidad) {
      e.modalidad = 'Selecciona una modalidad';
    }

    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorServer('');

    const errores = validarFormulario();
    setErrors(errores);

    // Si hay errores, no enviar
    const tieneErrores = Object.keys(errores).length > 0;
    if (tieneErrores) return;

    setEnviando(true);

    try {
      const telefonoCompleto = formData.lada
        ? `${formData.lada} ${formData.telefono}`
        : formData.telefono;

      const response = await fetch(`${API_URL}/api/estudio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          telefono: telefonoCompleto,
          pais: formData.pais,
          correo: formData.correo.trim(),
          modalidad: formData.modalidad,
        }),
      });

      if (!response.ok) {
        throw new Error('Error del servidor');
      }

      setEnviado(true);
    } catch (err) {
      console.error('Error enviando formulario:', err);
      setErrorServer('Hubo un problema al enviar tu solicitud. Intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-8 rounded-lg text-center ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}
      >
        <CheckCircle2 className={`mx-auto mb-4 ${isDark ? 'text-white' : ''}`} size={40} />
        <h3 className="text-2xl tracking-tight mb-2">Listo</h3>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Tus datos se registraron correctamente. Pronto alguien se comunicará contigo.
          Revisa tu correo para la confirmación.
        </p>
        <button
          onClick={() => {
            setFormData(initialState);
            setErrors({});
            setEnviado(false);
          }}
          className={`mt-6 text-sm tracking-wide underline underline-offset-4 transition-colors ${
            isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'
          }`}
        >
          Enviar otra solicitud
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className={labelClasses}>
            Nombre completo <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? inputErr : inputOk}
            placeholder="Tu nombre"
          />
          {errors.nombre && <p className={errorClasses}>{errors.nombre}</p>}
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className={labelClasses}>
            Correo electrónico <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className={errors.correo ? inputErr : inputOk}
            placeholder="tu@correo.com"
          />
          {errors.correo && <p className={errorClasses}>{errors.correo}</p>}
        </div>

        {/* País */}
        <div ref={paisRef} className="relative">
          <label htmlFor="pais" className={labelClasses}>
            País <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            onFocus={() => {
              if (formData.pais.length > 0) {
                const r = buscarPaises(formData.pais);
                setSugerencias(r);
                setMostrarSugerencias(r.length > 0);
              }
            }}
            autoComplete="off"
            className={errors.pais ? inputErr : inputOk}
            placeholder="Escribe tu país"
          />
          {errors.pais && <p className={errorClasses}>{errors.pais}</p>}
          {mostrarSugerencias && sugerencias.length > 0 && (
            <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {sugerencias.map((pais) => (
                <li key={pais.nombre}>
                  <button
                    type="button"
                    onClick={() => seleccionarPais(pais)}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-800 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span>{pais.nombre}</span>
                    <span className="text-gray-400 text-xs">{pais.codigo}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Teléfono con lada */}
        <div>
          <label htmlFor="telefono" className={labelClasses}>
            Teléfono <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-2">
            <div
              className={`flex-shrink-0 w-20 px-3 py-3 rounded-lg text-center text-sm ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-gray-300'
                  : 'bg-gray-100 border border-gray-200 text-gray-500'
              }`}
            >
              {formData.lada || '—'}
            </div>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={errors.telefono ? inputErr : inputOk}
              placeholder="Número sin lada"
              inputMode="numeric"
            />
          </div>
          {errors.telefono && <p className={errorClasses}>{errors.telefono}</p>}
        </div>
      </div>

      {/* Modalidad */}
      <div>
        <label className={labelClasses}>
          Modalidad de estudio <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {modalidades.map((modalidad) => (
            <button
              key={modalidad.value}
              type="button"
              onClick={() => {
                setFormData((prev) => ({ ...prev, modalidad: modalidad.value }));
                setErrors((prev) => ({ ...prev, modalidad: undefined }));
              }}
              className={`px-4 py-3 rounded-lg text-sm tracking-wide transition-colors ${
                formData.modalidad === modalidad.value
                  ? isDark
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                  : isDark
                    ? 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                    : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {modalidad.label}
            </button>
          ))}
        </div>
        {errors.modalidad && <p className={errorClasses}>{errors.modalidad}</p>}
      </div>

      {/* Error del servidor */}
      {errorServer && (
        <p className="text-red-400 text-sm text-center">{errorServer}</p>
      )}

      {/* Botón enviar */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={enviando}
        className={`w-full px-8 py-4 rounded-lg tracking-wide transition-colors disabled:opacity-40 ${
          isDark
            ? 'bg-white text-black hover:bg-gray-100'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {enviando ? 'Enviando...' : 'Solicitar estudio'}
      </motion.button>
    </form>
  );
}
