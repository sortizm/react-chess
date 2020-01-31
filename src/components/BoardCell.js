import React from 'react'

import './BoardCell.scss';

const BoardCell = ({pieces, row, col, selectedCell, setSelectedCell, updatePiece}) => {

    const pieceInPosition = (row, col) => {
        if (row === undefined || col === undefined)
            return undefined;
        for (let pieceKey in pieces) {
            let piece = pieces[pieceKey];
            if (piece.col === col && piece.row === row)
                return piece;
        }
    };

    const pieceInCell = pieceInPosition(row, col);
    const pieceInSelectedCell = pieceInPosition(...selectedCell);
    const isPieceSelected = pieceInCell && pieceInSelectedCell && pieceInCell.key === pieceInSelectedCell.key;

    const cellStyle = "cell " + (row%2 === col%2 ? 'black-cell' : 'white-cell') +
        (isPieceSelected? ' highlighted' : '');

    const onSelected = () => {
        if (isPieceSelected) {
            setSelectedCell([]);
        } else {
            if (pieceInSelectedCell) {
                updatePiece(pieceInSelectedCell.key, {...pieceInSelectedCell, col: col, row: row});
                setSelectedCell([]);
            } else {
                setSelectedCell([row, col]);
            }
        }
    };

    const imageInCell = pieceInCell ? <img key={pieceInCell.key} src={pieceInCell.image}/>
        : <img/>;
    return (
        <div className={cellStyle} onClick={onSelected}>
            {imageInCell}
        </div>
    )
};

export default BoardCell;
