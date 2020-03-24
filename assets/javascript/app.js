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
    };

    function count() {
        clock--;
        $("#number").html(clock + " seconds");
        if(clock == -1) {
            finish();
            alert("Times Up!");
        };
    
    }

    
    
});
