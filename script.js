const cells=document.querySelectorAll('.cell');
let player1='X';
let player2='O';
let turn=true;
function handleClick(event){
    const p=event.target.querySelector('p');
    if(p.innerHTML==''){
        if(turn){
        p.innerHTML=player1;
        p.style.color='red';
        turn=false;
        }
        else{
            p.innerHTML=player2;
            p.style.color='green';
            turn=true;
        }
    }
    checkWinner();
    }
cells.forEach(element => {
    element.addEventListener("click",handleClick);
});
function clearBoard(){
    let para=document.querySelectorAll('p');
    para.forEach(element=>{
        element.innerHTML='';
    });
    turn=true;
}
function checkWinner(){
    const winPattern=[ [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]];
    const currBoard=Array.from(cells).map(cell=>cell.querySelector('p').innerHTML);
    //create a board with each cell filled with the text of p tags of each cell either X or O
    for(const row of winPattern){
        const [a,b,c]=row;//row indices of winPatterns
        if(currBoard[a]!='' && currBoard[a]==currBoard[b] && currBoard[b]==currBoard[c]){//winning pattern
            setTimeout(()=>{
                alert(`Player ${currBoard[a]} is the winner!`);
                clearBoard();
            },100);
        }
    }
    if(currBoard.every(cell=>cell!='')){
        setTimeout(()=>{
            alert(`It is a draw!`);
            clearBoard();
        },100);
        }
}

