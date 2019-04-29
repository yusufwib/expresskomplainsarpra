'use strict';

var response = require('../res');
var connection = require('../conn');

exports.putOnGoing = function(req, res) {
    let data = req.params;

    connection.query(`UPDATE "reportProblem" SET
    "problemStatus"='On going'
    WHERE "idProblem" ='${data.idProblem}'`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.putFinish = function(req, res) {
    let data = req.params;

    connection.query(`UPDATE "reportProblem" SET
    "problemStatus"='Finished'
    WHERE "idProblem" ='${data.idProblem}'`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        } else{
            response.ok(rows, res)
        }
    });
};