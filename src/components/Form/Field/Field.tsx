import React, { InputHTMLAttributes, FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./Field.module.css"; 

export type FieldProps = {
  label?: string; 
  error?: string; 
  className?: string; 
  inputClassName?: string; 
} & InputHTMLAttributes<HTMLInputElement>;

export const Field: FunctionComponent<FieldProps> = ({
  label,
  error,
  className,
  inputClassName,
  ...props
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label}>{label}</label>
      <input
        className={clsx(styles.input, error && styles.errorInput, inputClassName)}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Field;
