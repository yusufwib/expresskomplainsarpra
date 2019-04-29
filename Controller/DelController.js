'use strict';

var response = require('../res');
var connection = require('../conn');

exports.delProblem = function(req, res) {
    let data = req.params;

    connection.query(`DELETE FROM "reportProblem"
    WHERE "idProblem" = ${data.idProblem}`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        } else{
            response.ok(rows, res)
        }
    });
};