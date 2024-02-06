import styles from "./container.module.scss";

type PropsType = {
  children: React.ReactNode;
};

export const Container = ({ children }: PropsType) => {
  return <div className={styles.container}>{children}</div>;
};
