"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  CartesianAxis,
} from "recharts";

function ChartPage({ params }: { params: { coordinates: string } }) {
  const currentUser = params.coordinates.split("xy");
  const data = [
    { x: currentUser[0], y: currentUser[1] },
    { x: 1, y: 0 },
    { x: -1, y: 15 },
    { x: 7, y: 8 },
    { x: -17, y: -3 },
    { x: -14, y: -12 },
    { x: -6, y: -9 },
    { x: 16, y: 18 },
    { x: 12, y: -16 },
  ];

  return (
    <section className={styles.container}>
      <h2>תוצאות</h2>
      <p>
        תוצאה: x={data[0].x}, y={data[0].y}
      </p>
      <ResponsiveContainer width={320} height={320}>
        <ScatterChart
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          {/* <CartesianAxis strokeDasharray="2 5" /> */}
          <CartesianGrid 
            strokeDasharray="10 10" 
            verticalFill={["#67676710", "#67676705"]}
            horizontalFill={["#67676705", "#67676710"]}
          />
          <XAxis
            type="number"
            dataKey="x"
            domain={[-20, 20]}
            tickLine={false}
            tickCount={3}
            hide
            />
          <YAxis
            type="number"
            dataKey="y"
            domain={[-20, 20]}
            tickCount={3}
            hide            
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ChartPage;
