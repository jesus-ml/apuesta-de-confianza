// Bancos de preguntas, uno por sesión.
// Cada pregunta: texto, 4 opciones, el índice de la correcta (0 = A, 1 = B, 2 = C, 3 = D)
// y una explicación breve que se muestra al revelar.
// La respuesta correcta y la explicación NUNCA se suben a la base de datos hasta que el profesor revela.
// "etiqueta", "titulo" y "nota" se muestran en la tarjeta del banco; "segundos" es el tiempo sugerido por pregunta.

export const BANCOS = [
  {
    id: "s1-razonamiento",
    etiqueta: "Sesión 1",
    titulo: "¿Piensas o reaccionas?",
    nota: "Ronda de práctica con trampas de razonamiento. No cuenta para la calificación.",
    segundos: 60,
    preguntas: [
      {
        texto: "En un lago hay un parche de lirios que duplica su tamaño cada día. Si tarda 48 días en cubrir todo el lago, ¿cuántos días tarda en cubrir la mitad?",
        opciones: ["24 días", "47 días", "36 días", "12 días"],
        correcta: 1,
        explicacion: "Si se duplica cada día, un día antes de cubrir todo el lago cubría la mitad: día 47. El «24» es la respuesta del Sistema 1, que divide entre 2 sin pensar en el crecimiento."
      },
      {
        texto: "Si 5 máquinas hacen 5 piezas en 5 minutos, ¿cuánto tardan 100 máquinas en hacer 100 piezas?",
        opciones: ["100 minutos", "5 minutos", "20 minutos", "1 minuto"],
        correcta: 1,
        explicacion: "Cada máquina tarda 5 minutos en hacer una pieza. 100 máquinas trabajando al mismo tiempo hacen 100 piezas en esos mismos 5 minutos. El patrón «5-5-5 → 100-100-100» es una trampa."
      },
      {
        texto: "Mariana tiene 31 años, estudió Ciencias Políticas y va a marchas por el medio ambiente. ¿Qué es más probable?",
        opciones: ["Que sea cajera de banco", "Que sea cajera de banco y activista ambiental", "Las dos son igual de probables", "No se puede comparar"],
        correcta: 0,
        explicacion: "Toda cajera activista es cajera, así que «cajera y activista» nunca puede ser más probable que «cajera». La descripción nos hace imaginar a una activista y olvidamos las probabilidades: es la falacia de la conjunción (Tversky y Kahneman)."
      },
      {
        texto: "Una enfermedad afecta a 1 de cada 1,000 personas. Una prueba detecta a todos los enfermos, pero da positivo por error al 5 % de los sanos. Si alguien da positivo, ¿cuál es la probabilidad aproximada de que esté enfermo?",
        opciones: ["95 %", "50 %", "Cerca de 2 %", "5 %"],
        correcta: 2,
        explicacion: "En 1,000 personas: 1 enferma da positivo y unas 50 sanas también dan positivo por error. De 51 positivos, solo 1 está enfermo: cerca de 2 %. Olvidar qué tan rara es la enfermedad se llama ignorar la tasa base."
      },
      {
        texto: "Hay cuatro tarjetas: A, K, 4 y 7. Cada una tiene una letra de un lado y un número del otro. Regla: «si una tarjeta tiene vocal, del otro lado tiene número par». ¿Cuáles debes voltear, como mínimo, para comprobar la regla?",
        opciones: ["A y 4", "A y 7", "Solo la A", "A, 4 y 7"],
        correcta: 1,
        explicacion: "La A podría tener un impar atrás, y el 7 podría tener una vocal atrás: esas dos pueden romper la regla. El 4 no prueba nada, porque la regla no dice qué hay detrás de un par. Elegir el 4 es buscar confirmar en vez de buscar refutar (tarea de Wason)."
      },
      {
        texto: "«Todas las flores necesitan agua. Las rosas necesitan agua. Por lo tanto, las rosas son flores.» ¿Qué opinas del argumento?",
        opciones: ["Es válido", "La conclusión es verdadera, pero no se sigue de las premisas", "Es válido porque la conclusión es verdadera", "No es válido porque una premisa es falsa"],
        correcta: 1,
        explicacion: "Con la misma forma: «Todas las flores necesitan agua. Los perros necesitan agua. Por lo tanto, los perros son flores». Que la conclusión sea cierta no hace válido el argumento. Confundir «me parece cierto» con «está bien razonado» es el sesgo de creencia."
      }
    ]
  },
  {
    id: "s1-cultura",
    etiqueta: "Calentamiento",
    titulo: "Cultura general",
    nota: "Cinco preguntas ligeras para abrir la clase. No cuenta para la calificación.",
    segundos: 40,
    preguntas: [
      {
        texto: "¿Qué país tiene más hablantes nativos de español en el mundo?",
        opciones: ["España", "México", "Colombia", "Estados Unidos"],
        correcta: 1,
        explicacion: "México, con mucha diferencia: tiene más del doble de población que España."
      },
      {
        texto: "¿Cuántos estados tiene México, sin contar a la Ciudad de México?",
        opciones: ["30", "31", "32", "33"],
        correcta: 1,
        explicacion: "31 estados más la Ciudad de México forman las 32 entidades federativas. Por eso tantos dicen «32»."
      },
      {
        texto: "¿Cuál es la capital de Australia?",
        opciones: ["Sídney", "Melbourne", "Canberra", "Perth"],
        correcta: 2,
        explicacion: "Canberra. Sídney es la ciudad más conocida, y lo más conocido se nos viene a la mente como si fuera lo correcto (heurística de disponibilidad)."
      },
      {
        texto: "¿Cuál es el planeta con la temperatura superficial más alta del sistema solar?",
        opciones: ["Mercurio", "Venus", "Marte", "Júpiter"],
        correcta: 1,
        explicacion: "Venus: su atmósfera atrapa el calor. Mercurio está más cerca del Sol, y «más cerca = más caliente» suena lógico, pero no lo es."
      },
      {
        texto: "¿La Gran Muralla China se puede ver a simple vista desde la Luna?",
        opciones: ["Sí, siempre", "Sí, pero solo de noche", "No", "Solo con el cielo despejado"],
        correcta: 2,
        explicacion: "No. Es larga pero muy angosta. Es un mito que se repite tanto que parece verdad."
      }
    ]
  }
];
