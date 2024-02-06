import style from "./page.module.scss";
import { CurrentWeatherSkeleton } from "@/app/components/current-weather";

export default function Loading() {
  return (
    <div className={style.wrapper}>
      <CurrentWeatherSkeleton />
    </div>
  );
}
