import { useNavigate } from "react-router-dom";

export default function withStep(Component) {
  return function (props) {
    const { step } = props;
    const navigate = useNavigate();

    return (
      <Component {...props}>
        <h1>Step {step}</h1>
        <br />
        <button>Нажать</button>
        <button onClick={() => navigate(-1)}>Назад</button>
      </Component>
    );
  };
}
