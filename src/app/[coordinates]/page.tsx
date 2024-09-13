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
  const data = [{ x: currentUser[0], y: currentUser[1] }];

  return (
    <section className={styles.container}>
      <h2>תוצאות</h2>
      <p className={styles.resultP}>
        {Number(data[0].x) > 0
          ? "מכוון משימות"
          : Number(data[0].x) < 0
          ? "מכוון אנשים"
          : "לפעמים מכוון אנשים ולפעמים מכוון משימות"}
        ,{" "}
        {Number(data[0].y) > 0
          ? "דומיננטי"
          : Number(data[0].y) < 0
          ? "פאסיבי"
          : "לפעמים דומיננטי ולפעמים פאסיבי."}
      </p>

      <div className={styles.chartBox}>
        <p className={styles.axisTitle} id={styles.missionDriven}>
          דומיננטי
        </p>
        <p className={styles.axisTitle}>מכוון משימות</p>

        <div className={styles.chartBackground}>
          <div className={styles.quaters}>
            <div className={styles.quater}>משימתי</div>
            <div className={styles.quater}>מקדם</div>
            <div className={styles.quater}>מנתח</div>
            <div className={styles.quater}>תומך</div>
          </div>

          <ResponsiveContainer width={"100%"} height={"100%"}>
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
                strokeDasharray="1 0"
                verticalFill={["#00000009", "#00000005"]}
                horizontalFill={["#00000005", "#00000009"]}
              />
              <XAxis
                type="number"
                dataKey="x"
                domain={[-20, 20]}
                tickLine={false}
                tickCount={3}
                tickMargin={15}
                hide
              />
              <YAxis
                type="number"
                dataKey="y"
                domain={[-20, 20]}
                tickCount={3}
                tickMargin={15}
                hide
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="A school" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <p className={styles.axisTitle}>מכוון אנשים</p>
        <p className={styles.axisTitle} id={styles.supporterDriven}>
          פאסיבי
        </p>
      </div>

      <p>מתחת לגרף</p>
    </section>
  );
}

export default ChartPage;
