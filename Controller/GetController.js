'use strict';

var response = require('../res');
var connection = require('../conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getReportAll = function(req, res) {
    connection.query(`SELECT "idUser", problem, "problemStatus", date, "time", "idProblem", room, "idGuru" FROM "reportProblem";`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getReportReq = function(req, res) {
    connection.query(`SELECT "idUser", problem, "problemStatus", date, "time", "idProblem", room, "idGuru" FROM "reportProblem" WHERE "problemStatus" = 'Requested';`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getReportOnGoing = function(req, res) {
    connection.query(`SELECT "idUser", problem, "problemStatus", date, "time", "idProblem", room, "idGuru" FROM "reportProblem" WHERE "problemStatus" = 'On going';`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getReportFinish = function(req, res) {
    connection.query(`SELECT "idUser", problem, "problemStatus", date, "time", "idProblem", room, "idGuru" FROM "reportProblem" WHERE "problemStatus" = 'Finished';`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getReportUser = function(req, res) {
    let data = req.params;
    connection.query(`SELECT "idUser", problem, "problemStatus", date, "time", "idProblem", room, "idGuru" FROM "reportProblem" WHERE "idUser" = '${data.idUser}';`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getReportGuru = function(req, res) {
    let data = req.params;
    connection.query(`SELECT "idUser", problem, "problemStatus", date, "time", "idProblem", room, "idGuru" FROM "reportProblem" WHERE "idGuru" = '${data.idGuru}';`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};