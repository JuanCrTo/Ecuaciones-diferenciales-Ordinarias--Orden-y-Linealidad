import { IProps } from "./Props.interface";

const Result: React.FC<IProps> = ({ order, linear }) => {
  if (linear === null) {
    return <p>Introduce una ecuación para ver los resultados.</p>;
  }

  return (
    <div>
      <h2>Resultado</h2>
      <p>{order}</p>
      <p>{linear ? "La ecuación es lineal." : "La ecuación no es lineal."}</p>
    </div>
  );
};

export default Result;
