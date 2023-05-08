import { useState } from 'react'
import './App.css'

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  const index = 0;
  const onSquareClick = (i) => {
    const nextSquares = [...squares]
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className='board-row'>
        <Square onSquareClick={() => onSquareClick(0)} value={squares[0]} />
        <Square onSquareClick={() => onSquareClick(1)} value={squares[1]} />
        <Square onSquareClick={() => onSquareClick(2)} value={squares[2]} />
      </div>
      <div className='board-row'>
        <Square onSquareClick={() => onSquareClick(3)} value={squares[3]} />
        <Square onSquareClick={() => onSquareClick(4)} value={squares[4]} />
        <Square onSquareClick={() => onSquareClick(5)} value={squares[5]} />
      </div>
      <div className='board-row'>
        <Square onSquareClick={() => onSquareClick(6)} value={squares[6]} />
        <Square onSquareClick={() => onSquareClick(7)} value={squares[7]} />
        <Square onSquareClick={() => onSquareClick(8)} value={squares[8]} />
      </div>
    </>
  )
}

function Square({ value, onSquareClick }) {

  return (
    <button onClick={onSquareClick} className="square">{value}</button>
  )
}