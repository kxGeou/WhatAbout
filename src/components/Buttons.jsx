import React from "react";

function Buttons({ data, setData }) {
  return (
    <section className="flex justify-center flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          className={` ${data.type == "couple" && "bg-red-500"}`}
          onClick={() => {
            if (data.type === "couple") {
              setData({ ...data, type: "no-filter" });
            } else setData({ ...data, type: "couple" });
          }}
        >
          Couple
        </button>
        <button
          className={` ${data.type == "friends" && "bg-green-500"}`}
          onClick={() => {
            if (data.type === "friends") {
              setData({ ...data, type: "no-filter" });
            } else setData({ ...data, type: "friends" });
          }}
        >
          Friends
        </button>
      </div>

      <div className="flex gap-4">
        <button
          className=""
          onClick={() => {
            if (data.paid === true) {
              setData({ ...data, paid: null });
            } else setData({ ...data, paid: true });
          }}
        >
          Pieniądze
        </button>
        <button
          className=""
          onClick={() => {
            if (data.paid === false) {
              setData({ ...data, paid: null });
            } else setData({ ...data, paid: false });
          }}
        >
          Brak Pieniędzy
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className=""
          onClick={() => {
            if (data.location === "indoor") {
              setData({ ...data, location: null });
            } else setData({ ...data, location: "indoor" });
          }}
        >
          Wewnątrz
        </button>
        <button
          className=""
          onClick={() => {
            if (data.location === "outdoor") {
              setData({ ...data, location: null });
            } else setData({ ...data, location: "outdoor" });
          }}
        >
          Na zewnątrz
        </button>
      </div>
    </section>
  );
}

export default Buttons;
