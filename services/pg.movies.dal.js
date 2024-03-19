const dal = require("./auth_db");

//get all logins.
var getMovies = function() {
  if(DEBUG) console.log("logins.pg.dal.getLogins()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT movie_id, movie_name FROM public."Movies" \
        ORDER BY id DESC LIMIT 7;`
    dal.query(sql, [], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};