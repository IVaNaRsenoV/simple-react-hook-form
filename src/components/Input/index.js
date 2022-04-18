import { useFormContext, Controller } from "react-hook-form";

export const Input = ({ name }) => {
  const { register, control } = useFormContext();

  return (
    <Controller
      control={control}
      name=""
      render={() => {
        return <input {...register(name)} placeholder={`${name}...`} />;
      }}
    />
  );
};

export const SetOfInputs = ({ data }) => {
  const { email, password, test } = data;
  return (
    <>
      <Input name={email} />
      <br />
      <Input name={password} />
      <br />
      <Input name={test} />
      <br />
    </>
  );
};
