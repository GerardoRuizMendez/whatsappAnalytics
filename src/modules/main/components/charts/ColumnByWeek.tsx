import Chart from "react-apexcharts";

export default function ColumnByWeek({
  data,
}: {
  data: {
    sender: string;
    counts: number[];
    labels: string[];
  }[];
}) {
  return (
    <Chart
      options={{
        labels: data[0].labels,
        legend: {
          position: "bottom",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        chart: {
          stacked: true,
        },
      }}
      series={data.map((serie) => {
        return { name: serie.sender, data: serie.counts };
      })}
      type="bar"
    />
  );
}
