import Chart from "react-apexcharts";

export default function BarMultimedia({
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
                Mensajes multimedia por persona:
            </p>
            <Chart
                options={{
                    // labels: data.senders,
                    legend: {
                        position: "bottom",
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function (val, opt) {
                            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                        },
                    },
                    stroke: {
                        curve: "smooth",
                    },
                    chart: {
                        stacked: true,
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            borderRadiusApplication: 'end',
                            horizontal: true,
                            distributed: true,
                        },

                    },
                    xaxis: {
                        categories: data.senders,
                        labels: {
                            show: false
                        }

                    },
                    yaxis: {
                        labels: {
                            show: false
                        }
                    },
                }
                }
                series={[{ data: data.messages, name: "Mensajes multimedia" }]}
                type="bar"

                className="w-10/12 md:w-5/12 bg-custom_white rounded mx-auto py-3"

            />

        </div>
    );
}
