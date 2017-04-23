/**
 * Created by tjarles on 2017-04-17.
 */


function moveLine(value) {
    var widthToSet = value * 2;
    document.getElementById("pink").style.width = widthToSet+"%";
}

function win(team) {
    clearTimeout(timer);
    console.log(team + " win");
    $("#winningTeam").show();
    $("#winningTeam").text(team + " team wins!");
}
function countdown() {
    var timer = 4;

    var interval = setInterval(function () {
        timer--;
        $('#countdownNr').text(timer);
        if (timer === 0) {
            $('#countdownNr').hide();
            clearInterval(interval);
            main();
        }
    }, 1000);
}

//////////////////////////
///////Server Stuff///////
//////////////////////////

function post(operator) {
    //console.log("Sending: '" + operator + "' from client");
    return $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/game',
        data: {operator: operator}
    });
}

function updateDOM(value) {
    //console.log("update: " + value);
    $('#value').text(value);
    moveLine(value);
}

function postHandler(data) {
    post(data).done(updateDOM);
}

function main() {
    console.log("now in main")
    timer = 0;
    var currentWidth = document.getElementById("pink").style.width;
    //remove percentage
    currentWidth = parseInt(currentWidth.substring(0, currentWidth.length - 1));

    if (currentWidth >= 100) {
        clearTimeout(timer);
        win("Pink", timer);
        return;
    } else if (currentWidth <= 0) {
        clearTimeout(timer);
        win("Blue", timer);
        return;
    }
    postHandler("g");

    timer = setTimeout(main, 1000);
}

$(document).ready(function() {
    countdown();
});

//var interval = null;
//interval = window.setInterval(main, 1/60);





