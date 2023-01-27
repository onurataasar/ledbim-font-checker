import React from "react";
import styles from "./styles.module.scss";
const FontSelect = ({
  fonts,
  onChange,
}: {
  fonts: Array<any>;
  onChange: any;
}) => {
  return (
    <>
      <select className={styles.font_select} onChange={onChange}>
        {fonts.map((font: any, id) => (
          <option key={id}>
            <span>{font}</span>
          </option>
        ))}
      </select>
    </>
  );
};

export default FontSelect;
