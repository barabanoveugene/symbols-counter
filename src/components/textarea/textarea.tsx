import styles from "./textarea.module.scss";
import React from "react";

type TRows = {
  value: string;
  onChange: (value: string) => void;
};

export const TextArea: React.FC<TRows> = ({ value, onChange }) => {
  const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      className={styles.textarea}
      onChange={handlerChange}
      value={value}
    />
  );
};
