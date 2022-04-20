import withStep from "../../hoc/withStep";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { actionCreatorStep } from "../../redux/actionCreator";
import { Input } from "../../components";
import styles from "./Step.module.scss";

const schema = yup.object().shape({
  email: yup.string().email().min(4).max(100).required(),
});

export const Step = withStep(({ way, step, type, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = (data) => {
    dispatch(actionCreatorStep(data));
    // dispatch({ type: `STEP`, payload: data });
    console.log(data);
    navigate(`${way}`);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form__container}
      >
        <Input name={type} />
        {errors.email && (
          <h3 className={styles.error}>{errors.email.message}</h3>
        )}
        {children}
      </form>
    </FormProvider>
  );
});
