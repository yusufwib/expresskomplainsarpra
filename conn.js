const Pool = require('pg').Pool;

var con = new Pool({
  host: "180.250.162.213",
  user: "postgres",
  password: "postgres",
  database: "laporsarpra",
  port: 5432,
});


con.connect(function (err){
    if(err) throw err;
});

module.exports = con;