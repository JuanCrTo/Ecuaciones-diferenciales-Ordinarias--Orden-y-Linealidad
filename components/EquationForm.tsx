// /components/EquationForm.tsx
import { useState } from 'react';

interface Props {
  onAnalyze: (equation: string) => void;
}

const EquationForm: React.FC<Props> = ({ onAnalyze }) => {
  const [equation, setEquation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(equation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="equation">Introduce una ecuación diferencial:</label>
      <input
        type="text"
        id="equation"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        placeholder="Ej: d^2y/dx^2 + 2dy/dx + y = 0"
        required
      />
      <button type="submit">Analizar</button>
    </form>
  );
};

export default EquationForm;
