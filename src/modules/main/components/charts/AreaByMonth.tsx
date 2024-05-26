import Chart from "react-apexcharts";

export default function AreaByMonth({
  data,
}: {
  data: {
    labels: string[];
    series: (number | null)[];
  };
}) {
  return (
    <Chart
      options={{
        labels: data.labels,
        legend: {
          position: "right",
        },
        dataLabels: {
          enabled: false,
        },
      }}
      series={[
        {
          name: "Mensajes totales",
          data: data.series,
          type: "area",
        },
      ]}
      type="area"
    />
  );
}
