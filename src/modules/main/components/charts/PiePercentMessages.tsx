import Chart from "react-apexcharts";

export default function PiePercentMessages({
  data,
}: {
  data: {
    senders: string[];
    messages: number[];
  };
}) {
  return (
    <div className="w-full py-16 bg-primary">
      <p className="m-auto text-center mb-5 text-2xl text-custom_white">
        Porcentaje de mensajes por persona:
      </p>
      <Chart
        options={{
          labels: data.senders,
          legend: {
            position: "bottom",
          },
        }}
        series={data.messages}
        type="pie"
        className="w-10/12 lg:w-4/12 bg-custom_white rounded mx-auto py-3"
      />
      <p className="m-auto text-center mt-5 text-2xl text-custom_white">
        Quien mas habla es{" "}
        <span className="text-custom_yellow font-bold">
          {data.senders[data.messages.indexOf(Math.max(...data.messages))]}
        </span>{" "}
        con{" "}
        <span className="text-custom_yellow font-bold">
          {Math.max(...data.messages)}
        </span>{" "}
        mensajes
      </p>
    </div>
  );
}
