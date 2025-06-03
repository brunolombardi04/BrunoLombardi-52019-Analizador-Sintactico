// Función factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función main
function main() {
    let num = 5;
    let result = factorial(num);
    console.log(`El factorial de ${num} es: ${result}`);
    let i = 1;
    let sum = 0;
    while (i <= num) {
        sum = sum + i;
        i = i + 1;
    }
    console.log(`La suma de 1 a ${num} es: ${sum}`);
    return 0;
}

// Ejecutar el programa automáticamente
try {
    main();
} catch (error) {
    console.error("Error al ejecutar el programa:", error);
}