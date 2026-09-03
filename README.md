# Algorithms

Colección de ejercicios y desafíos de algoritmos resueltos en **TypeScript**.

Cada challenge vive en su propia carpeta y sigue el mismo formato:

- `README.md` — enunciado del problema con reglas y ejemplos.
- `<nombre>.ts` — implementación de la solución.
- `<nombre>.test.ts` — pruebas unitarias con Jest.

## Stack

- **Lenguaje:** TypeScript (estricto, ES2022)
- **Runtime / gestor de paquetes:** [Bun](https://bun.sh)
- **Pruebas:** Jest + ts-jest
- **Sin dependencias de runtime** (solo devDependencies)

## Estructura

Los challenges se agrupan por tema bajo `challenges/`:

```
challenges/
├── arrays/   # Manipulación de arreglos
├── strings/  # Procesamiento de texto y cadenas
├── grid/     # Matrices, grids, DFS/traversal y pathfinding
├── math/     # Aritmética, secuencias, conversiones y cálculos
├── time/     # Fechas, horas, duraciones y calendario
├── logic/    # Lógica de negocio y reglas
└── misc/     # Otros desafíos
```

Cada subcarpeta contiene los 69 challenges, por ejemplo:

| Categoría | Challenges |
|---|---|
| arrays | arrayChunks, arrayDiff, arrayDuplicates, matrixShift, fiveDice, candlelight |
| strings | reverseParenthesis, htmlTagStripper, markdownBoldParser, wordFrequency, wordGuesser, complementaryDNA, vowelBalance, letterDistance, sentenceCapitalizer, hiddenKey, prankNumber, snowflakeGenerator, speakWiselyYouMust |
| grid | bucketFill, bucketFill2, gameOfLife, spiralMatrix, wordSearch, nonogramValidator, magicSquareSolver, knightMoves, trailTraversal, landingSpot, cellSignal, qrDecoder, elevatorStops |
| math | fibonacciSequence, tribonacciSequence, nthPrime, goldenRatio, RGBToHex, romanNumeralParser, baseCheck, nearestMultiple, integerSequence, tipCalculator, loanCalculator, rentalCost, golfHandicapCalculator, launchFuel, secondBest, thermostatAdjuster2, exactChange, unorderOfOperations, contrastRating, contrastRating3, fileStorage, videoStorage |
| time | spokenTime, spokenDuration, durationFormatter, businessDayCount, moonPhase, digitalDetox |
| logic | foodChain, navigator, issueTriage, issueTriage2 |
| misc | CharacterBattle, horoscopeMatch, emailSorter, spamDetector, IPv4Validator |

## Instalación y uso

Requisitos: [Bun](https://bun.sh) instalado.

```bash
# Instalar dependencias
bun install

# Correr todas las pruebas
bun test

# Correr un challenge específico
bun test challenges/grid/spiralMatrix

# Type-check (sin emitir)
bun run typecheck

# Compilar a dist/
bun run build
```

## Agregar un nuevo challenge

1. Crear una carpeta en la subcategoría correspondiente de `challenges/`.
2. Añadir el `README.md` con el enunciado y ejemplos.
3. Implementar la solución en un archivo `nombreEnCamelCase.ts` exportando la función.
4. Agregar un archivo de pruebas `nombreEnCamelCase.test.ts`.

El patrón es el mismo para todo el repo: una carpeta por problema, con su README, su implementación y sus tests.

## Convenciones

- **Carpetas y archivos en camelCase** (ej. `arrayChunks/arrayChunks.ts`).
- **Una función exportada** por challenge, con tests en Jest.
- Nombre de archivos de helper: `models.ts` (tipos/enums), `utils.ts` (utilidades), `constants.ts` (constantes).

## Scripts

| Script | Descripción |
|---|---|
| `bun test` | Ejecuta todas las pruebas con Jest |
| `bun run typecheck` | Type-check estricto (`tsc --noEmit`) |
| `bun run build` | Compila `challenges/` a `dist/` |
