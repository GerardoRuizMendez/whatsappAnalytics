import Chart from "react-apexcharts";

export default function PiePercentMessages({
  data,
}: {
  data: {
    senders: string[];
    messages: number[];
  };
}) {
  //const [data] = useState(dataFrame.messagesBySender());

  return (
    <Chart
      options={{
        labels: data.senders,
        legend: {
          position: "right",
        },
      }}
      series={data.messages}
      type="pie"
    />
  );
}
