// 1. Arreglos y operaciones en Javascript:

// Crear un arreglo con 10 números aleatorios entre 1 y 100. //
function crearArregloAleatorio(cantidad) {
    const arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        arreglo.push(Math.floor(Math.random() * 100) + 1); // Math.random() genera entre 0 (inclusive) y 1 (exclusive)//
    }
    return arreglo;
}

const numerosAleatorios = crearArregloAleatorio(10);
const arrayResultsDiv = document.getElementById('array-results');

// Mostrar el arreglo inicial en la consola del navegador. //
console.log("Arreglo inicial:", numerosAleatorios);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Arreglo inicial:</strong> ${numerosAleatorios}</div>`;

// Calcular la suma de todos los números del arreglo. //
function calcularSuma(arreglo) {
    let suma = 0;
    for (const numero of arreglo) {
        suma += numero;
    }
    return suma;
}

const suma = calcularSuma(numerosAleatorios);
console.log("Suma del arreglo:", suma);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Suma del arreglo:</strong> ${suma}</div>`;

// Calcular el promedio de todos los números del arreglo. //
function calcularPromedio(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }
    const suma = calcularSuma(arreglo);
    return suma / arreglo.length;
}

const promedio = calcularPromedio(numerosAleatorios);
console.log("Promedio del arreglo:", promedio);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Promedio del arreglo:</strong> ${promedio.toFixed(2)}</div>`; // toFixed(2) para mostrar 2 decimales

// Encontrar el número máximo y el número mínimo del arreglo. //
function encontrarMinMax(arreglo) {
    if (arreglo.length === 0) {
        return { min: null, max: null };
    }
    let min = arreglo[0];
    let max = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < min) {
            min = arreglo[i];
        }
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
    }
    return { min, max };
}

const { min, max } = encontrarMinMax(numerosAleatorios);
console.log("Número mínimo:", min);
console.log("Número máximo:", max);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Número mínimo:</strong> ${min}</div>`;
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Número máximo:</strong> ${max}</div>`;

// Eliminar el primer y el último elemento del arreglo. //
const arregloSinExtremos = [...numerosAleatorios]; // Crear una copia para no modificar el original inmediatamente //
arregloSinExtremos.shift(); // Elimina el primer elemento //
arregloSinExtremos.pop();  // Elimina el último elemento //
console.log("Arreglo sin el primer y último elemento:", arregloSinExtremos);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Arreglo sin el primer y último elemento:</strong> ${arregloSinExtremos}</div>`;

// Agregar un nuevo elemento al final del arreglo. //
arregloSinExtremos.push(Math.floor(Math.random() * 100) + 1);
console.log("Arreglo con un nuevo elemento al final:", arregloSinExtremos);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Arreglo con un nuevo elemento al final:</strong> ${arregloSinExtremos}</div>`;

// Ordenar el arreglo de menor a mayor. //
const arregloOrdenadoAscendente = [...arregloSinExtremos];
arregloOrdenadoAscendente.sort((a, b) => a - b); // Función de comparación para orden numérico ascendente //
console.log("Arreglo ordenado de menor a mayor:", arregloOrdenadoAscendente);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Arreglo ordenado de menor a mayor:</strong> ${arregloOrdenadoAscendente}</div>`;

// Invertir el orden del arreglo. //
const arregloInvertido = [...arregloOrdenadoAscendente];
arregloInvertido.reverse();
console.log("Arreglo con el orden invertido:", arregloInvertido);
arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Arreglo con el orden invertido:</strong> ${arregloInvertido}</div>`;

// Mostrar el contenido del arreglo en la consola del navegador, indicando la posición de cada elemento. //
console.log("Contenido del arreglo con su posición:");
arregloInvertido.forEach((elemento, indice) => {
    console.log(`Posición ${indice}: ${elemento}`);
    arrayResultsDiv.innerHTML += `<div class="result-item"><strong>Posición ${indice}:</strong> ${elemento}</div>`;
});

// 2. Diseñar formulario html con validaciones: //
const form = document.getElementById('student-info-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto //
    if (validarFormulario()) {
        // Aquí podrías agregar la lógica para enviar el formulario si es válido //
        alert('Formulario enviado correctamente!');
        form.reset(); // Limpiar el formulario después de un envío exitoso (simulado) //
    }
});

function validarFormulario() {
    // Obtener los valores de los campos //
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const legajo = document.getElementById('legajo').value.trim();
    const email = document.getElementById('email').value.trim();

    // Expresión regular para validar el formato del correo electrónico //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let esValido = true;

    // Validar el campo Nombre //
    if (nombre === '') {
        mostrarError('nombre', 'El nombre es obligatorio.');
        esValido = false;
    } else {
        ocultarError('nombre');
    }

    // Validar el campo Apellido //
    if (apellido === '') {
        mostrarError('apellido', 'El apellido es obligatorio.');
        esValido = false;
    } else {
        ocultarError('apellido');
    }

    // Validar el campo Legajo //
    if (legajo === '') {
        mostrarError('legajo', 'El legajo es obligatorio.');
        esValido = false;
    } else {
        ocultarError('legajo');
    }

    // Validar el campo Correo Electrónico //
    if (email === '') {
        mostrarError('email', 'El correo electrónico es obligatorio.');
        esValido = false;
    } else if (!emailRegex.test(email)) {
        mostrarError('email', 'El formato del correo electrónico no es válido.');
        esValido = false;
    } else {
        ocultarError('email');
    }

    // Calcular el promedio de las notas //
    let sumaNotas = 0;
    let cantidadNotas = 0;
    for (let i = 1; i <= 5; i++) {
        const materia = document.getElementById(`materia${i}`).value.trim();
        const notaInput = document.getElementById(`nota${i}`);
        const nota = notaInput.value;

        if (materia === '') {
            mostrarError(`nota${i}`, `El nombre de la materia ${i} es obligatorio.`);
            esValido = false;
        } else if (nota === '') {
            mostrarError(`nota${i}`, `La nota de la materia ${i} es obligatoria.`);
            esValido = false;
        } else if (isNaN(nota) || parseInt(nota) < 0 || parseInt(nota) > 10) {
            mostrarError(`nota${i}`, 'La nota debe ser un número entre 0 y 10.');
            esValido = false;
        } else {
            ocultarError(`nota${i}`);
            sumaNotas += parseInt(nota);
            cantidadNotas++;
        }
    }

    let promedioFinal = 0;
    if (cantidadNotas === 5) {
        promedioFinal = sumaNotas / cantidadNotas;
    }

    document.getElementById('promedio').value = promedioFinal.toFixed(2);

    return esValido;
}

function mostrarError(campoId, mensaje) {
    const errorDivId = campoId + '-error';
    const errorDiv = document.getElementById(errorDivId);
    if (errorDiv) {
        errorDiv.textContent = mensaje;
    }
}

function ocultarError(campoId) {
    const errorDivId = campoId + '-error';
    const errorDiv = document.getElementById(errorDivId);
    if (errorDiv) {
        errorDiv.textContent = '';
    }
}