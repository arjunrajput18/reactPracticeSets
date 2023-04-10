import React, { useState } from "react";

export const HabitTracker2Q = ({ showData }) => {
  const [archivedData, setArchivedData] = useState(true);
  const clickHandler = () => {
    setArchivedData(!archivedData);
  };

  const filterData = archivedData
    ? showData.filter(({ archived }) => archived === false)
    : showData.filter(({ archived }) => archived === true);
  return (
    <>
      <h2>{archivedData ? "Unarchived" : "archived"}</h2>
      {filterData.map(
        ({ daysFollowed, daysSkipped, archived, desc, title }) => (
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div>
              <strong>Days Followed</strong>: {daysFollowed}
            </div>
            <div>
              <strong>days Skipped</strong>: {daysSkipped}
            </div>
          </div>
        )
      )}

      <button onClick={clickHandler}>
        {archivedData ? "Show Archives" : "show Unarchived"}
      </button>
    </>
  );
};
