import style from "./page.module.scss";
import { TemperatureChartSkeleton } from "@/app/components/weather-history/temperature-chart-skeleton";

export default function Loading() {
  return (
    <div className={style.wrapper}>
      <TemperatureChartSkeleton />
    </div>
  );
}
