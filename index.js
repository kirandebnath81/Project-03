var readlineSync=require("readline-sync")

const chalk=require("chalk");
const log=console.log

var userName=readlineSync.question(chalk.yellow('May i know your name? '))

log(chalk.cyan("\nWelcome "+chalk.italic.bold(userName)+" ,let's see how well do you know me"))

log(chalk.bgYellow.white.italic.bold("\n____Know me Quiz____\n"))

var score=0


function quiz(question,answer){
    var userAns=readlineSync.question(question)

    if(userAns.toUpperCase()===answer.toUpperCase()){
        log(chalk.green('You are absolutely correct\n'))
        score+=1
    }else{
        log(chalk.red("Opps your are wrong!!!\n"))
    }
}

var questions=[

{question: '1. Can you say my name? ',
answer: 'Kiran Debnath'},

{question: '2. Do you know where do i live? ',
answer: 'Assam'},

{question: '3. How old i am? ',
answer: '20'},

{question: '4. What is my hobby? ',
answer: 'sports'},

{question: '5. Do i have any girlfriend? ',
answer: 'no'}

];

for(var i=0; i<questions.length; i++){
    var current=questions[i]
    quiz(current.question,current.answer)
}

log(chalk.cyan.bold('Your final score is '+score+'\n'))

log(chalk.yellow.underline("Highscorers"))


var highScore=[

    {name:'Shani Roy',
    score:'5'},

    {name:'Palak Singh',
    score:'4'}
]

for(var i=0; i<highScore.length; i++){
    var current=highScore[i]
    log(chalk.cyan(current.name),chalk.green(current.score))
}


if(score>=4){
    log(chalk.cyan.bold("\nYay!! congratulation, you are a highscorer now"))
    log(chalk.cyan.bold("Send us the screenshot,we will update your name in the scoreboard"))
}else{
    log(chalk.red('\nOpps!!! you could not beat the highscorers ,better luck next time'))
}