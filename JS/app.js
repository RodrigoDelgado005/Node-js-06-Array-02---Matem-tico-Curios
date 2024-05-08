// Función para calcular la secuencia y obtener su longitud y su máximo
function calcularSecuencia(semilla) {
    let secuencia = [semilla];
    let maximo = semilla;

    while (semilla !== 1) { //continuar si la semilla es diferente de 1
        if (semilla % 2 === 0) { //Verificar si la semilla es par
            semilla /= 2; // Dividir por 2 si es par
        } else {
            semilla = semilla * 3 + 1; 
        }
        secuencia.push(semilla);
        if (semilla > maximo) { //Verifica si la semilla es mayor que el máximo
            maximo = semilla; // Actualiza el maximo
        }
    }

    // Devolver longitud y máximo
    return { 
        longitud: secuencia.length, 
        maximo: maximo 
    };
}

// Obtener la semilla 
const semilla = parseInt(prompt("Ingrese la semilla:"));

// Calcular la secuencia
const resultado = calcularSecuencia(semilla);

// Mostrar resultados
document.getElementById("longitud").innerText = resultado.longitud;
document.getElementById("maximo").innerText = resultado.maximo;

  