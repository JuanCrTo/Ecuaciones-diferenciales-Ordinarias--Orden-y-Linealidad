import { isLinear } from "./isLinear";

export const analyzeEquation = (equation: string) => {
  // Paso 1: Detectamos variables
  const variablePattern = /d\^?\d*([a-zA-Z])/; // Detecta la variable dependiente

  const matchVariable = equation.match(variablePattern);
  if (!matchVariable) {
    return { order: "No detectado", linear: null };
  }

  const dependentVar = matchVariable[1]; // ej: "y"

  // Paso 2: Detectar derivadas
  const derivativePattern = new RegExp(
    `d\\^?(\\d*)${dependentVar}/d([a-zA-Z])\\^?(\\d*)`,
    "g"
  );
  
  let maxOrder = 0;
  let match;

  while ((match = derivativePattern.exec(equation)) !== null) {
    const order = match[1] ? parseInt(match[1]) : 1;
    if (order > maxOrder) maxOrder = order;
  }

  if (maxOrder === 0) {
    return { order: "No detectado", linear: null };
  }

  const orderText = `Ecuación diferencial de orden ${maxOrder}`;

  const linear = isLinear(equation, dependentVar);

  return { order: orderText, linear };
};
