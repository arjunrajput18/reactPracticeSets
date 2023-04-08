import React from "react";

export const ShowHabbitTracker = ({ HabbitData }) => {
  return (
    <>
      <ul>
        {HabbitData.map(({ title, desc, daysFollowed, daysSkipped }, i) => (
          <li key={i}>
            <div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <p>
                <strong>days Followed:</strong>
                 {daysFollowed}
              </p>
              <p>
                <strong>days Skipped: </strong>
                 {daysSkipped}
              </p>
              <hr />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
