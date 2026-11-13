# La apuesta de confianza

Juego en tiempo real para el curso **Desarrollo del Pensamiento Crítico** (Mtro. Jesús Morelos Lozada).
Los alumnos responden preguntas desde su celular y **apuestan qué tan seguros están** (50, 70, 90 o 100 %).
Se califica con la regla de Brier: `puntos = 100 · (1 − (confianza − acierto)²)`.

| Apuesta | Si aciertas | Si fallas |
|---|---|---|
| 50 % | 75 | 75 |
| 70 % | 91 | 51 |
| 90 % | 99 | 19 |
| 100 % | 100 | 0 |

## Páginas

- `index.html` — vista del **alumno** (el enlace que se comparte).
- `profe.html` — **panel del profesor**: crea la partida, lanza preguntas, ve los votos en vivo, revela, muestra el ranking y la curva de calibración, y descarga un CSV.

## Cómo agregar preguntas

Edita `preguntas.js`. Cada banco es una sesión; cada pregunta tiene `texto`, 4 `opciones` y `correcta` (0 = A, 1 = B, 2 = C, 3 = D).
La respuesta correcta solo se sube a la base de datos cuando el profesor la revela.

## Seguridad

- Todos entran con sesión anónima de Firebase; nadie necesita cuenta.
- Solo el navegador que creó la partida puede controlarla (reglas en `database.rules.json`).
- Cada alumno solo puede escribir su propia respuesta, una vez, y solo mientras la pregunta está abierta.
- Un alumno con conocimientos técnicos podría leer las respuestas de los demás desde la consola del navegador: es un juego de clase, no un examen de alto riesgo.

## Si alguien se sale

Desde el mismo celular y navegador basta con volver a entrar: conserva sus puntos. Desde otro dispositivo, entra con el mismo código y el mismo apodo; si su sesión anterior ya está desconectada, recupera su lugar y sus respuestas. Si el apodo está en uso por alguien conectado, el juego no lo deja entrar con ese nombre.
