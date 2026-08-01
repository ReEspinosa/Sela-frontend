// Contenido de la investigación "Fe de Jesús", basada en Apocalipsis 14:12.
// CAMBIA: agrega, edita o quita artículos y videos aquí. El id se usa en la URL (/work/:id).

export interface FaithArticle {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface FaithVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
  embedUrl?: string; // CAMBIA: pon aquí la URL de embed de YouTube/Vimeo cuando exista
}

export const faithArticles: FaithArticle[] = [
  {
    id: 'que-es-la-fe-de-jesus',
    title: 'Qué significa guardar la fe de Jesús',
    tag: 'Doctrina',
    readTime: '6 min de lectura',
    image:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt:
      'Apocalipsis 14:12 describe a un pueblo que guarda los mandamientos de Dios y la fe de Jesús. Qué significa esto en la práctica.',
    content: `Apocalipsis 14:12 dice: "Aquí está la paciencia de los santos, los que guardan los mandamientos de Dios y la fe de Jesús."

Este versículo describe dos características que van juntas: la obediencia a la ley de Dios y una fe personal en Jesucristo. No son dos caminos distintos, sino uno solo: una vida transformada por la gracia que se expresa en obediencia amorosa.

Guardar la fe de Jesús no es una lista de reglas. Es confiar en su carácter, su sacrificio en la cruz y su ministerio actual como sumo sacerdote. Esa confianza produce, de manera natural, el deseo de vivir como él vivió.

Por eso este versículo se ha convertido en la identidad de un pueblo que espera la segunda venida de Cristo con paciencia, mientras vive hoy conforme a lo que cree.`,
  },
  {
    id: 'el-sabado-senal-de-lealtad',
    title: 'El sábado como señal de lealtad a Dios',
    tag: 'Sábado',
    readTime: '7 min de lectura',
    image:
      'https://images.unsplash.com/photo-1495197359483-d092478c170a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt:
      'Antes de que existiera cualquier nación o religión organizada, Dios ya había apartado un día. Por qué el sábado sigue siendo relevante hoy.',
    content: `El sábado nace en Génesis 2:1-3, en el mismo momento de la creación, mucho antes de que existiera Israel como nación. Dios bendijo el séptimo día y lo santificó, es decir, lo apartó para un propósito especial.

El cuarto mandamiento (Éxodo 20:8-11) no introduce el sábado, lo recuerda. Jesús mismo guardó el sábado "como era su costumbre" (Lucas 4:16), y enseñó que fue hecho para el bien del ser humano, no como una carga.

Guardar el sábado hoy es una forma de recordar quién es el Creador, descansar del trabajo que nos consume, y declarar que nuestra identidad no depende de lo que producimos, sino de quien nos hizo.`,
  },
  {
    id: 'que-pasa-despues-de-morir',
    title: 'Qué dice la Biblia sobre la muerte',
    tag: 'Escatología',
    readTime: '8 min de lectura',
    image:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt:
      'La Biblia describe la muerte como un sueño, no como el paso inmediato a otro lugar. Qué implica esto para la esperanza cristiana.',
    content: `Eclesiastés 9:5 es directo: "los muertos nada saben". La Biblia describe repetidamente la muerte como un sueño (Juan 11:11-14, 1 Tesalonicenses 4:13-14), del cual solo se despierta en la resurrección.

Esto cambia por completo el enfoque de la esperanza cristiana. No se trata de "ir a un lugar mejor" al morir, sino de esperar el regreso de Cristo, cuando "los muertos en Cristo resucitarán primero" (1 Tesalonicenses 4:16).

Lejos de ser una doctrina fría, esta enseñanza es un consuelo: nadie sufre en el estado de muerte, y el reencuentro con los seres queridos que murieron en la fe ocurrirá en la resurrección, no antes.`,
  },
  {
    id: 'salvacion-por-gracia',
    title: 'Salvación por gracia, no por méritos',
    tag: 'Salvación',
    readTime: '6 min de lectura',
    image:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt:
      'Efesios 2:8-9 es claro: la salvación es un regalo, no un salario. Entonces, por qué la obediencia sigue importando.',
    content: `"Porque por gracia sois salvos, por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe" (Efesios 2:8-9).

La salvación no se gana. Se recibe. Ningún esfuerzo humano puede pagar el precio del pecado; solo la muerte de Cristo en la cruz lo logró.

Entonces, por qué seguir la ley de Dios importa. No como condición para ser salvos, sino como respuesta de amor. Santiago 2:17 lo resume: "la fe, si no tiene obras, es muerta en sí misma". La obediencia no compra la salvación, la demuestra.`,
  },
  {
    id: 'bautismo-pacto-publico',
    title: 'El bautismo como pacto público',
    tag: 'Bautismo',
    readTime: '5 min de lectura',
    image:
      'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt:
      'El bautismo por inmersión representa morir a la vida anterior y resucitar a una vida nueva en Cristo.',
    content: `Romanos 6:4 describe el bautismo así: "somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos... así también nosotros andemos en vida nueva".

Por eso el bautismo bíblico es por inmersión completa, no por aspersión: representa una sepultura y una resurrección, no solo una limpieza simbólica.

Es también una decisión consciente, tomada después de entender y aceptar las enseñanzas de la Biblia (Mateo 28:19-20), no un ritual que se hereda. Es el punto donde una fe personal se vuelve un compromiso público.`,
  },
  {
    id: 'el-cuerpo-templo',
    title: 'El cuerpo como templo del Espíritu',
    tag: 'Estilo de Vida',
    readTime: '6 min de lectura',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    excerpt:
      '1 Corintios 6:19-20 conecta directamente la alimentación y el estilo de vida con la vida espiritual.',
    content: `"¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo?" (1 Corintios 6:19). Cuidar la salud no es una preocupación estética, es una forma de mayordomía.

La Biblia distingue entre alimentos limpios e inmundos desde Levítico 11, y el principio se mantiene relevante: lo que comemos y cómo vivimos afecta nuestra claridad mental y espiritual, no solo nuestro cuerpo.

Esto no busca imponer culpa, sino invitar a una vida equilibrada: descanso, alimentación consciente, ejercicio y confianza en Dios, como parte integral de seguir a Cristo.`,
  },
];

export const faithVideos: FaithVideo[] = [
  {
    id: 'video-fe-de-jesus-intro',
    title: 'Fe de Jesús: introducción a la serie',
    duration: '9:12',
    thumbnail:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Un primer acercamiento a Apocalipsis 14:12 y a lo que significa esta investigación.',
  },
  {
    id: 'video-sabado-explicado',
    title: 'El sábado explicado en 10 minutos',
    duration: '10:04',
    thumbnail:
      'https://images.unsplash.com/photo-1495197359483-d092478c170a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'De dónde viene el sábado y por qué sigue vigente hoy.',
  },
  {
    id: 'video-que-pasa-al-morir',
    title: 'Qué le pasa a una persona al morir',
    duration: '11:47',
    thumbnail:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Un recorrido bíblico por el estado de los muertos y la esperanza de la resurrección.',
  },
  {
    id: 'video-segunda-venida',
    title: 'Señales de la segunda venida',
    duration: '13:20',
    thumbnail:
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Qué dijo Jesús que sucedería antes de su regreso, y en qué punto estamos.',
  },
];
