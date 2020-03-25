import React from "react";
import styled from "styled-components";
import Circle from "react-circle";

import CardContainer1 from "./CardContainer";

const CardContainer = styled(CardContainer1)`
  width: 93%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default function AmazonCard(props) {
  const count =
    props.kpi.reports && props.kpi.reports[props.kpi.reports.length - 1].value;

  console.log(props.kpi);
  console.log(count);

  const base =
    props.kpi.data && props.kpi.data[props.kpi.data.length - 1].target;

  return (
    <CardContainer>
      <h5 style={{ color: "#78909C" }}>
        <b>KPI Progress</b>
      </h5>
      <br />
      <div style={{ textAlign: "center" }}>
        <Circle
          progress={count ? ((count / base) * 100).toFixed(2) : "..."}
          progressColor="#32D06C"
          bgColor="#f4f4f4"
          textColor="black"
          roundedStroke={true}
          showPercentage={true}
          responsive={true}
          textStyle={{
            font: "bold 4.5rem Poppins, sans-serif"
          }}
          showPercentageSymbol={true}
        />
        <br />
        <br />
        <h4>
          <b>{count}</b>
        </h4>
        <h5 style={{ fontWeight: "200", color: "#7F8FA4" }}>
          achieved out of <br /> {base}
        </h5>
      </div>
    </CardContainer>
  );
}
