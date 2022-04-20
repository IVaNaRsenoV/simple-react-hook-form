import { Controller, useFormContext } from "react-hook-form";
import styles from "./Input.module.scss";

export const Input = ({ name }) => {
  const { register, control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={() => {
        return (
          <input className={styles.field} type={name} {...register(name)} />
        );
      }}
    />
  );
};
