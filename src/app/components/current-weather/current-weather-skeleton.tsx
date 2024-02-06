import styles from "./current-weather-skeleton.module.scss";

export const CurrentWeatherSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.placeholder + " " + styles.titlePlaceholder}></div>
      <div className={styles.placeholder + " " + styles.iconPlaceholder}></div>
      <div
        className={styles.placeholder + " " + styles.temperaturePlaceholder}
      ></div>
      <div
        className={styles.placeholder + " " + styles.descriptionPlaceholder}
      ></div>
      <div className={styles.detailsPlaceholder}>
        <div
          className={styles.placeholder + " " + styles.detailPlaceholder}
        ></div>
        <div
          className={styles.placeholder + " " + styles.detailPlaceholder}
        ></div>
      </div>
    </div>
  );
};
