import React from "react";
import styles from "./styles.module.scss";
const TextInput = ({ onChange }: { onChange: any }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      placeholder="Please enter some text to check the font..."
    />
  );
};

export default TextInput;
