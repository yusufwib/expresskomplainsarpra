'use strict';

var response = require('../res');
var connection = require('../conn');

exports.postReportUser = function(req, res) {
    let data = req.body;
    var currentdate = new Date();
    var datetime = currentdate.getDate() +"-"+ currentdate.getMonth()+1 +"-"+ currentdate.getFullYear();
    var getminute = currentdate.getHours() +":"+ currentdate.getMinutes();
    
    connection.query(`INSERT INTO "reportProblem"("idUser", problem, "problemStatus", date, "time", room) VALUES (${data.idUser}, '${data.problem}', 'Requested','${datetime}','${getminute}', '${data.room}');`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postReportGuru = function(req, res) {
    let data = req.body;
    var currentdate = new Date();
    var datetime = currentdate.getDate() +"-"+ currentdate.getMonth()+1 +"-"+ currentdate.getFullYear();
    var getminute = currentdate.getHours() +":"+ currentdate.getMinutes();
    
    connection.query(`INSERT INTO "reportProblem"("idGuru", problem, "problemStatus", date, "time", room) VALUES (${data.idGuru}, '${data.problem}', 'Requested','${datetime}','${getminute}', '${data.room}');`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        } else{
            response.ok(rows, res)
        }
    });
};