'use strict';

var Greetings = require("../models/index.js");

module.exports = function (server) {

    server.get('/', function (req, res) {
       // var model = { name: 'helloworld' };
/*        var greetingsModel = new Greetings({
            greetings: "Hello",
            name: "Something"
        });*/
 /*       var greetingsModel = {
            greetings: "Hello",
            name: "Vinoth"
        }*/
        var greetingsModel = new Greetings();

        res.render('index', greetingsModel);
        console.info("@@@@@@@@@@@" + JSON.stringify(greetingsModel));
    });

};
