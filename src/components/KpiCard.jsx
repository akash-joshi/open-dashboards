import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CardContainer1 from "./CardContainer";
import LineChart from "./LineChart";

const CardContainer = styled(CardContainer1)`
  width: 93%;
  padding: 0em;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default function AmazonCard(props) {
  const [data, setData] = useState("");

  let spreadArray = [...props.reportsData];
  if (spreadArray.length === 0) spreadArray = { date: "02 Jan", value: "0" };

  useEffect(() => {
    setData([{ date: "01 Jan", value: "0" }, spreadArray].flat());
  }, [props.reportsData]);

  const yesterday = data && data[data.length - 1].value;

  return (
    <CardContainer
      onClick={() => {
        props.setActiveCard(props.index);
        props.setDataPoint(props.kpi);
      }}
      style={{
        boxShadow: props.active
          ? "0px 20px 30px rgba(0, 0, 0, 0.1)"
          : "0px 16px 32px #f0f4f7"
      }}
    >
      <div style={{ padding: "1em" }}>
        <h6
          style={{
            color: "#78909C",
            textTransform: "uppercase",
            marginBottom: "0.1em"
          }}
        >
          {props.title}
        </h6>
        <h5 style={{ marginBottom: "0px" }}>
          <b>{yesterday ? yesterday : 0}</b>
        </h5>
        <span style={{ color: "#8F92A1" }}>
          out of{" "}
          {props.kpi.data[props.kpi.data.length - 1]
            ? props.kpi.data[props.kpi.data.length - 1].target
            : 0}
        </span>
      </div>
      <LineChart
        index={props.index}
        color={props.color}
        dataKey={props.dataKey}
        data={data}
      />
    </CardContainer>
  );
}
