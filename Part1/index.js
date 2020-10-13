console.log("Welcome to the Jungle!!");

let board = [];


function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  console.log(board);

  const topLeft = board[0];
  const topMiddle = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleMiddle = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomMiddle = board[7];
  const bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert(`${topLeft} is the winner!`);
  }
  if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  } else if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  } else if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  } else if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    alert(`${topMiddle} is the winner`);
    return;
  } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  } else if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  else if (bottomLeft !== undefined && bottomLeft === middleMiddle && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }return boardFull
}
