import styles from "./count.module.scss";

type TCount = {
  value?: string;
};

export const Count: React.FC<TCount> = ({ value = "" }) => (
  <strong className={styles.count}>{value.length}</strong>
);
