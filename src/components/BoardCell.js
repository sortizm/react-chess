import React from 'react'

import BlackQueen from '../images/black_queen.svg'
import BlackKing from '../images/black_king.svg'
import BlackPawn from '../images/black_pawn.svg'
import BlackBishop from '../images/black_bishop.svg'
import BlackKnight from '../images/black_knight.svg'
import BlackRook from '../images/black_rook.svg'
import WhiteQueen from '../images/white_queen.svg'
import WhiteKing from '../images/white_king.svg'
import WhitePawn from '../images/white_pawn.svg'
import WhiteBishop from '../images/white_bishop.svg'
import WhiteKnight from '../images/white_knight.svg'
import WhiteRook from '../images/white_rook.svg'

import './BoardCell.css';

const BoardCell = ({pieces, row, col}) => {

    const piecesInCell = pieces.filter(p => p.row === row && p.col === col);
    const cellStyle = "cell " + (row%2 === col%2 ? 'black-cell' : 'white-cell');

    return (
        <div className={cellStyle}>
            {piecesInCell.map(piece => <img key={piece.key} src={piece.type.image}/>)}
        </div>
    )
};

export const Types = {
    BLACK_QUEEN: {name: 'BLACK_QUEEN', image: BlackQueen},
    BLACK_KING: {name: 'BLACK_KING', image: BlackKing},
    BLACK_PAWN: {name: 'BLACK_PAWN', image: BlackPawn},
    BLACK_BISHOP: {name: 'BLACK_BISHOP', image: BlackBishop},
    BLACK_KNIGHT: {name: 'BLACK_KNIGHT', image: BlackKnight},
    BLACK_ROOK: {name: 'BLACK_ROOK', image: BlackRook},
    WHITE_QUEEN: {name: 'WHITE_QUEEN', image: WhiteQueen},
    WHITE_KING: {name: 'WHITE_KING', image: WhiteKing},
    WHITE_PAWN: {name: 'WHITE_PAWN', image: WhitePawn},
    WHITE_BISHOP: {name: 'WHITE_BISHOP', image: WhiteBishop},
    WHITE_KNIGHT: {name: 'WHITE_KNIGHT', image: WhiteKnight},
    WHITE_ROOK: {name: 'WHITE_ROOK', image: WhiteRook},
};

export default BoardCell;
