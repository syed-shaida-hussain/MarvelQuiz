var readLineSync = require('readline-sync');
const chalk = require('chalk');
var highScore = 10;
var score = 0;
var userName = readLineSync.question("what's your name? ");
console.log(chalk.bold.green("welcome "+userName +", to 'Are you a marvel fan?' "))

function play(question,answer)
{
    var userAnswer = readLineSync.question(question);

    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
        console.log(chalk.bold.green(userAnswer +" is the right choice! , you scored a point "));
        score++;
    }
    else
    {
        console.log(chalk.bold.red(userAnswer +" is the wrong choice!"));  
        console.log(chalk.bold.green(answer +" is the correct choice "));
    }

    console.log(chalk.bold.blue("your current score is:",score));

}
    var questions = [{question : "1. THE INCREDIBLE HULK: \n What does Tony tell Thaddeus Ross at the end of the film? \n a) That he wants to study The Hulk \n b) That they are putting a team together \n c) That Thaddeus owes him money \n",
    answer : "b"},
    {question : "2. THOR: What does Thor want 'another' of when he's in the dinner? \n a) A slice of pie \n b) A piece of toast \n c) A cup of coffee \n",
    answer : "c" },
    {question : "3. THE AVENGERS: Natasha remarks to Clint that the Battle of New York is a lot like what? \n a) Their time in Budapest \n b) Their time in Prague \n c) Their time in sokovia \n",
    answer :"a"},
    {question : "4. IRON MAN 3: What is the name of the little boy Tony befriends while stranded?\n a) Harley \n b) peter \n c) henry \n",
    answer :"a"},
    {question : "5. THOR: THE DARK WORLD: Where do Sif and Volstagg hide the Reality Stone at the end of the movie? \n a) On Vormir \n b) They give it to the Collector \n c) In a vault on Asgard \n",
    answer : "b"},
    {question : "6. CAPTAIN AMERICA: THE WINTER SOLDIER: What does the Winter Solider say after Steve recognizes him for the first time? \n a) who the hell is bucky? \n b) He is gone. \n c) Do i know you? \n",
    answer : "a"},
    {question : "7. CAPTAIN AMERICA: CIVIL WAR: Who ISN'T on Iron Man's team? \n a) Vision \n b) Black widow \n c) Hawkeye \n",
    answer : "c"},
    {question : "8.AVENGERS: AGE OF ULTRON: What word does Tony utter that makes Steve say, Language? \n a) crap \n b) shit c) idiot \n",
    answer : "b"},
    {question : "9. THOR: RAGNAROK: What is Valkyrie's scrapper number? \n a) 3 \n b) 162 \n c) 142 \n ",
    answer : "b"},
    {question : "10.BLACK PANTHER: What do Killmonger and Klaue steal from the Museum of Great Britain? \n a) Just vibranium \n b) vibranium and a mask \n c) A map of wakanda \n",
    answer : "b"},
    ]; 

    for(var i = 0; i<questions.length; i++)
    {
        var currentQuestion = questions[i];
        play(currentQuestion.question,currentQuestion.answer);
    }

    console.log(chalk.bold.yellow("your final score is: ",score))

    var myScore = {
        name: "shaida",
        score: highScore,
    }

    var userScore = {
        name: userName,
        score: score,
    }

    var highScores = [myScore ,userScore];

    if (userScore.score === myScore.score)
    {
        console.log(chalk.bold.green("congratulations! " +userName+ " , you have beaten the high score."));
        console.log(chalk.bold.blue("please share screenshot of your score."));
    }
    else
    {
        console.log(chalk.bold.yellow("well tried , but you fell short of the high score"));
    }