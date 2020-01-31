import React, {useState} from 'react'
import Board from "./Board";
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

const Chess = () => {
    const [pieces, setPieces] = useState(standardChessPieces);

    const updatePiece = (pieceKey, piece) => {
        pieces[pieceKey] = piece;
        setPieces(pieces);
    };

    return (
        <Board numRows={rows} numColumns={cols} pieces={pieces} updatePiece={updatePiece}/>
    )
};

const rows = 8;
const cols = 8;
const standardChessPieces = {
    "WR1": {key:"WR1", image: WhiteRook, row: 0, col: 0},
    "WN1": {key:"WN1", image: WhiteKnight, row:0, col:1},
    "WB1": {key:"WB1", image: WhiteBishop, row:0, col:2},
    "WQ" : {key:"WQ", image: WhiteQueen, row:0, col:3},
    "WK" : {key:"WK", image: WhiteKing, row:0, col:4},
    "WB2": {key:"WB2", image: WhiteBishop, row:0, col:5},
    "WN2": {key:"WN2", image: WhiteKnight, row:0, col:6},
    "WR2": {key:"WR2", image: WhiteRook, row:0, col:7},

    "WP1": {key:"WP1", image: WhitePawn, row: 1, col: 0},
    "WP2": {key:"WP2", image: WhitePawn, row: 1, col: 1},
    "WP3": {key:"WP3", image: WhitePawn, row: 1, col: 2},
    "WP4": {key:"WP4", image: WhitePawn, row: 1, col: 3},
    "WP5": {key:"WP5", image: WhitePawn, row: 1, col: 4},
    "WP6": {key:"WP6", image: WhitePawn, row: 1, col: 5},
    "WP7": {key:"WP7", image: WhitePawn, row: 1, col: 6},
    "WP8": {key:"WP8", image: WhitePawn, row: 1, col: 7},

    "BR1": {key:"BR1", image: BlackRook, row:7, col:0},
    "BN1": {key:"BN1", image: BlackKnight, row:7, col:1},
    "BB1": {key:"BB1", image: BlackBishop, row:7, col:2},
    "BQ": {key:"BQ", image: BlackQueen, row:7, col:3},
    "BK": {key:"BK", image: BlackKing, row:7, col:4},
    "BB2": {key:"BB2", image:  BlackBishop, row:7, col:5},
    "BN2": {key:"BN2", image: BlackKnight, row:7, col:6},
    "BR2": {key:"BR2", image: BlackRook, row:7, col:7},

    "BP1": {key:"BP1", image: BlackPawn, row: 6, col: 0},
    "BP2": {key:"BP2", image: BlackPawn, row: 6, col: 1},
    "BP3": {key:"BP3", image: BlackPawn, row: 6, col: 2},
    "BP4": {key:"BP4", image: BlackPawn, row: 6, col: 3},
    "BP5": {key:"BP5", image: BlackPawn, row: 6, col: 4},
    "BP6": {key:"BP6", image: BlackPawn, row: 6, col: 5},
    "BP7": {key:"BP7", image: BlackPawn, row: 6, col: 6},
    "BP8": {key:"BP8", image: BlackPawn, row: 6, col: 7}
};

export default Chess;
