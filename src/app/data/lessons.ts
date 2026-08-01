// Las 22 lecciones de la fe adventista, usadas en Services y como
// opciones de "tema de interés" en el formulario de estudio bíblico.
// CAMBIA: edita títulos y descripciones aquí; ambos lugares se actualizan solos.

export interface Lesson {
  number: string;
  title: string;
  description: string;
}

export const lessons: Lesson[] = [
  { number: '01', title: 'La Biblia: la Palabra de Dios', description: 'Por qué confiamos en la Biblia como única regla de fe y práctica.' },
  { number: '02', title: 'La Trinidad', description: 'Quién es Dios: Padre, Hijo y Espíritu Santo.' },
  { number: '03', title: 'El carácter de Dios', description: 'Un Dios de amor, justicia y misericordia.' },
  { number: '04', title: 'La creación', description: 'El origen del mundo según el relato bíblico.' },
  { number: '05', title: 'La naturaleza del ser humano', description: 'Cómo nos describe la Biblia: cuerpo, mente y espíritu.' },
  { number: '06', title: 'El gran conflicto', description: 'La lucha entre el bien y el mal a lo largo de la historia.' },
  { number: '07', title: 'Vida, muerte y resurrección de Cristo', description: 'El centro de la fe cristiana.' },
  { number: '08', title: 'La experiencia de la salvación', description: 'Cómo se recibe la gracia de Dios.' },
  { number: '09', title: 'El crecimiento en Cristo', description: 'Vivir la fe día a día.' },
  { number: '10', title: 'La iglesia y su misión', description: 'Para qué existe la iglesia y cuál es su propósito.' },
  { number: '11', title: 'El bautismo', description: 'Un pacto público de una vida nueva en Cristo.' },
  { number: '12', title: 'El don de profecía', description: 'Cómo Dios ha hablado a su pueblo a través del tiempo.' },
  { number: '13', title: 'La ley de Dios', description: 'Los diez mandamientos y su vigencia hoy.' },
  { number: '14', title: 'El sábado', description: 'El día de reposo que Dios apartó desde la creación.' },
  { number: '15', title: 'La mayordomía cristiana', description: 'Administrar el tiempo, los talentos y los recursos.' },
  { number: '16', title: 'Alimentación, salud y estilo de vida', description: 'El cuerpo como templo del Espíritu Santo.' },
  { number: '17', title: 'El matrimonio y la familia', description: 'El diseño de Dios para las relaciones familiares.' },
  { number: '18', title: 'El ministerio de Cristo en el santuario', description: 'La obra actual de Jesús como sumo sacerdote.' },
  { number: '19', title: 'La segunda venida de Cristo', description: 'La esperanza central de la fe adventista.' },
  { number: '20', title: 'La muerte y la resurrección', description: 'Qué enseña la Biblia sobre el estado de los muertos.' },
  { number: '21', title: 'El milenio y el fin del pecado', description: 'Los mil años y la erradicación final del mal.' },
  { number: '22', title: 'La tierra nueva', description: 'La promesa final: un hogar eterno sin dolor ni muerte.' },
];
