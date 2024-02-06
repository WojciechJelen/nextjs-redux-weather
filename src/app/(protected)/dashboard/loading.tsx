import { CurrentWeatherSkeleton } from "@/app/components/current-weather";
import style from "./page.module.scss";

export default function Loading() {
  return (
    <div className={style.wrapper}>
      <CurrentWeatherSkeleton />
    </div>
  );
}
