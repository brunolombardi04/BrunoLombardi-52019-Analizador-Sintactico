// Función main
function main() {
    let x = 42;
    console.log(`El valor es: ${x}`);
    return 0;
}

// Ejecutar el programa automáticamente
try {
    main();
} catch (error) {
    console.error("Error al ejecutar el programa:", error);
}