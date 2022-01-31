import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ClientesGoldTableByFilter = (props) => {
  const dataa = useSelector((state) => state.clientesGold.data);
  let headers = Object.keys(dataa);
  const labels = [];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    let headerArrumado = header.slice(2, 4) + "/" + header.slice(0, 2);
    labels.push(headerArrumado);
  }
  const options = {
    plugins: {
      title: {
        display: true,
        text: props.input.p.toUpperCase(),
        color: "#ffffff",
        font: {
          size: 30,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#00000000",
        },

        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        grid: {
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: props.input.p,
        data: headers.map((header) => {
          console.log(Object.keys(dataa[header][props.input.name]).length);
          return dataa[header][props.input.name]
            ? Object.keys(dataa[header][props.input.name]).length
            : 0;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
