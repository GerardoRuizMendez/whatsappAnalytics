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
  return (
    <div className="w-full py-16 bg-primary">
      <p className="m-auto text-center mb-5 text-2xl text-custom_white">
        Mensajes por mes de cada persona:
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
        }}
        series={data.map((serie) => {
          return { name: serie.sender, data: serie.counts, type: "line" };
        })}
        type="line"
        className="w-10/12 lg:w-5/12 bg-custom_white rounded my-5 mx-auto"
      />
    </div>
  );
}
