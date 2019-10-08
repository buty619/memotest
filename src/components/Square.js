import React from "react";
import "../App.css";

export default function Square({ row, iRow, active, onClick: handleClick }) {
  return (
    <tr key={iRow}>
      {row.map((element, iElement) => (
        <td
          key={iElement}
          className={
            active[0] === iRow && active[1] === iElement ? "active" : null
          }
          onClick={() => handleClick(iElement)}
        />
      ))}
    </tr>
  );
}
