Ejercicio Práctico -Adivinar el número:

Adivina el número (1–10) — Juego con validación y control de intentos
Objetivo e introducción:

Desarrollarás un mini-juego en JavaScript donde el computador elige un número aleatorio del 1 al 10 y el usuario debe adivinarlo en 3 intentos. Practicarás funciones, validación de entrada, uso de Math.random() / Math.floor(), control de intentos y prevención de números repetidos.

Descripción de la tarea (práctica guiada):

Estructura del proyecto

Crea una carpeta del ejercicio con:

index.html (estructura básica HTML + <script src="app.js"></script>).

app.js (toda la lógica del juego).

Número aleatorio (1–10) generado por el computador

En app.js, genera un número entero entre 1 y 10:

const secreto = Math.floor(Math.random() * 10) + 1;
(No lo muestres al usuario 😄).

Reglas del juego:

El usuario tiene 3 oportunidades para adivinar.

Restringe la entrada a valores 1..10 (repite la solicitud hasta que esté en rango).

No permitas números repetidos: si ingresa uno ya usado, advierte y deja reintentar sin gastar intento.

Función para detectar números repetidos

Crea una función que reciba el número y el arreglo de intentos previos y retorne true/false:

function yaUsado(numero, lista) {
  return lista.includes(numero);
}
Flujo sugerido:

Guarda los intentos en un arreglo usados = [].

Mientras queden intentos:

Pide un número con prompt(), conviértelo a entero con parseInt().

Si no está entre 1 y 10 → muestra mensaje y vuelve a pedir (no gastar intento).

Si ya fue usado → muestra mensaje y vuelve a pedir (no gastar intento).

Agrégalo a usados.

Compara con secreto:

Si acierta → alert("¡Adivinaste!") y termina.

Si no acierta → informa intentos restantes.

Si se acaban los 3 intentos → alert("Sin aciertos. El número era: X").

Salidas mínimas:

Usa alert() para mensajes clave (acierto, error, repetido, fuera de rango).

Usa console.log() para traza de depuración (opcional).

Muestra el historial de intentos en la página (por ejemplo, dentro de un <div id="historial">).

Pistas técnicas

Validación de rango: if (isNaN(n) || n < 1 || n > 10) { ... }

Evitar repetir intento si la entrada no es válida o ya usada (no reduzcas el contador en esos casos).

Para mostrar en la página:

document.getElementById('historial').innerHTML = `Intentos: ${usados.join(', ')}`;

Criterios de logro:

Función yaUsado() o equivalente para detectar repetidos.

Validación de entrada 1..10 con reintento sin gastar intento.

Límite de 3 intentos efectivos.

Uso correcto de Math.random() y Math.floor().

Mensajería clara (acierto, fallas, repetido, fuera de rango, fin de juego).

Historial de intentos en la página (mínimo básico).
