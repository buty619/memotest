import React from "react";
import Square from "./Square";
import "../App.css";

export default function Board({ grid, active, onClick: handleClick }) {
  return (
    <tbody>
      {grid.map((row, iRow) => (
        <Square
          row={row}
          iRow={iRow}
          onClick={iElement => handleClick([iRow, iElement])}
          key={iRow}
          active={active}
        />
      ))}
    </tbody>
  );
}
