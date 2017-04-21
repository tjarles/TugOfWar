/**
 * Created by tjarles on 2017-04-17.
 */

function post(operator) {
    //console.log("Sending: '" + operator + "' from client");
    return $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/game',
        data: {operator: operator}
    });
}

function update(value) {
    //console.log("update: " + value);
    $('#value').text(value);
}

function plus() {
    post("p").done(update);
}

function minus() {
    post("m").done(update);
}

function reset() {
    post("r").done(update);
}