import { TemperatureChartSkeleton } from "@/app/components/weather-history/temperature-chart-skeleton";
import style from "./page.module.scss";

export default function Loading() {
  return (
    <div className={style.wrapper}>
      <TemperatureChartSkeleton />
    </div>
  );
}
