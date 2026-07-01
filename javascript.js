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
    if(computerChoice == userChoice)
    {
        console.log("my choice:" + computerChoice);
        console.log("Draw!");
    }
    else if (computerChoice == "rock")
    {
        console.log("my choice:" + computerChoice);
        if(userChoice == "paper")
        {
            console.log("You win!");
            userScore ++;
        }
        else {
            console.log("i win!");
            computerScore ++;
        }
    }
    else if(computerChoice == "paper")
    {
        console.log("my choice:" + computerChoice);
        if(userChoice == "scissors")
        {
            console.log("You win!");
            userScore ++;
        }
        else {
            console.log("i win!");
            computerScore ++; 
        }
    }
    else if (computerChoice == "scissors")
    {
        console.log("my choice:" + computerChoice);
        if(userChoice == "rock")
        {
            console.log("You win!");
            userScore ++;
        }
        else {
            console.log("i win!");
            computerScore ++;
        }
    }

}

function startGame()
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
}