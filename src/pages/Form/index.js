import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import { SetOfInputs, Errors } from "../../components";

const schema = yup.object().shape({
  email: yup.string().email().min(4).required(),
  password: yup.string().min(4).max(15).required(),
  test: yup.string().min(4).max(10).required(),
});

export const Form = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  const data = { email: "email", password: "password", test: "test" };
  const { isValid } = methods.formState;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SetOfInputs data={data} />
        <input type="submit" />
        <Errors data={data} />
        {isValid && (
          <h3 style={{ color: "green" }}>Все поля заполнены верно!</h3>
        )}
      </form>
    </FormProvider>
  );
};
