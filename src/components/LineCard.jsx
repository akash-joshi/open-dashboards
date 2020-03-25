import React from "react";
import styled from "styled-components";
import moment from "moment";

import CardContainer1 from "./CardContainer";
import LineChart from "./LineChart1";

const CardContainer = styled(CardContainer1)`
  width: 97%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default function AmazonCard(props) {
  const yesterday =
    props.kpi.reports &&
    props.kpi.reports[props.kpi.reports.length - 1]["value"];

  const data01 = props.kpi.reports;
  const data02 = props.kpi.data
    ? props.kpi.data.map(el => ({
        date: el.date,
        value: el.target
      }))
    : null;

  const dateArray =
    data01 && data02
      ? [...new Set([...data01, ...data02].map(el => el.date).sort())]
      : null;

  const newData03 = [{ date: "01 Jan", value: 0, target: 0 }];

  if (dateArray) {
    let prevData01 = 0;
    let prevData02 = 0;

    let data01Index = 0;
    let data02Index = 0;

    dateArray.map(date => {
      const emptyData = { date: moment(date).format("DD MMM") };

      if (data01[data01Index]) {
        if (data01[data01Index].date == date) {
          prevData01 = data01[data01Index].value;
          emptyData.value = data01[data01Index].value;
        } else if (data01[data01Index].date > date) {
          emptyData.value = prevData01;
        } else {
          if (data01[data01Index + 1]) {
            ++data01Index;
            prevData01 = data01[data01Index].value;
          }
          emptyData.value = prevData01;
        }
      }

      if (data02[data02Index].date == date) {
        prevData02 = data02[data02Index].value;
        emptyData.target = data02[data02Index].value;
      } else if (data02[data02Index].date > date) {
        emptyData.target = prevData02;
      } else {
        if (data02[data02Index + 1]) {
          ++data02Index;
          prevData02 = data02[data02Index].value;
        }
        emptyData.target = prevData02;
      }
      newData03.push(emptyData);
    });
  }

  return (
    <CardContainer style={{ position: "relative" }}>
      <b style={{ position: "absolute", bottom: "1em", left: "52%" }}>Date</b>
      <b
        style={{
          position: "absolute",
          top: "50%",
          transform: "rotate(270deg)"
        }}
      >
        Value
      </b>
      <div style={{ position: "absolute", right: "4em", top: "3em" }}>
        <span style={{ color: "#08BD80" }}>•</span> Reported{" "}
        <span style={{ color: "#F56767" }}>•</span> Expected
      </div>
      <h6 style={{ color: "#78909C", textTransform: "uppercase" }}>
        {props.title}
      </h6>
      <h5>
        <b>{yesterday}</b>
      </h5>
      <div style={{ marginBottom: "2em" }} />
      <LineChart data03={newData03} />
    </CardContainer>
  );
}
