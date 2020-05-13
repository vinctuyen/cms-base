import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Line,
} from "recharts";
import Container from '@material-ui/core/Container';
import "./style.scss";
function Stats() {
  const data = [
    {
      name: "13/05/2020",
      price: 4000,
      count: 2400,
      amt: 2400,
    },
    {
      name: "16/05/2020",
      price: 3000,
      count: 1398,
      amt: 2210,
    },
    {
      name: "17/05/2020",
      price: 2000,
      count: 9800,
      amt: 2290,
    },
    {
      name: "18/05/2020",
      price: 2780,
      count: 3908,
      amt: 2000,
    },
    {
      name: "19/05/2020",
      price: 1890,
      count: 4800,
      amt: 2181,
    },
    {
      name: "20/05/2020",
      price: 2390,
      count: 3800,
      amt: 2500,
    },
    {
      name: "21/05/2020",
      price: 3490,
      count: 4300,
      amt: 2100,
    },
    {
      name: "22/05/2020",
      price: 2780,
      count: 3908,
      amt: 2000,
    },
    {
      name: "23/05/2020",
      price: 1890,
      count: 4800,
      amt: 2181,
    },
    {
      name: "24/05/2020",
      price: 2390,
      count: 3800,
      amt: 2500,
    },
    {
      name: "25/05/2020",
      price: 3490,
      count: 4300,
      amt: 2100,
    },
  ];

  return (
    <Container style={{background: "#fff"}} maxWidth='xl'>
      <ComposedChart width={900} height={450} data={data} className="chart">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend width={"auto"} />
        <CartesianGrid stroke="#f5f5f5" />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="count" barSize={20} fill="#FB8122" />
        <Line type="monotone" dataKey="price" stroke="#1D2228" />
      </ComposedChart>
    </Container>
  );
}
export default Stats;
