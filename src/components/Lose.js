import React from "react";
import "../App.css";

export default function Lose({ isWinner }) {
  return (
    <div className="myModal">
        <div className="modalCenterV">
            <h1 className="winMessage">You Lose</h1>
        </div>      
    </div>
  );
}