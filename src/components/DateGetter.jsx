import React, { useState } from "react";
import Dates from "../data/data.json";

function DateGetter({ data, setData }) {
  const fullList = Dates.map((dates) => dates);
  const fullRandomNumber = Math.floor(Math.random() * fullList.length);
  const filteredActivities = Dates.filter((item) => {
    return (
      (data.paid === null || item.paid === data.paid) &&
      (data.location === null || item.location === data.location) &&
      (data.type === "no-filter" || item.type === data.type)
    );
  });

  const filteredRandomNumber = Math.floor(
    Math.random() * filteredActivities.length
  );

  function generateDate() {
    if (filteredActivities.length == 0 || data.type == "no-filter") {
      console.log(fullList[fullRandomNumber]);
    } else {
      console.log(filteredActivities[filteredRandomNumber]);
    }
  }

  console.log(data);
  return (
    <div>
      <button onClick={generateDate}>Wylosuj</button>
    </div>
  );
}

export default DateGetter;
