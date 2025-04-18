import React from "react";

function Buttons({ data, setData }) {
  return (
    <section className="flex justify-center flex-col items-center gap-2 mt-4">
      <div className="flex gap-8">
        <button
          className={` ${data.type == "couple" && "shadow-couple shadow-[0px_0px_10px_2px]"}`}
          onClick={() => {
            if (data.type === "couple") {
              setData({ ...data, type: "no-filter" });
            } else setData({ ...data, type: "couple" });
          }}
        >
          Couple
        </button>
        <button
          className={` ${data.type == "friends" && "shadow-friends shadow-[0px_0px_10px_2px]"}`}
          onClick={() => {
            if (data.type === "friends") {
              setData({ ...data, type: "no-filter" });
            } else setData({ ...data, type: "friends" });
          }}
        >
          Friends
        </button>
      </div>

      <div>
      <p className="mb-4 opacity975">Filtry: </p>
      <div className="flex gap-8 items-center">
        <div>
          <div className="flex gap-6">
            <button 
              className={`shadow-blue-300 shadow-[0px_0px_10px_2px] ${data.paid != null && data.paid == true ? `shadow-${data.type} shadow-[0px_0px_10px_2px]` : `shadow-transparent`}`}
              onClick={() => {
                if (data.paid === true) {
                  setData({ ...data, paid: null });
                } else setData({ ...data, paid: true });
              }}
            >
              Bez wydatków
            </button>
            <button
              className={`shadow-blue-300 shadow-[0px_0px_10px_2px] ${data.paid != null && data.paid == false ? `shadow-${data.type} shadow-[0px_0px_10px_2px]` : `shadow-transparent`}`}
              onClick={() => {
                if (data.paid === false) {
                  setData({ ...data, paid: null });
                } else setData({ ...data, paid: false });
              }}
            >
              Z budżetem
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-6">
            <button
              className={`shadow-blue-300 shadow-[0px_0px_10px_2px] ${data.location != null && data.location == "indoor" ? `shadow-${data.type} shadow-[0px_0px_10px_2px]` : `shadow-transparent`}`}
              onClick={() => {
                if (data.location === "indoor") {
                  setData({ ...data, location: null });
                } else setData({ ...data, location: "indoor" });
              }}
            >
              W domu
            </button>
            <button
              className={`shadow-blue-300 shadow-[0px_0px_10px_2px] ${data.location != null && data.location == "outdoor" ? `shadow-${data.type} shadow-[0px_0px_10px_2px]` : `shadow-transparent`}`}
              onClick={() => {
                if (data.location === "outdoor") {
                  setData({ ...data, location: null });
                } else setData({ ...data, location: "outdoor" });
              }}
            >
              Poza domem
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Buttons;
