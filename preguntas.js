// Bancos de preguntas, uno por sesión.
// Cada pregunta: texto, 4 opciones y el índice de la correcta (0 = A, 1 = B, 2 = C, 3 = D).
// La respuesta correcta NUNCA se sube a la base de datos hasta que el profesor la revela.
// Para agregar una sesión, copia un bloque y cambia id, titulo y preguntas.

export const BANCOS = [
  {
    id: "s1-practica",
    titulo: "Sesión 1 · Ronda de práctica (no cuenta)",
    preguntas: [
      {
        texto: "¿Qué país tiene más hablantes nativos de español en el mundo?",
        opciones: ["España", "México", "Colombia", "Estados Unidos"],
        correcta: 1
      },
      {
        texto: "¿Cuántos estados tiene México, sin contar a la Ciudad de México?",
        opciones: ["30", "31", "32", "33"],
        correcta: 1
      },
      {
        texto: "¿Cuál es la capital de Australia?",
        opciones: ["Sídney", "Melbourne", "Canberra", "Perth"],
        correcta: 2
      },
      {
        texto: "¿Cuál es el planeta con la temperatura superficial más alta del sistema solar?",
        opciones: ["Mercurio", "Venus", "Marte", "Júpiter"],
        correcta: 1
      },
      {
        texto: "¿La Gran Muralla China se puede ver a simple vista desde la Luna?",
        opciones: ["Sí, siempre", "Sí, pero solo de noche", "No", "Solo con el cielo despejado"],
        correcta: 2
      }
    ]
  }
];
