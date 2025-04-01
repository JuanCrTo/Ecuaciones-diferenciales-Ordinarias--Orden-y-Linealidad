This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Detección de Orden y Linealidad de Ecuaciones Diferenciales

Este proyecto es una aplicación web desarrollada con **Next.js** que permite a los usuarios ingresar una ecuación diferencial y obtener su **orden** y si es **lineal** o **no lineal**.

## 📌 Funcionalidades
- Identifica el **orden** de la ecuación diferencial.
- Determina si la ecuación es **lineal** o **no lineal**.
- Soporta ecuaciones diferenciales de primer, segundo, tercer orden y superiores.

## 📥 Formato de Entrada
Para que el programa funcione correctamente, las ecuaciones deben escribirse en el siguiente formato:

- `dy/dx` → Representa la primera derivada de `y` respecto a `x`.
- `d^2y/dx^2` → Representa la segunda derivada.
- `d^n y/dx^n` → Para derivadas de orden `n`.
- `y` → Representa la función desconocida.
- `x` → Variable independiente.
- Se permiten operadores matemáticos estándar (`+`, `-`, `*`, `/`).
- No se deben usar caracteres especiales como `∂`, `Δ`, etc.

Ejemplo de formato correcto:
```plaintext
dy/dx + y = x
```

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/JuanCrTo/Ecuaciones-diferenciales-Ordinarias--Orden-y-Linealidad.git
   cd mi-repositorio
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Ejecutar la aplicación en modo desarrollo:
   ```sh
   npm run dev
   ```
4. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

---

## 📊 Ejemplos de Ecuaciones y su Clasificación

A continuación, se presentan 30 ecuaciones diferenciales con su **orden** y si son **lineales** o **no lineales**.

| #  | **Ecuación**                              | **Orden** | **Lineal?** |
|----|------------------------------------------|----------|------------|
| 1  | `dy/dx + y = x`                         | 1        | ✅ Sí       |
| 2  | `d^2y/dx^2 + dy/dx + y = 0`             | 2        | ✅ Sí       |
| 3  | `d^3y/dx^3 + 3y = 2x`                   | 3        | ✅ Sí       |
| 4  | `dy/dx + y^2 = 0`                        | 1        | ❌ No      |
| 5  | `d^2y/dx^2 + sin(y) = x`                | 2        | ❌ No      |
| 6  | `d^2y/dx^2 + y * dy/dx = 0`             | 2        | ❌ No      |
| 7  | `d^3y/dx^3 + e^y = x^2`                 | 3        | ❌ No      |
| 8  | `dy/dx + ln(y) = x`                     | 1        | ❌ No      |
| 9  | `d^2y/dx^2 + tan(y) = 0`                | 2        | ❌ No      |
| 10 | `dy/dx + 2y = cos(x)`                   | 1        | ✅ Sí       |
| 11 | `d^4y/dx^4 + 5dy/dx + y = 0`            | 4        | ✅ Sí       |
| 12 | `d^3y/dx^3 + y^3 = x`                   | 3        | ❌ No      |
| 13 | `dy/dx + y * d^2y/dx^2 = 0`             | 2        | ❌ No      |
| 14 | `d^2y/dx^2 + 3^y = 0`                   | 2        | ❌ No      |
| 15 | `dy/dx + 5y = sec(x)`                   | 1        | ✅ Sí       |
| 16 | `d^3y/dx^3 + dy/dx + y = sin(x)`        | 3        | ✅ Sí       |
| 17 | `d^2y/dx^2 + 7 * y * dy/dx = 0`         | 2        | ❌ No      |
| 18 | `dy/dx + cot(y) = 3x`                   | 1        | ❌ No      |
| 19 | `d^2y/dx^2 + 2^y = x`                   | 2        | ❌ No      |
| 20 | `dy/dx + sqrt(y) = 0`                   | 1        | ❌ No      |
| 21 | `d^4y/dx^4 + y = e^x`                   | 4        | ✅ Sí       |
| 22 | `dy/dx + x^y = 0`                       | 1        | ❌ No      |
| 23 | `d^2y/dx^2 + log(y) = 5x`               | 2        | ❌ No      |
| 24 | `dy/dx + sinh(y) = cosh(x)`             | 1        | ❌ No      |
| 25 | `d^3y/dx^3 + tanh(y) = 0`               | 3        | ❌ No      |
| 26 | `d^2y/dx^2 + 2y = 5x^2`                 | 2        | ✅ Sí       |
| 27 | `d^5y/dx^5 + y = 0`                     | 5        | ✅ Sí       |
| 28 | `dy/dx + x*y^2 = 3`                     | 1        | ❌ No      |
| 29 | `d^2y/dx^2 + y^y = x^3`                 | 2        | ❌ No      |
| 30 | `d^3y/dx^3 + 3y + cos(y) = 0`           | 3        | ❌ No      |

