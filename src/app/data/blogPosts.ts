export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'como-empezar-a-leer-la-biblia',
    title: 'Cómo empezar a leer la Biblia sin perderte',
    excerpt:
      'Si nunca has leído la Biblia completa, este es un plan sencillo para empezar sin sentirte abrumado.',
    content: `Abrir la Biblia por primera vez puede sentirse abrumador: 66 libros, miles de años de historia, géneros literarios distintos. Aquí una forma simple de empezar.

## Empieza por los evangelios

Mateo, Marcos, Lucas y Juan cuentan la vida de Jesús desde distintos ángulos. Son el mejor punto de partida porque presentan el centro de la fe cristiana.

## Lee un poco cada día

No se trata de terminar rápido, sino de ser constante. Quince minutos al día son suficientes para avanzar sin presión.

## Usa el Asistente Bíblico

Cuando encuentres un pasaje difícil de entender, puedes preguntarle directamente al Asistente Bíblico del sitio. Está diseñado para ayudarte a entender el contexto sin perder tiempo buscando en distintas fuentes.

Leer la Biblia es una disciplina que se construye con el tiempo, no una meta que se cumple en una semana.`,
    image:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    author: 'Fe Sin Filtros',
    date: '2026-06-15',
    category: 'Vida cristiana',
    readTime: '5 min de lectura',
    featured: true,
    trending: true,
  },
  {
    id: 'preguntas-frecuentes-sabado',
    title: 'Las preguntas más comunes sobre el sábado',
    excerpt:
      'Recopilamos las dudas que más nos hacen sobre el sábado como día de reposo y respondemos cada una con base bíblica.',
    content: `Cada vez que hablamos del sábado surgen las mismas preguntas. Aquí las respondemos de forma directa.

## ¿No cambió el día de reposo al domingo?

No hay ningún mandato bíblico que ordene ese cambio. El domingo se popularizó por tradición histórica, no por instrucción de la Escritura.

## ¿No estamos bajo la gracia y no la ley?

Estar bajo gracia no elimina la ley de Dios, la cumple desde el corazón (Romanos 3:31).

## ¿Qué se puede y qué no se puede hacer en sábado?

Más que una lista de prohibiciones, el sábado es una invitación a descansar del trabajo cotidiano y dedicar el día a la comunión con Dios y la familia.

Si tienes más preguntas, el Asistente Bíblico puede ayudarte a profundizar en cualquiera de estos puntos.`,
    image:
      'https://images.unsplash.com/photo-1495197359483-d092478c170a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    author: 'Fe Sin Filtros',
    date: '2026-06-08',
    category: 'Preguntas frecuentes',
    readTime: '6 min de lectura',
    trending: true,
  },
  {
    id: 'como-elegir-una-iglesia',
    title: 'Cómo dar el paso de visitar una iglesia por primera vez',
    excerpt:
      'Si nunca has ido a una iglesia adventista, esto es lo que puedes esperar la primera vez.',
    content: `Visitar una iglesia por primera vez puede generar nervios. Esto es lo que normalmente encontrarás en una iglesia adventista un sábado por la mañana.

## Escuela Sabática

Es un espacio de estudio en grupos pequeños, organizado por edades, donde se estudia un tema bíblico específico cada semana.

## Culto Divino

Después sigue el servicio principal: alabanza, oración, un mensaje basado en la Biblia y comunión.

## Nadie te va a presionar

No necesitas saber cantar los himnos, vestir de cierta forma o conocer toda la Biblia para asistir. Vas a ser bienvenido tal como estás.

Si quieres encontrar la iglesia adventista más cercana a tu domicilio, puedes usar el buscador en la sección Nosotros.`,
    image:
      'https://images.unsplash.com/photo-1438032005730-c779502df39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    author: 'Fe Sin Filtros',
    date: '2026-05-28',
    category: 'Vida cristiana',
    readTime: '4 min de lectura',
  },
  {
    id: 'elena-white-quien-fue',
    title: 'Quién fue Elena G. de White y por qué se le cita tanto',
    excerpt:
      'Sus escritos acompañan el estudio bíblico adventista desde hace más de un siglo. Esto es lo que debes saber.',
    content: `Elena G. de White (1827-1915) fue una de las fundadoras de la Iglesia Adventista del Séptimo Día. Sus escritos se consideran un consejo inspirado, nunca al mismo nivel que la Biblia.

## No reemplaza a la Biblia

Ella misma escribió que sus escritos son "una luz menor" que dirige a "la luz mayor", la Biblia.

## Temas que abordó

Escribió sobre vida cristiana, salud, educación, profecía y la vida de Cristo. Libros como "El Deseado de todas las gentes" o "El Camino a Cristo" siguen siendo ampliamente leídos.

## Dónde leerla

Puedes encontrar varios de sus libros de forma gratuita en la biblioteca digital de este sitio.`,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    author: 'Fe Sin Filtros',
    date: '2026-05-14',
    category: 'Doctrina',
    readTime: '7 min de lectura',
    trending: true,
  },
  {
    id: 'testimonio-encontrar-comunidad',
    title: 'Testimonio: cómo encontré una comunidad después de años de buscar respuestas',
    excerpt:
      'Un testimonio real de alguien que llegó a la fe adventista después de un largo proceso de preguntas.',
    content: `Durante años tuve preguntas que nadie parecía responder con calma: qué pasa después de la muerte, por qué hay tanto sufrimiento, si de verdad Dios tiene un plan.

Encontré respuestas estudiando la Biblia directamente, sin intermediarios que suavizaran lo que dice. Eso me llevó a entender doctrinas como el estado de los muertos y el sábado de una forma que finalmente tenía sentido.

Lo que más agradezco fue encontrar una comunidad que no exige perfección, sino que acompaña el proceso. Si estás en un momento de búsqueda similar, no tienes que recorrerlo solo.`,
    image:
      'https://images.unsplash.com/photo-1523803326055-13445f07547f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    author: 'Testimonio de la comunidad',
    date: '2026-04-30',
    category: 'Testimonios',
    readTime: '5 min de lectura',
    featured: true,
  },
];
