// Iglesias de ejemplo para el buscador. CAMBIA: reemplaza con datos reales
// o conecta este archivo a una API/base de datos cuando la tengas lista.

export interface Church {
  id: string;
  name: string;
  city: string;
  address: string;
  schedule: string;
  phone: string;
}

export const churches: Church[] = [
  {
    id: 'iglesia-central-cdmx',
    name: 'Iglesia Adventista Central',
    city: 'Ciudad de México',
    address: 'Av. Insurgentes Sur 123, Col. Roma Norte, CDMX',
    schedule: 'Escuela Sabática 9:00 am · Culto Divino 11:00 am',
    phone: '55 1234 5678',
  },
  {
    id: 'iglesia-coyoacan',
    name: 'Iglesia Adventista Coyoacán',
    city: 'Ciudad de México',
    address: 'Calle Higuera 45, Col. Del Carmen, Coyoacán, CDMX',
    schedule: 'Escuela Sabática 9:30 am · Culto Divino 11:00 am',
    phone: '55 8765 4321',
  },
  {
    id: 'iglesia-guadalajara-centro',
    name: 'Iglesia Adventista Guadalajara Centro',
    city: 'Guadalajara',
    address: 'Av. Juárez 890, Col. Centro, Guadalajara, Jalisco',
    schedule: 'Escuela Sabática 9:00 am · Culto Divino 10:45 am',
    phone: '33 2345 6789',
  },
  {
    id: 'iglesia-monterrey-norte',
    name: 'Iglesia Adventista Monterrey Norte',
    city: 'Monterrey',
    address: 'Av. Universidad 456, Col. Mitras Norte, Monterrey, NL',
    schedule: 'Escuela Sabática 9:00 am · Culto Divino 11:00 am',
    phone: '81 3456 7890',
  },
  {
    id: 'iglesia-puebla-centro',
    name: 'Iglesia Adventista Puebla Centro',
    city: 'Puebla',
    address: 'Calle 5 de Mayo 234, Col. Centro Histórico, Puebla',
    schedule: 'Escuela Sabática 9:00 am · Culto Divino 10:30 am',
    phone: '222 345 6789',
  },
];
