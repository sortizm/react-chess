(this["webpackJsonpreact-chess"]=this["webpackJsonpreact-chess"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/black_queen.7b3e33e4.svg"},function(e,t,n){e.exports=n.p+"static/media/black_king.66e1bcad.svg"},function(e,t,n){e.exports=n.p+"static/media/black_pawn.1c52d8c4.svg"},function(e,t,n){e.exports=n.p+"static/media/black_bishop.1f3b8d1a.svg"},function(e,t,n){e.exports=n.p+"static/media/black_knight.d39f1d02.svg"},function(e,t,n){e.exports=n.p+"static/media/black_rook.96872a66.svg"},function(e,t,n){e.exports=n.p+"static/media/white_queen.4320a2dd.svg"},function(e,t,n){e.exports=n.p+"static/media/white_king.250510ff.svg"},function(e,t,n){e.exports=n.p+"static/media/white_pawn.d69014fb.svg"},function(e,t,n){e.exports=n.p+"static/media/white_bishop.09004fd2.svg"},function(e,t,n){e.exports=n.p+"static/media/white_knight.e6294efe.svg"},function(e,t,n){e.exports=n.p+"static/media/white_rook.095b1a06.svg"},,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),i=n.n(c),r=(n(22),n(23),n(1)),s=n(16),l=n(4),m=n.n(l),p=n(5),u=n.n(p),_=n(6),y=n.n(_),K=n(7),B=n.n(K),I=n(8),f=n.n(I),E=n(9),w=n.n(E),k=n(10),W=n.n(k),H=n(11),g=n.n(H),N=n(12),d=n.n(N),A=n(13),T=n.n(A),O=n(14),v=n.n(O),C=n(15),h=n.n(C),L=(n(24),{BLACK_QUEEN:{name:"BLACK_QUEEN",image:m.a},BLACK_KING:{name:"BLACK_KING",image:u.a},BLACK_PAWN:{name:"BLACK_PAWN",image:y.a},BLACK_BISHOP:{name:"BLACK_BISHOP",image:B.a},BLACK_KNIGHT:{name:"BLACK_KNIGHT",image:f.a},BLACK_ROOK:{name:"BLACK_ROOK",image:w.a},WHITE_QUEEN:{name:"WHITE_QUEEN",image:W.a},WHITE_KING:{name:"WHITE_KING",image:g.a},WHITE_PAWN:{name:"WHITE_PAWN",image:d.a},WHITE_BISHOP:{name:"WHITE_BISHOP",image:T.a},WHITE_KNIGHT:{name:"WHITE_KNIGHT",image:v.a},WHITE_ROOK:{name:"WHITE_ROOK",image:h.a}}),b=function(e){var t=e.pieces,n=e.row,a=e.col,c=t.filter((function(e){return e.row===n&&e.col===a})),i="cell "+(n%2===a%2?"black-cell":"white-cell");return o.a.createElement("div",{className:i},c.map((function(e){return o.a.createElement("img",{key:e.key,src:e.type.image})})))},P=(n(25),function(e){var t=e.pieces,n=e.numRows,a=e.numColumns,c=Array(n).fill(Array(a).fill(""));return o.a.createElement("div",{className:"grid"},c.map((function(e,n){return e.map((function(e,c){var i=a-c-1;return o.a.createElement(b,{key:n*a+c,pieces:t,row:n,col:i})}))})))}),G=8,R=8,x=[{key:"WR1",type:L.WHITE_ROOK,row:0,col:0},{key:"WN1",type:L.WHITE_KNIGHT,row:0,col:1},{key:"WB1",type:L.WHITE_BISHOP,row:0,col:2},{key:"WQ",type:L.WHITE_QUEEN,row:0,col:3},{key:"WK",type:L.WHITE_KING,row:0,col:4},{key:"WB2",type:L.WHITE_BISHOP,row:0,col:5},{key:"WN2",type:L.WHITE_KNIGHT,row:0,col:6},{key:"WR2",type:L.WHITE_ROOK,row:0,col:7}].concat(Object(r.a)(Array(8).fill(0).map((function(e,t){return{key:"WP"+t,type:L.WHITE_PAWN,row:1,col:t}}))),[{key:"BR1",type:L.BLACK_ROOK,row:7,col:0},{key:"BN1",type:L.BLACK_KNIGHT,row:7,col:1},{key:"BB1",type:L.BLACK_BISHOP,row:7,col:2},{key:"BQ",type:L.BLACK_QUEEN,row:7,col:3},{key:"BK",type:L.BLACK_KING,row:7,col:4},{key:"BB2",type:L.BLACK_BISHOP,row:7,col:5},{key:"BN2",type:L.BLACK_KNIGHT,row:7,col:6},{key:"BR2",type:L.BLACK_ROOK,row:7,col:7}],Object(r.a)(Array(8).fill(0).map((function(e,t){return{key:"BP"+t,type:L.BLACK_PAWN,row:6,col:t}})))),S=function(){var e=Object(a.useState)(x),t=Object(s.a)(e,2),n=t[0];t[1];return o.a.createElement(P,{numRows:G,numColumns:R,pieces:n})};var Q=function(){return o.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.756e020a.chunk.js.map