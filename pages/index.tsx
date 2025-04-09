import { useState } from "react";
import EquationForm from "../components/EquationForm";
import Result from "../components/Result";
import { analyzeEquation } from "../utils/analyzeEquation";
import { AnalysisResult } from "../types/types";

const Home = () => {
  const [result, setResult] = useState<AnalysisResult>({
    order: "",
    linear: null,
  });

  const handleAnalyze = (equation: string) => {
    const analysisResult = analyzeEquation(equation);
    setResult(analysisResult);
  };

  return (
    <div>
      <h1>Analizador de Ecuaciones Diferenciales</h1>
      <EquationForm onAnalyze={handleAnalyze} />
      <Result order={result.order} linear={result.linear} />
    </div>
  );
};

export default Home;
