const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, board) {
  const ballEl = document.querySelector(ball);
  const boardEl = document.querySelector(board);

  let ballLimits = ballEl.getBoundingClientRect();
  let boardLimits = boardEl.getBoundingClientRect();

  console.log(ballLimits, boardLimits);

  switch (e.key) {
    case "ArrowUp":
      {
        if(ballLimits.top > boardLimits.top){
            y -= 1;
            e.preventDefault();
        }
      }
      break;
    case "ArrowDown":
      {
        if(ballLimits.bottom < boardLimits.bottom-10){
            y += 1;
            e.preventDefault();
        }
      }
      break;
    case "ArrowLeft":
      {
        if(ballLimits.left > boardLimits.left+10)
            x -= 1;
        e.preventDefault();
      }
      break;
    case "ArrowRight":
      {
        if(ballLimits.right < boardLimits.right-10)
            x += 1;
        e.preventDefault();
      }
      break;
  }
  ballEl.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
