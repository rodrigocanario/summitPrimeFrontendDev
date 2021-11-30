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

export const ClientesGoldMainTable = () => {
  const dataa = useSelector((state) => state.clientesGold.data);
  let headers = Object.keys(dataa);
  const labels = [];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    let headerArrumado = header.slice(2, 4) + "/" + header.slice(0, 2);
    labels.push(headerArrumado);
  }
  const options = {
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
        label: "Clientes Ouro",
        data: headers.map((header) => {
          return dataa[header].golds ? dataa[header].golds.length : 0;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Clientes Ouro Faturados",
        data: headers.map((header) => {
          let numFat = 0;
          if (dataa[header].golds) {
            for (let j = 0; j < dataa[header].golds.length; j++) {
              const golds = dataa[header].golds[j];

              if (golds.isFaturado) {
                numFat += 1;
              }
            }
          }
          return numFat;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
