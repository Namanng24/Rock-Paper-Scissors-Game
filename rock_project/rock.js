let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin==true){
        console.log("you Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userScore.innerText=userscore;
    }
    else{
        console.log("you lose!");
        msg.innerText=`You Lose! Computer's ${CompChoice} beats ${userChoice}`; 
        msg.style.backgroundColor="red";
        compscore++;
        compScore.innerText=compscore;
    }
}
const playGame=(userChoice)=>{
    console.log("userChoice:",userChoice);
    // Generate Computer Choice
    const CompChoice= genComputerChoice();
    console.log("CompChoice:",CompChoice);
    if(userChoice == CompChoice){
        console.log("Game was Drawn");
        msg.innerText="Game was Drawn! Play again.";
        msg.style.backgroundColor="Blue";
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            if(CompChoice=="paper"){
                userWin=false;
            }
            else userWin=true;
        }
        if(userChoice=="paper"){
            if(CompChoice=="rock"){
                userWin=true;
            }
            else userWin=false;
        }
        if(userChoice=="scissors"){
            if(CompChoice=="paper"){
                userWin=true;
            }
            else userWin=false;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
