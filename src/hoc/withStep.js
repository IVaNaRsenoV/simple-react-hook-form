import { useNavigate } from "react-router-dom";
import styles from "../pages/Step/Step.module.scss";

export default function withStep(Component) {
  return function (props) {
    const { step } = props;
    const navigate = useNavigate();

    return (
      <Component {...props}>
        <h1 className={styles.header__h1}>{step}</h1>
        <br />
        <button className={styles.click}>Нажать</button>
        <button className={styles.back} onClick={() => navigate(-1)}>
          Назад
        </button>
      </Component>
    );
  };
}
