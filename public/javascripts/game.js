/**
 * Created by tjarles on 2017-04-17.
 */

function moveLine(value) {
    var widthToSet = value * 2;
    document.getElementById("pink").style.width = widthToSet+"%";
}

function pinkWin() {
    console.log("Pink win");
}

function blueWin() {
    console.log("Blue win");
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
    var currentWidth = document.getElementById("pink").style.width;
    //remove percentage
    currentWidth = parseInt(currentWidth.substring(0, currentWidth.length - 1));

    //For some reason first time is NaN. Handles that.
    if (currentWidth == null) {
        console.log("Not yet set");
    } else if (currentWidth >= 100) {
        pinkWin();
    } else if (currentWidth <= 0) {
        blueWin();
    }
    postHandler("g");

    setTimeout(main, 1000);
}

//var interval = null;
//interval = window.setInterval(main, 1/60);





