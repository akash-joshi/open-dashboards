import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import "./materialize.css";
import "./bootstrap.css";

import KpiCard from "./components/KpiCard";
import CircleCard from "./components/CircleCard";
import LineCard from "./components/LineCard";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 3fr 1fr;
`;

const KpiWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const colors = ["#5187E0", "#B151E0", "#06B39B", "#ffb023"];

const graphData = [
  {
    data: [
      { date: "2020-03-01", target: "0" },
      { date: "2020-03-14", target: "1500" },
      { date: "2020-03-21", target: "3500" },
      { date: "2020-03-31", target: "6500" }
    ],
    name: "Recoveries in Italy",
    reports: [
      { date: "2020-03-06", value: "734" },
      { date: "2020-03-13", value: "1778" },
      { date: "2020-03-15", value: "2038" }
    ]
  },
  {
    data: [
      { date: "2020-03-14", target: "2" },
      { date: "2020-03-21", target: "5" }
    ],
    name: "Recoveries in India",
    reports: [
      { date: "2020-03-06", value: "0" },
      { date: "2020-03-13", value: "3" },
      { date: "2020-03-15", value: "3" }
    ]
  }
];

export default function App() {
  const [activeCard, setActiveCard] = useState(0);
  const [dataPoint, setDataPoint] = useState(graphData[activeCard]);

  return (
    <section
      style={{
        background: "rgb(239, 243, 252)",
        height: "100vh",
        padding: "1em"
      }}
    >
      <KpiWrapper>
        {graphData.map((dataPoint, index) => (
          <KpiCard
            setDataPoint={setDataPoint}
            kpi={dataPoint}
            setActiveCard={setActiveCard}
            index={index}
            active={activeCard === index ? true : false}
            color={colors[index % 4]}
            dataKey={"value"}
            reportsData={dataPoint.reports}
            title={dataPoint.name}
            key={index}
          />
        ))}
      </KpiWrapper>
      {dataPoint && (
        <Wrapper>
          <LineCard dataKey={"value"} title={dataPoint.name} kpi={dataPoint} />
          <CircleCard kpi={dataPoint} />
        </Wrapper>
      )}
    </section>
  );
}
