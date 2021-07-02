var data;
var numberOfQuiz;
var shownQuiz = [];
var score = 0;
var questionNo;

function openJson(json_string) {
    data = JSON.parse(json_string);
    numberOfQuiz = Object.keys(data).length;
    newQuiz();
}

function checkAnswer(){
    var userans = document.getElementsByName("answers").value;
    var howaboutthis = document.querySelector('input[name="answers"]:checked').value;
    var corrans = data[questionNo].ans;
    if( howaboutthis == corrans ){
        score += data[questionNo].score;
    }else{
        alert("Wrong answer"+score);
    }
    newQuiz();
}

function newQuiz(){
    var shown;
    if(shownQuiz.length === data.length){
        shownQuiz = [];
        alert("Cycled all questions!")
    }
    do{
        questionNo = Math.floor(Math.random()*numberOfQuiz);
        shown = shownQuiz.includes(questionNo);
    }while(shown)
    let numberShown = shownQuiz.length;
    shownQuiz[numberShown] = questionNo;
    document.getElementById("question").innerHTML = data[questionNo].question;
    document.getElementById("option1").innerHTML = data[questionNo].opt1;
    document.getElementById("opt1").value = data[questionNo].opt1;
    document.getElementById("option2").innerHTML = data[questionNo].opt2;
    document.getElementById("opt2").value = data[questionNo].opt2;
    document.getElementById("option3").innerHTML = data[questionNo].opt3;
    document.getElementById("opt3").value = data[questionNo].opt3;
    document.getElementById("option4").innerHTML = data[questionNo].opt4;
    document.getElementById("opt4").value = data[questionNo].opt4;
    document.getElementById("option5").innerHTML = data[questionNo].opt5;
    document.getElementById("opt5").value = data[questionNo].opt5;
}