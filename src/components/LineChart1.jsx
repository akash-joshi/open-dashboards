import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function LineChart1(props) {
  return (
    <ResponsiveContainer>
      <AreaChart
        margin={{
          top: 20,
          right: 20,
          bottom: 40,
          left: 20
        }}
        data={props.data03}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#08BD80" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#08BD80" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F56767" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F56767" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis allowDuplicatedCategory={false} dataKey="date" />
        <YAxis
          domain={[
            0,
            parseInt(
              parseInt(props.data03[props.data03.length - 1].target) >
                parseInt(props.data03[props.data03.length - 1].value)
                ? props.data03[props.data03.length - 1].target
                : props.data03[props.data03.length - 1].value
            )
          ]}
          type="number"
          dataKey="value"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Area
          name="Reported"
          dataKey="value"
          stroke="#08BD80"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          name="Expected"
          dataKey="target"
          stroke="#F56767"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
