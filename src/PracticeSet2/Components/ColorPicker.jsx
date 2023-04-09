import { useState } from "react";

const ButtonWithText = ({ label, hexCode }) => {
  const [showHexCode, setShowHexCode] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setShowHexCode(!showHexCode)}>{label}</button>
        {showHexCode && <p>{hexCode}</p>}
      </div>
      <br></br>
    </>
  );
};

export const ColorPicker = ({ red, blue, green }) => {
  return (
    <>
      <ButtonWithText label={"red Color"} hexCode={red} />
      <ButtonWithText label={"blue Color"} hexCode={blue} />
      <ButtonWithText label={"green Color"} hexCode={green} />
    </>
  );
};
