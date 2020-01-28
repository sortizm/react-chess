import React, {useState} from 'react'
import BoardCell from "./BoardCell";

import "./Board.css"

const Board = ({pieces, numRows, numColumns}) => {

    const [selected, setSelected] = useState([]);

    const board = Array(numRows).fill(Array(numColumns).fill(""));
    //const transposed = matrix.map((col, c) => matrix.map((row, r) => matrix[r][c]));

    return (
        <div className={"grid"}>
            {board.map((row, r) => row.map((_, c) => {
                const col = numColumns - c - 1;
                return <BoardCell key={r*numColumns + c}
                                  pieces={pieces} row={r} col={col}
                                  selected={selected}
                                  setSelected={setSelected} />
            }
            ))}
        </div>
    )
};

export default Board;