import React from "react";
import { AreaChart, Area, XAxis, ResponsiveContainer, YAxis } from "recharts";

export default function LineGraph(props) {
  console.log(props.data);
  return (
    <ResponsiveContainer height={75}>
      <AreaChart data={props.data}>
        <defs>
          <linearGradient
            id={`chartColor_${props.index}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor={props.color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={props.color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis hide={true} dataKey="date" />
        <YAxis
          hide={true}
          domain={[
            0,
            parseInt(props.data ? props.data[props.data.length - 1].value : 0)
          ]}
          type="number"
        />
        <Area
          type="monotone"
          dataKey={props.dataKey}
          stroke={props.color}
          fill={`url(#chartColor_${props.index})`}
          activeDot={{ r: 4 }}
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
