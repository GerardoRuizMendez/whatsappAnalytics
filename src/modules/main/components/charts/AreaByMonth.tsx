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
    <div className="w-full py-16 bg-secondary">
      <p className="m-auto text-center mb-5 text-2xl text-custom_white">
        Mensajes por mes:
      </p>
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
        className="w-10/12 lg:w-5/12 bg-custom_white rounded my-5 mx-auto"
      />
      <p className="m-auto text-center mt-5 text-2xl text-custom_white">
        El mes que más han hablado es{" "}
        <span className="text-custom_yellow font-bold">
          {
            data.labels[
              data.series.indexOf(Math.max(...data.series.map((d) => d! | 0)))
            ]
          }
        </span>
        . ¿Qué hay de especial este mes?
      </p>
    </div>
  );
}
