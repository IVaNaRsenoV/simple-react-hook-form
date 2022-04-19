import withStep from "../../hoc/withStep";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { actionCreatorStep } from "../../redux/actionCreator";
import { Input } from "../../components";

const schema = yup.object().shape({
  email: yup.string().email().min(4).max(100).required(),
});

export const Step = withStep(({ way, step, children }) => {
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
    dispatch(actionCreatorStep(step, data));
    console.log(data);
    navigate(`${way}`);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name={"email"} />
        {errors.email && <h3>{errors.email.message}</h3>}
        {children}
      </form>
    </FormProvider>
  );
});
