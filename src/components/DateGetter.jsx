import React, { useState } from "react";
import Dates from "../data/data.json";

function DateGetter({ data, setData }) {
  const fullList = Dates.map((dates) => dates);
  const [filteredActivity, setFilteredActivity] = useState({title : null, description : null, type : null, paid: null, location : null})
  const filteredActivities = Dates.filter((item) => {
    return (
      (data.paid === null || item.paid === data.paid) &&
      (data.location === null || item.location === data.location) &&
      (data.type === "no-filter" || item.type === data.type)
    );
  });

  function generateDate() {
    const sourceList = filteredActivities.length > 0 ? filteredActivities : fullList
    const randomIndex = Math.floor(Math.random() * sourceList.length);
    const result = sourceList[randomIndex];
  
    setFilteredActivity({
      title: result.title,
      description: result.description,
      type: result.type,
      paid: result.paid,
      location: result.location
    });
  }

  
  return (
    <div>
      <p>{filteredActivity.title}</p>
      <p>{filteredActivity.description}</p>
      <div className="flex gap-4"><span>{filteredActivity.paid ? "Płatne" : "Nie płatne"}</span><span>{filteredActivity.location}</span> <span>{filteredActivity.type}</span></div>
      <button onClick={generateDate}>Wylosuj</button>
    </div>
  );
}

export default DateGetter;
