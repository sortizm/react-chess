import React, {useState} from 'react'
import Board from "./Board";
import {Types} from "./BoardCell";

const Chess = () => {
    const [pieces, setPieces] = useState(standardChessPieces);

    return (
        <Board numRows={rows} numColumns={cols} pieces={pieces}/>
    )
};

const rows = 8;
const cols = 8;
const standardChessPieces = [
    {key: "WR1", type: Types.WHITE_ROOK, row: 0, col: 0},
    {key:"WN1", type:Types.WHITE_KNIGHT, row:0, col:1},
    {key:"WB1", type:Types.WHITE_BISHOP, row:0, col:2},
    {key:"WQ", type:Types.WHITE_QUEEN, row:0, col:3},
    {key:"WK", type:Types.WHITE_KING, row:0, col:4},
    {key:"WB2", type:Types.WHITE_BISHOP, row:0, col:5},
    {key:"WN2", type:Types.WHITE_KNIGHT, row:0, col:6},
    {key:"WR2", type:Types.WHITE_ROOK, row:0, col:7},

    ...Array(8).fill(0).map((_, i) =>
        ({key:"WP"+i, type:Types.WHITE_PAWN, row: 1, col: i})),

    {key:"BR1", type:Types.BLACK_ROOK, row:7, col:0},
    {key:"BN1", type:Types.BLACK_KNIGHT, row:7, col:1},
    {key:"BB1", type:Types.BLACK_BISHOP, row:7, col:2},
    {key:"BQ", type:Types.BLACK_QUEEN, row:7, col:3},
    {key:"BK", type:Types.BLACK_KING, row:7, col:4},
    {key:"BB2", type:Types.BLACK_BISHOP, row:7, col:5},
    {key:"BN2", type:Types.BLACK_KNIGHT, row:7, col:6},
    {key:"BR2", type:Types.BLACK_ROOK, row:7, col:7},

    ...Array(8).fill(0).map((_, i) =>
        ({key:"BP"+i, type:Types.BLACK_PAWN, row: 6, col: i})),
];


export default Chess;
