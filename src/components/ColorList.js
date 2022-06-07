import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((colorEl) => {
    return <li key={colorEl} style={{color: colorEl}}>{colorEl}</li>
  })

  return (
    <>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </>
  );
}

export default ColorList;
