var count = 0;
var userScore = 0;
var computerScore = 0;

function getComputerChoice(){
    choice_value = Math.random(0,1);
    if (choice_value < 0.33)
    {
        return "rock";
    }
    else if (choice_value < 0.66)
    {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(userChoice, computerChoice)
{
    if (userScore > 5 || computerScore > 5)
    {
        const gamewinner = document.querySelector("#gameWinner");
        gamewinner.textContent = userScore > computerScore ? "I am the winner" : "You are the winner";
        return;
    }

    const mychoice = document.querySelector("#mychoice");
    const winner = document.querySelector("#winner");
    mychoice.textContent = computerChoice;
    if(computerChoice == userChoice)
    {
        winner.textContent="Draw!";
    }
    else if (computerChoice == "rock")
    {
        if(userChoice == "paper")
        {
            winner.textContent = "You win!";
            userScore ++;
        }
        else {
            winner.textContent = "I win!";
            computerScore ++;
        }
    }
    else if(computerChoice == "paper")
    {
        if(userChoice == "scissors")
        {
            winner.textContent="You win!";
            userScore ++;
        }
        else {
            winner.textContent = "I win!";
            computerScore ++; 
        }
    }
    else if (computerChoice == "scissors")
    {
        if(userChoice == "rock")
        {
            winner.textContent = "You win!";
            userScore ++;
        }
        else {
            winner.textContent = "I win!";
            computerScore ++;
        }
    }


}

menu.addEventListener('click', (event) => {
    let target = event.target;

    playRound(target.id,getComputerChoice());
});


/*function startGame()
{

    while(count < 5)
    {
        var userChoice = prompt("enter choice");
        var computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
        count ++;
    }
    console.log("my score:" + computerScore);
    console.log("your score:" + userScore);
    if(userScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if(userScore < computerScore)
    {
        console.log("I win the game!");
    }
    else {
        console.log("Draw game!");
    }
} */