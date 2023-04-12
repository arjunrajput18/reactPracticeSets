import React from "react";

export const SuperPower = ({ cartoons, data }) => {
  const superPowerIntelligence = cartoons.filter(
    ({ superpower }) => superpower === data
  );
console.log(!superPowerIntelligence)
  return (
    <>
      <ul>
        {superPowerIntelligence && superPowerIntelligence.map(({ id, name, superpower, magnitude }) => (
          <li>
            {name} - {superpower} - {magnitude}
          </li>
        ))}
      </ul>
      {!superPowerIntelligence.length && <p>not found superpower</p>}
    </>
  );
};
