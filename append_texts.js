const fs = require('fs');

const content = fs.readFileSync('F:/DACTILOGRAFIA/MecaWeb/textos.js', 'utf8');

// Find the end of lecciones array
const endLecciones = content.indexOf('];', content.indexOf('const lecciones = ['));

const newText = `,
  "La mecanografía no solo mejora la velocidad al escribir, sino que también estimula la coordinación motriz y la concentración. En Pailón, los estudiantes están descubriendo cómo esta habilidad transforma su manera de trabajar y aprender.",
  "Cada día, los profesores del CEA Herman Ortiz Camargo dedican su tiempo a enseñar con paciencia y dedicación. Ellos saben que la educación es la herramienta más poderosa para cambiar el mundo y mejorar la vida de las personas.",
  "El desarrollo tecnológico en Santa Cruz ha impulsado a muchas comunidades a modernizarse. Hoy en día, saber manejar una computadora es tan importante como saber leer y escribir, abriendo puertas a empleos en todo el país.",
  "EduConnectRuben se enfoca en crear soluciones educativas que se adapten a la realidad de cada estudiante. Con un enfoque práctico y ameno, busca que el aprendizaje de la informática sea una experiencia positiva y enriquecedora.",
  "La provincia Chiquitos es rica en historia, pero también en futuro. Sus jóvenes, armados con conocimiento tecnológico, están listos para llevar el desarrollo a sus hogares y convertirse en líderes dentro de sus propias comunidades.",
  "Practicar al menos veinte minutos diarios de mecanografía garantiza resultados notables en pocas semanas. La memoria muscular se desarrolla gradualmente hasta que los dedos encuentran las teclas de forma completamente automática.",
  "La perseverancia es la clave del éxito. Al principio, escribir sin mirar el teclado puede parecer un desafío imposible, pero con cada lección superada, la confianza aumenta y la velocidad fluye de manera natural.",
  "En un mundo hiperconectado, la comunicación escrita digital es la forma principal de interacción. Dominar el teclado nos permite expresar nuestras ideas con claridad y rapidez, sin que la tecnología sea un obstáculo.",
  "El municipio de Pailón es un ejemplo de progreso y superación constante. Las iniciativas educativas que aquí se desarrollan son un modelo a seguir para otras regiones que buscan fortalecer la educación técnica alternativa.",
  "Felicitaciones por llegar a este nivel avanzado de mecanografía. Has demostrado disciplina y constancia. Sigue perfeccionando tu técnica y recuerda que el conocimiento adquirido hoy será tu mayor ventaja el día de mañana."
`;

const newContent = content.slice(0, endLecciones) + newText + content.slice(endLecciones);

fs.writeFileSync('F:/DACTILOGRAFIA/MecaWeb/textos.js', newContent, 'utf8');
console.log("Appended 10 new lessons.");
