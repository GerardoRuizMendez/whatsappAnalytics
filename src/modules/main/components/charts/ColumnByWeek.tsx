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
  const sumPerDay: number[] = [];
  for (let i = 0; i < data[0].labels.length; i++) {
    sumPerDay[i] = 0;
    data.forEach((user) => (sumPerDay[i] += user.counts[i]));
  }

  return (
    <div className="w-full py-16 bg-secondary">
      <p className="m-auto text-center mb-5 text-2xl text-custom_white">
        Mensajes por semana:
      </p>
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
        className="w-10/12 md:w-5/12 bg-custom_white rounded mx-auto py-3"
      />
      <p className="m-auto text-center mt-5 text-2xl text-custom_white">
        El dia que mas hablan es el{" "}
        <span className="text-custom_yellow font-bold">
          {data[0].labels[sumPerDay.indexOf(Math.max(...sumPerDay))]}
        </span>
        . ¿A qué se debe esto?
      </p>
    </div>
  );
}
