'use strict';

var response = require('../res');
var connection = require('../conn');

exports.postLoginUser = function(req, res) {
    let data = req.body;
    
    let username= data.usernameUser;
    let password = data.passwordUser;

    connection.query(`SELECT "usernameUser", "passwordUser"
    FROM public."user" where "usernameUser" = '${username}' and "passwordUser" = '${password}';`, 
    function (error, rows, fields){

        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        }
        
        else{
            response.ok(rows, res)
        }
    });
};

exports.postLoginAdmin = function(req, res) {
    let data = req.body;
    
    connection.query(`SELECT nik
    FROM public."admin" where nik = '${data.nik}';`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
            
        } 
        else{
            response.ok(rows, res)
        }
    });
};

exports.postLoginGuru = function(req, res) {
    let data = req.body;
    
    connection.query(`SELECT nik, jabatan, "passwordAdmin"
    FROM guru where nik = '${data.nik}' and jabatan = '${data.jabatan}'     and "passwordAdmin" = '${data.passwordAdmin}';`, 
    function (error, rows, fields){
        if(rows.rowCount === 0 ){
            console.log(error)
            response.err({"Message": 'Error'}, res)
        } else{
            response.ok(rows, res)
        }
    });
};
