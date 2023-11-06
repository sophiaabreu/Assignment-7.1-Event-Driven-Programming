function playCraps(){
    /*playCraps() is a function use to simulate a craps game.
    use for the week 3 assignament*/
    console.log("playCraps() started");
    //roll the dice
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1Res").innerHTML = die1;
    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2Res").innerHTML = die2;
    // find sum of the two dice
    var sum  = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = sum;

    //if sum equals 7 or 11, they lose
    if(sum == 7 || sum == 11){
        document.getElementById("finalRes").innerHTML = "YOU LOSE!! Try again :)";
    } else  if(die1 == die2 && die1%2 == 0){
    //if sum doubles and even, they win
    document.getElementById("finalRes").innerHTML = "YOU WIN! Great Job";
    } else{
        //othewise, they draw
        document.getElementById("finalRes").innerHTML = "This was not your lucky round. Please try again";
    }

}