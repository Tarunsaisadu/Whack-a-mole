const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score =document.querySelector('#score');

let result=0;
let currentTime = timeLeft.textContent;

// remove the mole form grid and add it to random square in grid
//The forEach() method calls a function once for each element in an array, in order.
function randomSquare(){
    square.forEach(className =>{
    //The classList property returns the class name(s) of an element, as a DOMTokenList object.
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole')

    // we need to assign the randomposition to hitposition to use it later
     hitPosition = randomPosition.id
}

  square.forEach(id=>{
      id.addEventListener('mouseup', () =>{
          if(id.id===hitPosition){
              result=result+1;
              score.textContent=result
          }
      })
  })

  // move the mole within intervals

  function moveMole(){
     let timerId=null;
      timerId=setInterval(randomSquare,800)
  }

  moveMole();

  function countDown() {
      currentTime--;
      timeLeft.textContent= currentTime;

      if(currentTime===0){
          clearInterval(timerId)
          alert('Game over!! your final score is' +  result)
      }
  }

  let timerId = setInterval(countDown,800);