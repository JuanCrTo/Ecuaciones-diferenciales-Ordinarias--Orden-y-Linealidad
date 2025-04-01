// /pages/index.tsx
import { useState } from "react";
import EquationForm from "../components/EquationForm";
import Result from "../components/Result";

const Home = () => {
  const [result, setResult] = useState<{
    order: string;
    linear: boolean | null;
  }>({
    order: "",
    linear: null,
  });

  // Lógica para detectar si la ecuación es lineal y su orden
  const analyzeEquation = (equation: string) => {
    let order = 0;
    let linear = true;

    // Detectar el orden de la ecuación
    const derivatives = equation.match(/d\^?\d*y\/dx\^?\d*/g);
    if (derivatives) {
      order = Math.max(
        ...derivatives.map((der) => {
          const match = der.match(/\d+/);
          return match ? parseInt(match[0], 10) : 1; // Si no tiene número, es de primer orden
        })
      );
    }

    // Detectar si la ecuación es lineal
    // 1. Revisamos si hay potencias de y mayores que 1
    if (equation.match(/y\^(\d+)/)) {
      linear = false; // Si se encuentra y^n con n > 1, no es lineal
    }

    // 2. Revisamos si hay productos entre y y sus derivadas (ej: y * dy/dx)
    if (equation.match(/y\s*\*/)) {
      linear = false; // Si hay un producto con y, no es lineal
    }

    // 3. Detectamos si existe alguna base elevada a y (como 3^y, e^y, x^y, etc.)
    const exponentialPattern = /[\d\w]+\^y/; // Detecta cualquier base seguida de ^y
    if (equation.match(exponentialPattern)) {
      linear = false; // Si se encuentra una base elevada a y, no es lineal
    }

    // 4. Detectar funciones no lineales que contengan "y"
    const nonLinearFunctions = [
      "sin",
      "cos",
      "tan",
      "sec",
      "cot",
      "csc",
      "ln",
      "log",
      "sqrt",
    ];

    nonLinearFunctions.forEach((func) => {
      const regex = new RegExp(`${func}\\(y\\)`, "i"); // Busca solo si la función afecta a y
      if (equation.match(regex)) {
        linear = false; // Si se encuentra una función no lineal con y, no es lineal
      }
    });

    setResult({
      order: `Orden: ${order}`,
      linear: linear,
    });
  };

  return (
    <div className="container">
      <h1>Analizador de Ecuaciones Diferenciales</h1>
      <EquationForm onAnalyze={analyzeEquation} />
      <Result order={result.order} linear={result.linear} />
    </div>
  );
};

export default Home;
