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

function startGame()
{
    var userChoice = prompt("enter choice");
    var computerChoice = getComputerChoice();
    if(computerChoice == userChoice)
    {
        console.log("Draw!");
    }
    else if (computerChoice == "rock")
    {
        console.log("my choice:" + computerChoice);
        if(userChoice == "paper")
        {
            console.log("You win!");
        }
        else {
            console.log("i win!");
        }
    }
    else if(computerChoice == "paper")
    {
        console.log("my choice:" + computerChoice);
        if(userChoice == "scissors")
        {
            console.log("You win!");
        }
        else {
            console.log("i win!");
        }
    }
    else if (computerChoice == "scissors")
    {
        console.log("my choice:" + computerChoice);
        if(userChoice == "rock")
        {
            console.log("You win!");
        }
        else {
            console.log("i win!");
        }
    }
}