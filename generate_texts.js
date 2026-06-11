const fs = require('fs');

const fileContent = fs.readFileSync('F:/DACTILOGRAFIA/MecaWeb/textos.js', 'utf8');
const examenesIndex = fileContent.indexOf('const examenes = [');
let leccionesStr = fileContent.substring(0, examenesIndex);

const leccionesMatch = [...leccionesStr.matchAll(/`([^`]*)`/g)];

// Keep only the first 75 which are keyboard drills
const drills = leccionesMatch.slice(0, 75).map(m => '`' + m[1] + '`');

const newParagraphs = [
  "El Estado Plurinacional de Bolivia es un país situado en el centro-oeste de América del Sur. Cuenta con una gran diversidad geográfica y cultural, abarcando desde la cordillera de los Andes hasta la Amazonía.",
  "El departamento de Santa Cruz es el más extenso y poblado de Bolivia. Es conocido como el motor económico del país, destacando por su producción agrícola, ganadera e industrial, así como por su clima cálido.",
  "La provincia Chiquitos es una de las quince provincias del departamento de Santa Cruz. Su capital es San José de Chiquitos, y es famosa por albergar parte de las misiones jesuíticas y un paisaje espectacular.",
  "El municipio de Pailón es considerado la 'Primera Puerta de la Gran Chiquitania'. Se encuentra ubicado en la provincia Chiquitos y es un importante centro agrícola, destacando por sus extensos cultivos de soya y girasol.",
  "Pailón se caracteriza por su gente trabajadora y su rápido crecimiento. El puente que cruza el Río Grande es un punto clave que conecta a Pailón con la ciudad de Santa Cruz de la Sierra y el resto del occidente boliviano.",
  "El CEA Herman Ortiz Camargo es una institución educativa comprometida con la formación integral de jóvenes y adultos en el municipio de Pailón. Su labor es fundamental para el desarrollo humano de la región chiquitana.",
  "A través del CEA Herman Ortiz Camargo, muchos estudiantes logran adquirir habilidades técnicas y humanísticas. Esta institución se ha convertido en un pilar de la educación alternativa y de la capacitación profesional.",
  "El profesor Herman Ortiz Camargo dejó un legado imborrable en la educación de la zona. El centro que lleva su nombre honra su dedicación y esfuerzo continuo por brindar oportunidades de aprendizaje a todos por igual.",
  "EduConnectRuben es una iniciativa innovadora enfocada en la integración de la tecnología y la educación. Busca potenciar el aprendizaje mediante el uso de herramientas digitales modernas y accesibles para los estudiantes.",
  "Con el apoyo de proyectos como EduConnectRuben, la enseñanza en lugares como Pailón da un salto hacia el futuro. Los estudiantes aprenden mecanografía, informática y habilidades digitales indispensables en la actualidad.",
  "Aprender mecanografía computarizada es un paso esencial para cualquier estudiante. Nos permite escribir con mayor rapidez, precisión y eficiencia, abriendo puertas a nuevas oportunidades laborales y académicas.",
  "En Santa Cruz y toda Bolivia, la educación técnica es una herramienta poderosa. Permite que jóvenes y adultos de diversas comunidades puedan emprender, mejorar sus ingresos y contribuir al progreso de su municipio.",
  "La región de la Chiquitania no solo es rica en cultura e historia, sino que también tiene un enorme potencial humano. La capacitación constante es la llave para aprovechar los recursos y construir un futuro próspero.",
  "Cada tecla que presionamos al practicar nos acerca más a dominar la computadora. En el CEA Herman Ortiz Camargo, la práctica constante y la perseverancia son valores fundamentales para alcanzar el éxito profesional.",
  "Invitamos a todos los estudiantes de Pailón y de la provincia Chiquitos a seguir aprendiendo. El conocimiento es el único tesoro que nadie nos puede quitar y que crece cada vez que lo compartimos con los demás."
];

const newExamenes = [
  "El municipio de Pailón, conocido como la Primera Puerta de la Gran Chiquitania, es un centro neurálgico de la producción agrícola en Santa Cruz. Su desarrollo es un ejemplo del empuje de la región oriental de Bolivia.",
  "El CEA Herman Ortiz Camargo brinda educación de calidad a jóvenes y adultos en Pailón. Instituciones como esta son vitales para garantizar que toda la población tenga acceso a oportunidades de formación técnica.",
  "Gracias a iniciativas tecnológicas como EduConnectRuben, los estudiantes bolivianos pueden familiarizarse con el uso de herramientas digitales avanzadas, preparándose para los grandes desafíos del mundo laboral moderno.",
  "La mecanografía es fundamental para interactuar con fluidez en el entorno digital. Un buen dominio del teclado incrementa significativamente la productividad tanto en el ámbito educativo como en el profesional."
];

let out = `const lecciones = [\n`;
out += drills.join(',\n');
out += ',\n';
out += newParagraphs.map(p => '`' + p + '`').join(',\n');
out += `\n];\n\n`;

out += `const examenes = [\n`;
out += newExamenes.map(e => '`' + e + '`').join(',\n');
out += `\n];\n\n`;

// Also overwrite textosGrandes
const textosGrandes = [
  "El departamento de Santa Cruz es el motor económico de Bolivia. Ubicado en el corazón de Sudamérica, su vasto territorio abarca llanuras, selvas amazónicas y la región de la Chiquitania. Dentro de este departamento, la provincia Chiquitos destaca por su rica historia, sus impresionantes misiones jesuíticas y su enorme potencial agropecuario. El municipio de Pailón, situado a orillas del Río Grande, es conocido como la Primera Puerta de la Gran Chiquitania y es un símbolo del trabajo constante de su gente, con grandes extensiones de cultivos de soya, sorgo y girasol que impulsan la economía local y nacional.",
  "La educación es el pilar del desarrollo de cualquier municipio, y en Pailón, el Centro de Educación Alternativa (CEA) Herman Ortiz Camargo juega un rol insustituible. Esta noble institución se dedica a la formación de jóvenes y adultos, brindándoles herramientas técnicas y humanísticas que les permiten acceder a mejores oportunidades laborales. El nombre del centro rinde homenaje al profesor Herman Ortiz Camargo, cuyo legado de servicio y vocación educadora sigue inspirando a las nuevas generaciones a superarse día a día mediante el estudio y la capacitación técnica.",
  "En la era de la información, el manejo fluido de las computadoras es una habilidad obligatoria. Proyectos educativos como EduConnectRuben nacen con la visión de cerrar la brecha digital y acercar la tecnología a todos los estudiantes. A través de la enseñanza de mecanografía computarizada y ofimática, EduConnectRuben busca empoderar a los alumnos del CEA Herman Ortiz Camargo y de toda la provincia Chiquitos, dotándolos de las competencias necesarias para triunfar en un mundo globalizado y cada vez más competitivo."
];

out += `const textosGrandes = [\n`;
out += textosGrandes.map(t => '`' + t + '`').join(',\n');
out += `\n];\n`;

fs.writeFileSync('F:/DACTILOGRAFIA/MecaWeb/textos.js', out, 'utf8');
console.log('Successfully updated textos.js');
