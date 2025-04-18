import React, { useState } from "react";
import Dates from "../data/data.json";

function DateGetter({ data, setData }) {
  const fullList = Dates.map((dates) => dates);
  const fullRandomNumber = Math.floor(Math.random() * fullList.length);
  const [filteredActivity, setFilteredActivity] = useState({title : null, description : null, type : null, paid: null, location : null})
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
      const result = fullList[fullRandomNumber];
      setFilteredActivity({title : result.title, description : result.description, type : result.type, paid: result.paid, location : result.location})
      console.log(filteredActivity)
    } else {
      const result = filteredActivities[filteredRandomNumber];
      setFilteredActivity({title : result.title, description : result.description, type : result.type, paid: result.paid, location : result.location})
      console.log(filteredActivity)
    }
  }
  return (
    <div>
      <p>{filteredActivity.title}</p>
      <p>{filteredActivity.description}</p>
      <div className="flex gap-4"><span>{filteredActivity.location}</span> <span>{filteredActivity.type}</span></div>
      <button onClick={generateDate}>Wylosuj</button>
    </div>
  );
}

export default DateGetter;
