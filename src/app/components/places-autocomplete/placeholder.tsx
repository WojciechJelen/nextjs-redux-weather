import clsx from "clsx";
import styles from "./places-autocomplete.module.scss";

export const InputPlaceholder = () => {
  const classNames = clsx(styles.input, styles.disabled);

  return (
    <div className={styles.inputWrapper}>
      <input className={classNames} disabled={true} />
    </div>
  );
};
