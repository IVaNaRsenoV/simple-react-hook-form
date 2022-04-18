import { useFormContext } from "react-hook-form";

export const Error = ({ data }) => {
  const { formState } = useFormContext();
  const error = formState.errors[`${data}`];
  return <>{error && <h3 style={{ color: "red" }}>{error.message}</h3>}</>;
};

export const Errors = ({ data }) => {
  const { email, password, test } = data;
  return (
    <>
      <Error data={email} />
      <Error data={password} />
      <Error data={test} />
    </>
  );
};
