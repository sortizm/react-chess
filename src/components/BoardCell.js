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

    const movePiece = (piece, row, col) => {
        updatePiece(piece.key, {...piece, col: col, row: row});
    };

    const capturePiece = (piece) => {
        updatePiece(piece.key, {...piece, col: -1, row: -1});
    };

    const resetSelected = () => {
        setSelectedCell([]);
    };

    const onCellClick = () => {
        if (isPieceSelected) {
            resetSelected();
        } else {
            if (pieceInSelectedCell) {
                movePiece(pieceInSelectedCell, row, col);
                resetSelected();
                if (pieceInCell) {
                    capturePiece(pieceInCell);
                }
            } else {
                setSelectedCell([row, col]);
            }
        }
    };

    const imageInCell = pieceInCell ? <img key={pieceInCell.key} src={pieceInCell.image}/>
        : <img/>;
    return (
        <div className={cellStyle} onClick={onCellClick}>
            {imageInCell}
        </div>
    )
};

export default BoardCell;
