import React, {useState} from 'react'
import BoardCell from "./BoardCell";

import "./Board.css"

const Board = ({pieces, numRows, numColumns, updatePiece}) => {

    const [selectedCell, setSelectedCell] = useState([]);

    const board = Array(numRows).fill(Array(numColumns).fill(""));
    //const transposed = matrix.map((col, c) => matrix.map((row, r) => matrix[r][c]));

    return (
        <div className={"grid"}>
            {board.map((row, r) => row.map((_, c) => {
                const col = numColumns - c - 1;
                return <BoardCell key={r*numColumns + c}
                                  pieces={pieces} row={r} col={col}
                                  selectedCell={selectedCell}
                                  setSelectedCell={setSelectedCell}
                                  updatePiece={updatePiece}
                />
            }
            ))}
        </div>
    )
};

export default Board;