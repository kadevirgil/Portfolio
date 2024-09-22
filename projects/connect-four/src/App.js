import { useState } from "react";

function Square({ value, onSquareClick }) {
  const style = {
    // If the value of the sqare is 'X' turn the text color red if the vlaue is 'O' turn the text color yellow
    // If the value if isn't 'X' or 'O' (which it should never be) we will have a default value of black
    color: value === "Red" ? "red" : value === "Yellow" ? "yellow" : "black",
    // We will do the same thing with the background color
    backgroundColor:
      value === "Red" ? "red" : value === "Yellow" ? "yellow" : "white",
  };

  return (
    <button className="square" onClick={onSquareClick} style={style}>
      {value}
    </button>
  );
}

export default function Board() {
  const [redIsNext, setRedIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);
  const ROWS = 6;
  const COLUMNS = 7;
  const [squares, setSquares] = useState(Array(ROWS * COLUMNS).fill(null));

  function handleClick(column) {
    if (winner || tie) {
      return; // Ignore clicks if there's already a winner or a tie
    }

    const index = findNextOpenIndex(column);
    if (index === null) {
      // Ignore clicks if there is the column is full
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = redIsNext ? "Red" : "Yellow";
    setSquares(nextSquares);

    const { winner: newWinner, isTie } = checkWinnerAndTie(nextSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else if (isTie) {
      setTie(true);
    } else {
      setRedIsNext(!redIsNext);
    }
  }

  function findNextOpenIndex(column) {
    for (let row = ROWS - 1; row >= 0; row--) {
      const index = row * COLUMNS + column;
      if (squares[index] === null) {
        return index;
      }
    }
    return null;
  }

  function checkWinnerAndTie(board) {
    const winningCombinations = [
      // Horizontal
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
      [8, 9, 10, 11],
      [9, 10, 11, 12],
      [10, 11, 12, 13],
      [14, 15, 16, 17],
      [15, 16, 17, 18],
      [16, 17, 18, 19],
      [17, 18, 19, 20],
      [21, 22, 23, 24],
      [22, 23, 24, 25],
      [23, 24, 25, 26],
      [24, 25, 26, 27],
      [28, 29, 30, 31],
      [29, 30, 31, 32],
      [30, 31, 32, 33],
      [31, 32, 33, 34],
      [35, 36, 37, 38],
      [36, 37, 38, 39],
      [37, 38, 39, 40],
      [38, 39, 40, 41],

      // Vertical
      [0, 7, 14, 21],
      [7, 14, 21, 28],
      [14, 21, 28, 35],
      [1, 8, 15, 22],
      [8, 15, 22, 29],
      [15, 22, 29, 36],
      [2, 9, 16, 23],
      [9, 16, 23, 30],
      [16, 23, 30, 37],
      [3, 10, 17, 24],
      [10, 17, 24, 31],
      [17, 24, 31, 38],
      [4, 11, 18, 25],
      [11, 18, 25, 32],
      [18, 25, 32, 39],
      [5, 12, 19, 26],
      [12, 19, 26, 33],
      [19, 26, 33, 40],
      [6, 13, 20, 27],
      [13, 20, 27, 34],
      [20, 27, 34, 41],

      // Diagonal down-right
      [0, 8, 16, 24],
      [1, 9, 17, 25],
      [2, 10, 18, 26],
      [3, 11, 19, 27],
      [7, 15, 23, 31],
      [8, 16, 24, 32],
      [9, 17, 25, 33],
      [10, 18, 26, 34],
      [14, 22, 30, 38],
      [15, 23, 31, 39],
      [16, 24, 32, 40],
      [17, 25, 33, 41],

      // Diagonal down-left
      [3, 9, 15, 21],
      [4, 10, 16, 22],
      [5, 11, 17, 23],
      [6, 12, 18, 24],
      [10, 16, 22, 28],
      [11, 17, 23, 29],
      [12, 18, 24, 30],
      [13, 19, 25, 31],
      [17, 23, 29, 35],
      [18, 24, 30, 36],
      [19, 25, 31, 37],
      [20, 26, 32, 38],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c, d] = combination;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c] &&
        board[a] === board[d]
      ) {
        return { winner: board[a], isTie: false };
      }
    }

    const isTie = board.every((square) => square !== null);
    return { winner: null, isTie };
  }

  return (
    <>
      <div className="status">
        {winner
          ? `Winner: ${winner}`
          : tie
          ? "It's a tie!"
          : `Next player: ${redIsNext ? "Red" : "Yellow"}`}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[10]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[12]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[14]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[15]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[16]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[17]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[18]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[19]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[20]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[21]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[22]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[23]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[24]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[25]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[26]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[27]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[28]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[29]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[30]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[31]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[32]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[33]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[34]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[35]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[36]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[37]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[38]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[39]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[40]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[41]} onSquareClick={() => handleClick(6)} />
      </div>
    </>
  );
}
