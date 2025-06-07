# Analizador C a JavaScript

Este analizador traduce un subconjunto del lenguaje C a JavaScript, utilizando ANTLR4 para el análisis léxico y sintáctico.

## Demostración de Funcionamiento

### Ejemplo 1: Código C válido
```c
// inputs/input2.txt - Ejemplo de factorial y suma
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    int result = factorial(num);
    printf("El factorial de %d es: %d", num, result);
    return 0;
}
```

Salida generada:
```javascript
// Código JavaScript generado
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function main() {
    let num = 5;
    let result = factorial(num);
    console.log(`El factorial de ${num} es: ${result}`);
    return 0;
}

// Ejecución automática
main();  // Output: "El factorial de 5 es: 120"
```

## Requisitos Previos

1. Node.js (v14 o superior)
2. Java Runtime Environment (JRE) para ANTLR4
3. NPM (Node Package Manager)

## Instalación

1. Clonar o descargar este repositorio:
```bash
git clone [url-del-repositorio]
cd analizador-c-js
```

2. Instalar las dependencias:
```bash
npm install
```

3. Verificar Java y descargar ANTLR4:
```bash
# Verificar Java
java -version

# Descargar ANTLR4 si no está presente
curl -O https://www.antlr.org/download/antlr-4.13.1-complete.jar
```

## Uso del Analizador

### Ejecutar el Analizador
```bash
node src/index.js <archivo_entrada>

# Ejemplo:
node src/index.js inputs/input2.txt
```

### Flujo de Ejecución
1. **Análisis Léxico**: Muestra todos los tokens reconocidos
2. **Análisis Sintáctico**: Verifica la estructura del código
3. **Traducción**: Genera código JavaScript equivalente
4. **Ejecución**: Ejecuta automáticamente el código traducido

### Archivos de Entrada de Ejemplo

1. **input1.txt**: Programa simple
```c
int main() {
    int x = 42;
    printf("El valor es: %d", x);
    return 0;
}
```

2. **input2.txt**: Programa con funciones y recursión
```c
// Ver ejemplo completo arriba
```

3. **error1.txt**: Errores léxicos
```c
int main() {
    int x = 42@;  // Error: carácter inválido
    printf("String sin cerrar;  // Error: string mal formado
    return 0;
}
```

4. **error2.txt**: Errores sintácticos
```c
int main {  // Error: faltan paréntesis
    int = 42;  // Error: falta identificador
    if x > 0  // Error: faltan paréntesis
        printf("x es positivo");
    return;
}
```

## Características Soportadas

### Tipos de Datos
- ✅ int → number en JavaScript
- ✅ void para funciones

### Operadores
- ✅ Aritméticos: +, -, *, /
- ✅ Comparación: <, <=, >, >=, ==, !=
- ✅ Asignación: =

### Estructuras de Control
- ✅ if / else
- ✅ while

### Funciones
- ✅ Declaración de funciones
- ✅ Parámetros
- ✅ Retorno de valores
- ✅ Recursión
- ✅ printf → console.log

## Manejo de Errores

### Errores Léxicos
- Caracteres inválidos
- Strings mal formados
- Operadores inválidos

### Errores Sintácticos
- Estructura incorrecta
- Paréntesis/llaves faltantes
- Declaraciones incompletas

### Formato de Errores
```
Errores encontrados:
┌───────┬──────────┬─────────────┐
│ Línea │ Posición │ Mensaje     │
├───────┼──────────┼─────────────┤
│ 2     │ 14       │ Error desc. │
└───────┴──────────┴─────────────┘
```

## Estructura del Proyecto
```
analizador-c-js/
├── src/
│   ├── index.js          # Punto de entrada
│   ├── CToJSVisitor.js   # Traductor a JavaScript
│   └── parser/           # Archivos generados
├── grammar/
│   └── CParser.g4        # Gramática ANTLR4
├── inputs/               # Archivos de entrada
├── output/              # Archivos generados
└── node_modules/        # Dependencias
```

## Limitaciones Actuales

1. **Tipos de Datos**
   - Solo soporta int y void
   - No soporta float, double, char
   - No soporta arrays ni punteros

2. **Estructuras de Control**
   - No soporta for ni do-while
   - No soporta switch-case

3. **Funciones printf**
   - Solo soporta %d para números
   - No soporta otros formateadores

4. **Características No Soportadas**
   - Estructuras y uniones
   - Typedef y enums
   - Preprocesador (#include, #define)

## Solución de Problemas

### Errores Comunes

1. **Error: ANTLR no encontrado**
   ```bash
   # Solución: Verificar archivo jar
   ls antlr-4.13.1-complete.jar
   ```

2. **Error: Java no encontrado**
   ```bash
   # Solución: Instalar Java
   java -version
   ```

3. **Error: Módulos no encontrados**
   ```bash
   # Solución: Reinstalar dependencias
   npm install
   ```

## Contribuir

1. Fork el repositorio
2. Crear rama para feature: `git checkout -b feature/nueva-caracteristica`
3. Commit cambios: `git commit -m "Agrega nueva caracteristica"`
4. Push a la rama: `git push origin feature/nueva-caracteristica`
5. Crear Pull Request

## Licencia
Para dibujar el arbol
Al pulsar F5 en el archivo kdgramatica.g4 genera el arbol
![image](https://github.com/user-attachments/assets/1fec0147-6dcf-40e7-9dda-483be649fef1)

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
