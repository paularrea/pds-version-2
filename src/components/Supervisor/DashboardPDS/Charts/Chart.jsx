import React from "react";
import styles from "./chart.module.scss";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = ({ title, values, line, XLabel, YLabel, legend }) => {
  console.log(XLabel, YLabel, "labels");
  return (
    <div className={styles.chart}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>

      {values && (
        <div style={{ width: "100%", height: "600px" }}>
          <ResponsiveContainer>
            <AreaChart
              data={values}
              margin={{
                top: 10,
                right: 50,
                bottom: 80,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                label={{ value: XLabel, position: "insideBottomRight", dy: 65 }}
                dataKey="X_tick_label"
                angle={-30}
                dx={-40}
                dy={25}
              />
              <YAxis
                label={{
                  value: YLabel,
                  angle: -90,
                  position: "center",
                  dx: -20,
                }}
              />
              <Area
                dataKey="Y_values_range_1"
                stroke="#FF2E79"
                fill="#ff2e7b6e"
              />
              <Area
                dataKey="Y_values_range_2"
                legend="iep"
                stroke="#2E83F8"
                fill="#F3F8FF"
              />

              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Chart;
