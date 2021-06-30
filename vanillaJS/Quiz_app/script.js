var data;
var number_quiz;
var shown_quiz = [];
var testing = 3;

function open_json(json_string) {
    data = JSON.parse(json_string);
    number_quiz = Object.keys(data).length;
    select_quiz();
}

function select_quiz(){
    var included;
    var draw;
    do{
        draw = Math.floor(Math.random()*number_quiz);
        shown = shown_quiz.includes(draw);
    }while(shown)
    let number_shown = shown_quiz.length;
    shown_quiz[number_shown] = draw;
    document.getElementById("question").innerHTML = data[draw].question;
    debugger;
    
}