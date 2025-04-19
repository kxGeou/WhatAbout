import React, { useState } from "react";
import Dates from "../data/data.json";
import Modal from "./Modal";

function DateGetter({ data, setData }) {
  const fullList = Dates.map((dates) => dates);
  const [filteredActivity, setFilteredActivity] = useState({
    title: null,
    description: null,
    type: null,
    paid: null,
    location: null,
  });
  const [visibleModal, setVisibleModal] = useState(false);
  const filteredActivities = Dates.filter((item) => {
    return (
      (data.paid === null || item.paid === data.paid) &&
      (data.location === null || item.location === data.location) &&
      (data.type === "no-filter" || item.type === data.type)
    );
  });

  function generateDate() {
    setTimeout(() => {
      const sourceList =
        filteredActivities.length > 0 ? filteredActivities : fullList;
      const randomIndex = Math.floor(Math.random() * sourceList.length);
      const result = sourceList[randomIndex];
      setVisibleModal(true);
      setFilteredActivity({
        title: result.title,
        description: result.description,
        type: result.type,
        paid: result.paid,
        location: result.location,
        imageUrl: result.imageUrl,
      });
    }, 500); 
  }
  return (
    <section>
      <Modal
        visible={visibleModal}
        type={filteredActivity.type}
        title={filteredActivity.title}
        paid={filteredActivity.paid}
        location={filteredActivity.location}
        description={filteredActivity.description}
        imageUrl={filteredActivity.imageUrl}
      ></Modal>
      <button onClick={generateDate}>Wylosuj</button>
    </section>
  );
}

export default DateGetter;
