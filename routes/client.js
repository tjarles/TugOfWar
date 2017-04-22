var express = require('express');
var router = express.Router();

//Shows counter at start
router.get('/', function (req, res) {
    res.render('teamPick', {val: "test"});
});



module.exports = router;
