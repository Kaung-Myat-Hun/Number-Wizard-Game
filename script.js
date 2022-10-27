'use strict'

const ruleHandler = ()=>{
  alert("Rules of the game\n You can take a number between 1 and 1000 and let guess the computer until the answer is correct\n Thanks....")
}

let answer = document.getElementById("answerNumber");
let max = 1000;
let min = 1;
let guess;


const startHandler =()=>{ //Game Start 

  function nextGuess(min, max) { //Guess is starting
    guess = Math.trunc(Math.random()* (max-min)+min);
    console.log(guess);
  }

  console.log('Clicked start');
  document.querySelector('.start').setAttribute('disabled',"null");
  nextGuess(min , max );
  answer.textContent= guess.toString();

  const highBtn = document.querySelector('.high');
  highBtn.addEventListener("click", ()=>{ //Too high function
    max = guess +1;
    nextGuess(min , max );
    answer.textContent= guess.toString();
    console.log('clicked');
  })

  const lowBtn = document.querySelector('.low');
  lowBtn.addEventListener('click',()=>{ //Too low function
    min= guess+1;
    nextGuess(min , max );
    answer.textContent= guess.toString();
    console.log('clicked')
  })

  const correctBtn = document.querySelector('.correct');
  correctBtn.addEventListener('click', ()=>{ // Correct Function and restart game
    console.log('clicked');
    alert('I am right!')
    window.location.reload();
  })

}

// const highHandler = ()=>{
//   console.log("clicked");
// }
// const lowHandler = ()=>{
//   console.log("clicked");
// }
// const correctHandler = ()=>{
//   console.log("clicked");
//   alert('I am right!')
//   window.location.reload();

// }