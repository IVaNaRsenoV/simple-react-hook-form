import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Result = () => {
  const navigate = useNavigate();
  const result = useSelector((state) => state);
  const getSteps = () => {
    const steps = {
      step1: result.step1,
      step2: result.step2,
      step3: result.step3,
    };
    return console.log(steps);
  };

  return (
    <>
      <h1>Result</h1>
      <button onClick={getSteps}>Получить результат!</button>
      <button onClick={() => navigate(-1)}>Назад</button>
    </>
  );
};
