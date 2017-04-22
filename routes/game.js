var express = require('express');
var router = express.Router();

var startingValue = 25;
var count = startingValue;

var pinkPlayers = 0;
var bluePlayers = 0;

//Shows counter at start
router.get('/', function (req, res) {
    res.render('game', {val: count});
});

//Handles POST-requests
router.post('/', function (req, res) {
    //console.log("received: '" + req.body.operator + "' from POST-request.");
    if (req.body.operator== "p") {
        count++;
        //console.log("plussade");
    } else if (req.body.operator== "m") {
        count--;
        //console.log("subtraherade");
    } else if (req.body.operator== "r") {
        count = startingValue;
        //console.log("resetade");
    } else if (req.body.operator== "g") {
        //console.log("skickar count oförändrad");
    } else if (req.body.operator == "pink") {
        //console.log("pink player joined");
        pinkPlayers++;
    } else if (req.body.operator == "blue") {
        bluePlayers++;
    } else {
        res.end();
        console.log("Weird POST. Ended request.");
    }
    res.json(count);
});

module.exports = router;
