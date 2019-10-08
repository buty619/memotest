import React, { useState, useEffect } from "react";
import match from "./function/match";
import Board from "./components/Board";
import Lose from "./components/Lose";
import "./App.css";

const grid = [["", "", ""], ["", "", ""], ["", "", ""]];

function App() {
  const [active, setActive] = useState(null);
  const [sequence, setSequence] = useState([]);
  const [userGame, setUserGame] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [userTurn, setUserTurn] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (sequence[i]) {
        setActive(sequence[i]);
        i++;
      } else {
        setActive([]);
        setUserGame([]);
        setUserTurn(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sequence]);

  useEffect(() => {
    const completed = userGame.length === sequence.length;
    const success = match(userGame, sequence);
    setGameOver(!success);
    if (completed) {
      const randomRow = Math.floor(Math.random() * 3);
      const randomElement = Math.floor(Math.random() * 3);
      const next = [...sequence, [randomRow, randomElement]];
      setSequence(next);
      setUserTurn(false);
    }
  }, [userGame, sequence]);

  const handleClick = coordinate => {
    if (userTurn && !gameOver) {
      setUserGame([...userGame, coordinate]);
      setActive(coordinate);
      setTimeout(() => setActive([]), 1000);
    }
  };

  /////////////////////////////////////////////////////////////////////////

  // const [active, setActive] = useState(null);
  // const [cpuGame, setCpuGame] = useState([]);
  // const [userGame, setUserGame] = useState([]);
  // const [userRound, setUserRound] = useState(false); //user end round
  // const [isCorrect, setIsCorrect] = useState(true); //it's doing OK
  // const [roundOver, setRoundOver] = useState(false); //next level

  // useEffect(() => {
  //   if (isCorrect) {
  //     const randomRow = Math.floor(Math.random() * 3);
  //     const randomElement = Math.floor(Math.random() * 3);
  //     const addOne = [...cpuGame, [randomRow, randomElement]];
  //     setCpuGame(addOne);
  //     setUserGame([]);
  //     addOne.forEach((set, index) => {
  //       setTimeout(() => {
  //         setActive(set);
  //         if (index + 1 === addOne.length) {
  //           setUserRound(true);
  //           setTimeout(() => setActive([]), 1000);
  //         }
  //       }, 1000 * (index + 1));
  //     });
  //   } else {
  //     setUserRound(false);
  //   }
  // }, [setActive, roundOver, isCorrect]);

  // const handleClick = (iRow, iElement) => {
  //   if (userRound) {
  //     setActive([iRow, iElement]);
  //     const addOne = [...userGame, [iRow, iElement]];
  //     setUserGame(addOne);
  //     setTimeout(() => setActive([]), 1000);
  //     setIsCorrect(match(addOne, cpuGame));
  //     if (cpuGame.length === userGame.length + 1) {
  //       setRoundOver(!roundOver);
  //       setUserRound(false);
  //     }
  //   }
  // };

  return (
    <div>
      <table className="game-board">
        {active && <Board grid={grid} onClick={handleClick} active={active} />}
      </table>
      {gameOver ? <Lose /> : <h1>Level {sequence.length}</h1>}
    </div>
  );
}

export default App;
