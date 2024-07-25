import Chart from "react-apexcharts";

function BarChart({ data1, data2, name1, name2 }) {
    return <div className="barGraph">
        <Chart
            type="bar"
            height={610}
            width={700}
            series={[
                {
                    data: data1,
                    name: name1,
                    style: { color: "wheat", fontSize: '16px' },
                },
                {
                    data: data2,
                    name: name2,
                    style: { color: "wheat", fontSize: '16px' },
                }
            ]}
            options={
                {
                    plotOptions: {
                        bar: {
                            columnWidth: '60%',
                            distributed: true,
                            borderRadius: 10,
                            dataLabels: {
                                position: 'top', // top, center, bottom
                            },
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        offsetY: -40
                    },
                    legend: {
                        show: true
                    },
                    xaxis: {
                        categories: ["A", "B", "AB", "O"],
                        labels: {
                            style: {
                                fontSize: '20px',
                                colors: "white",
                                fontWeight: "bold"
                            }
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        },
                    },
                    yaxis: {
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false,
                        },
                        labels: {
                            style: {
                                fontSize: '20px',
                                colors: "white",
                                fontWeight: "bold"
                            }
                        },
                    }
                }
            }
        />
    </div>
}

export default BarChart;