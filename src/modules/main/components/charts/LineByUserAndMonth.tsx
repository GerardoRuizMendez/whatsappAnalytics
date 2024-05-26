import Chart from "react-apexcharts";

export default function LineByUserAndMonth({
  data,
}: {
  data: {
    sender: string;
    counts: (number | null)[];
    labels: string[];
  }[];
}) {
  //const aux = dataFrame.senderCountByMonth();

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
      }}
      series={data.map((serie) => {
        return { name: serie.sender, data: serie.counts, type: "line" };
      })}
      type="line"
    />
  );
}
