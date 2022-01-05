//Challenge 1: Your Age in Days
var userYear = 0;
function ageInDays(){
    var birthYear = prompt("What is your birth year?");
    var numLeapYears = getNumLeapYears(birthYear, userYear);
    var ageInDayss = ((userYear - birthYear) * 365) + numLeapYears;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function getNumLeapYears(birthYear, userYear){
    numLeapYears = 0;
    
    for(let i = birthYear; i < parseInt(userYear) + 1; i++){
        if((i % 100 == 0) && (i % 400 == 0)){
            numLeapYears++;
        }
        else if(i % 4 == 0){
            numLeapYears++;
        }
    }
    
    return numLeapYears;
}

function getUserYear(){
    userYear = prompt("What year is it?");
}