let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randomIdx=Math.floor(Math.random()*3);
     return options[randomIdx];
}


const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#081b31";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!!");
        msg.innerText=`You Win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
       console.log("user choice = ",userChoice);
       const compChoice=genCompChoice();
       console.log("comp choice = ",compChoice);
       if(userChoice===compChoice){
        //DrawGame
        drawGame();}
       else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp-->paper,scissors
           userWin= compChoice==="paper"?false:true; }
        else if(userChoice==="paper"){
            //comp-->rock,scissors
          userWin=  compChoice==="scissors"?false:true; }
        else{
          //comp-->paper,rock
          userWin=  compChoice==="scissors"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
       }
};

choice.forEach((choice)=>{
       choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
       });
});