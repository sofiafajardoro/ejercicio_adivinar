window.alert("Para el conjunto de los enteros. Adivine el número del 1 al 10. Tienes 3 oportunidades");

let numAzar = Math.floor(Math.random() * 10) + 1;

let lista = [];
let acertado = false;

let historialDiv = document.getElementById("historial");

function revisarLista(lista, numero) {
    if (lista.length === 0) {
        lista.push(numero);
        return true;
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            window.alert("Ya ingresaste este número.");
            return false;
        }
        else if (i === (lista.length - 1) && lista[i] !== numero) {
            lista.push(numero);
            return true;
        }
    }
}

for (let i = 1; i <= 3; i++) {
    let verificador = 0;

    while (verificador === 0) {
        let contador = i;
        let numero = parseInt(prompt("Intento número " + contador + ":"));

        if (isNaN(numero) || numero < 1 || numero > 10) {
            window.alert("Debes ingresar un número entre 1 y 10");
            continue;
        }

        if (!revisarLista(lista, numero)) {
            continue;
        }

        historialDiv.innerHTML = `Intentos: ${lista.join(", ")}`;

        if (numero === numAzar) {
            window.alert("¡Has acertado!");
            document.write("¡Ganaste!");
            acertado = true;
            verificador = 1;
        } else {
            window.alert("No has acertado.");
            verificador = 1;
        }
    }

    if (i === 3 && acertado === false) {
        document.write("Se acabaron los intentos<br>");
        document.write("El número era " + numAzar);
    }
}
