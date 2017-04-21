var express = require('express');
var router = express.Router();

var count = 0;

router.get('/', function (req, res) {
    res.render('game', {val: count});
});

router.post('/', function (req, res) {
    //console.log("received: '" + req.body.operator + "' from POST-request.");
    if (req.body.operator== "p") {
        count++;
        console.log("plussade");
    } else if (req.body.operator== "m") {
        count--;
        console.log("subtraherade");
    } else if (req.body.operator== "r") {
        count = 0;
        console.log("resetade");
    } else {
        res.end();
        console.log("Weird POST. Ended request.");
    }
    res.json(count);
});

module.exports = router;
