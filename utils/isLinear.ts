export const isLinear = (equation: string, dependentVar: string) => {
  // Paso 1: Potencias mayores a 1
  const powerPattern = new RegExp(`${dependentVar}\\^([2-9]|\\d{2,})`, "g");
  if (powerPattern.test(equation)) {
    return false;
  }

  // Paso 2: Funciones no lineales aplicadas a la variable dependiente
  const nonlinearFunctions = [
    "sin",
    "cos",
    "tan",
    "sec",
    "csc",
    "cot",
    "log",
    "ln",
    "exp",
    "sqrt",
  ];
  for (const func of nonlinearFunctions) {
    const funcPattern = new RegExp(`${func}\\s*\\(${dependentVar}\\)`, "g");
    if (funcPattern.test(equation)) {
      return false;
    }
  }

  // Paso 3: Productos entre derivadas
  const derivativePattern = new RegExp(
    `d\\^?\\d*${dependentVar}/d[a-zA-Z]\\^?\\d*`,
    "g"
  );
  const derivatives = equation.match(derivativePattern) || [];

  for (const derivative of derivatives) {
    const productPattern = new RegExp(
      `${derivative}\\s*\\*\\s*(${derivatives.join("|")})`,
      "g"
    );
    if (productPattern.test(equation)) {
      return false;
    }
  }

  // Paso 4: Variable dependiente multiplicando a derivadas
  for (const derivative of derivatives) {
    const dependentTimesDerivative = new RegExp(
      `${dependentVar}\\s*\\*\\s*${derivative}`,
      "g"
    );
    const derivativeTimesDependent = new RegExp(
      `${derivative}\\s*\\*\\s*${dependentVar}`,
      "g"
    );

    if (
      dependentTimesDerivative.test(equation) ||
      derivativeTimesDependent.test(equation)
    ) {
      return false;
    }
  }

  // Si pasó todas las pruebas, es lineal
  return true;
};
