/**
 * Created by tjarles on 2017-04-17.
 */

function setTeam(teamColor) {
    var oppositeTeamColor = null;
    var operator = null;
    if (teamColor == "pink") {
        oppositeTeamColor = "blue";
        operator = "p";
    } else {
        oppositeTeamColor = "pink";
        operator = "m";
    }

    $("#"+ teamColor +"Box").css("display", "block");
    //document.getElementById(teamColor + "Box").style.display = 'block';

    document.getElementById(teamColor + "Box").style.height = "100%";
    document.getElementById(oppositeTeamColor + "Box").style.display = 'none';
    //document.getElementById(teamColor + "Box").onclick = post("m");
    document.getElementById(teamColor + "Box").setAttribute("onClick", "post('" + operator + "');");
    document.getElementById("banner").innerHTML = 'Change Team';
}

//////////////////////////
///////Server Stuff///////
//////////////////////////

function post(team) {
    //console.log("Sending: '" + team + "' from client");
    return $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/game',
        data: {operator: team}
    });
}

function chooseTeam(team) {
    if (team == "p") {
        post("pink");
        setTeam("pink");
    } else if (team == "b") {
        post("blue");
        setTeam("blue");
    }
}

function changeTeam() {
    var banner = $("#banner".text);
    //If no team has been chosen
    if (banner == "Choose team!") {
        return;
    } else {
        var pinkExpanded = $("#pinkBox").css("display");
        if (pinkExpanded == "block") {
            setTeam("blue");
        } else {
            setTeam("pink");
        }
    }
}





