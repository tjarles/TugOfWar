/**
 * Created by tjarles on 2017-04-17.
 */

function setTeam(teamColor) {
    var oppositeTeamColor = null;
    var operator = null;
    if (teamColor == "pink") {
        oppositeTeamColor = "blue"
        operator = "p";
    } else {
        oppositeTeamColor = "pink"
        operator = "m";
    }
    document.getElementById(teamColor + "Box").style.height = "100%";
    document.getElementById(oppositeTeamColor + "Box").style.display = 'none';
    //document.getElementById(teamColor + "Box").onclick = post("m");
    document.getElementById(teamColor + "Box").setAttribute("onClick", "post('" + operator + "');");
    document.getElementById("banner").innerHTML = 'Change Team';
}

function blueTeamView() {

}

//////////////////////////
///////Server Stuff///////
//////////////////////////

function post(team) {
    console.log("Sending: '" + team + "' from client");
    return $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/game',
        data: {operator: team}
    });
}

/*function updateDOM(value) {
    //console.log("update: " + value);
    $('#value').text(value);
    moveLine(value);
}*/

function chooseTeam(team) {
    console.log("Valde: " + team);
    if (team == "p") {
        post("pink");
        setTeam("pink");
    } else if (team == "b") {
        post("blue");
        setTeam("blue");
    }

    //post(data).done(updateDOM);
    //post(data);
}





