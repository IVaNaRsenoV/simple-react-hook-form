import { Controller, useFormContext } from "react-hook-form";

export const Input = ({ name }) => {
  const { register, control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={() => {
        return <input type="text" {...register(name)} />;
      }}
    />
  );
};
