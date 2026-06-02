let inputField="";
console.log("hello world");

function pickRandom()
{
    let a=Math.random();
    if(a < 0.33)
    {
        return "rock";
    }
    else if(a <0.66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function checkWinner(myPick, userPick)
{
    if (myPick === userPick)
    {
        console.log("Tie!");
    }
    else if(myPick == "rock" && userPick == "paper" || myPick == "scissors" && userPick == "rock" || myPick == "paper" && userPick == "scissors")
    {
        console.log("U win");
    }
    else{
        console.log("I win");

    }
    console.log("I picked " + myPick);
    console.log("U picked " + userPick);
}

function getValue() {
    inputField = document.getElementById("input");

    let value = inputField.value;
    alert("Input value: " + value);
    console.log(checkWinner(pickRandom(),value));
}



