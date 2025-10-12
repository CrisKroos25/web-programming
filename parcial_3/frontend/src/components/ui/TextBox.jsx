import { useState } from "react";
import styles from "./TextBox.module.css";

export default function TextBox({ placeholder, onChange, value }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${styles.container} ${focused ? styles.focused : ""}`}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
