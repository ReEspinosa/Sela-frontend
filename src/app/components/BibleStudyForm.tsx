// Formulario de estudio bíblico, usado en Services.
// CAMBIA: dentro de handleSubmit reemplaza el console.log por tu llamada
// real a la API/backend que reciba estas solicitudes (correo, CRM, etc.).

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { lessons } from '../data/lessons';

const modalidades = [
  { value: 'virtual', label: 'Virtual' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'presencial', label: 'Presencial' },
];

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  tema: string;
  modalidad: string;
}

const initialState: FormData = {
  nombre: '',
  correo: '',
  telefono: '',
  tema: '',
  modalidad: '',
};

export function BibleStudyForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [enviado, setEnviado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // CAMBIA: aquí va la llamada real a tu backend.
    console.log('Solicitud de estudio bíblico:', formData);
    setEnviado(true);
  }

  if (enviado) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-gray-50 rounded-lg text-center"
      >
        <CheckCircle2 className="mx-auto mb-4" size={40} />
        <h3 className="text-2xl tracking-tight mb-2">Tu solicitud fue recibida</h3>
        <p className="text-gray-600">
          Muy pronto alguien de nuestro equipo se pondrá en contacto contigo para comenzar tu
          estudio bíblico.
        </p>
        <button
          onClick={() => {
            setFormData(initialState);
            setEnviado(false);
          }}
          className="mt-6 text-sm tracking-wide underline underline-offset-4 hover:text-gray-600 transition-colors"
        >
          Enviar otra solicitud
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm tracking-wide mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="correo" className="block text-sm tracking-wide mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          placeholder="tu@correo.com"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm tracking-wide mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          placeholder="10 dígitos"
        />
      </div>

      <div>
        <label className="block text-sm tracking-wide mb-2">Tema de interés</label>
        <Select
          value={formData.tema}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, tema: value }))}
        >
          <SelectTrigger className="w-full bg-gray-50 border-gray-200 py-6">
            <SelectValue placeholder="Elige un tema" />
          </SelectTrigger>
          <SelectContent>
            {lessons.map((lesson) => (
              <SelectItem key={lesson.number} value={lesson.title}>
                {lesson.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm tracking-wide mb-2">Modalidad de estudio</label>
        <div className="grid grid-cols-3 gap-3">
          {modalidades.map((modalidad) => (
            <button
              key={modalidad.value}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, modalidad: modalidad.value }))}
              className={`px-4 py-3 rounded-lg text-sm tracking-wide transition-colors ${
                formData.modalidad === modalidad.value
                  ? 'bg-black text-white'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {modalidad.label}
            </button>
          ))}
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={!formData.tema || !formData.modalidad}
        className="w-full px-8 py-4 bg-black text-white rounded-lg tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-40"
      >
        Solicitar estudio
      </motion.button>
    </form>
  );
}
