interface HourlyData {
  time: string[];
  temperature_2m: number[];
}

export const convertHourlyDataForChart = (hourlyData: HourlyData) => {
  // Group temperatures by date
  const temperaturesByDate: Record<string, number[]> = {};
  hourlyData.time.forEach((time, index) => {
    const date = new Date(time).toLocaleDateString();
    if (!temperaturesByDate[date]) {
      temperaturesByDate[date] = [];
    }
    temperaturesByDate[date].push(hourlyData.temperature_2m[index]);
  });

  // Calculate average temperature for each date
  const labels: string[] = [];
  const data: number[] = [];
  Object.keys(temperaturesByDate).forEach((date) => {
    const temperatures = temperaturesByDate[date];
    const averageTemp =
      temperatures.reduce((acc, curr) => acc + curr, 0) / temperatures.length;
    labels.push(date);
    data.push(parseFloat(averageTemp.toFixed(2))); // Keeping only two decimal places for cleanliness
  });

  console.log("###CART DATA", labels, data);

  return {
    labels,
    datasets: [
      {
        label: "Average Temperature (°C)",
        data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
};
