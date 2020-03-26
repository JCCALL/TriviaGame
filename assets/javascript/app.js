var clock = 60;
var clockRunning = false;
var intervalId;
var correctCount = 0;
var missedCount = 0;
var unansweredCount = 0;

$(document).ready(function () {

    $("#gameplay").hide();
    $("#results").hide();


    $("#stButton").on("click", start);
    $("#done").on("click", finish); 
    $("#tryagain").on("click", restart);

    function start() {
        $("#start").hide();
        $("#gameplay").show();

        if(!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        };
        return;
    };

    function finish() {
        $("#results").show();
        $("#gameplay").hide();
        clearInterval(intervalId);
        clockRunning = false;
        clock = 60;
        gameend()
    };

    function count() {
        clock--;
        $("#number").html(clock + " seconds");
        if(clock == -1) {
            finish();
            alert("Times Up!");
        };
    
    }

    function restart() {
        $("#start").show();
        $("#results").hide();
        
    }
    
    function gameend() {
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();

        if (Q1 === undefined){
            unansweredCount++;
        } else if (Q1 == ""){
            correctCount++;
        }else{
            missedCount++;
        }
    };

});