import React from "react";
import styles from "./styles.module.scss";
const FontSelect = ({
  fonts = [],
  onChange,
}: {
  fonts?: Array<string>;
  onChange: any;
}) => {
  return (
    <div>
      <select className={styles.font_select} onChange={onChange}>
        {fonts.map((font: any, id) => (
          <option className={styles.option} key={id}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelect;
