const sqlite3 = require('sqlite3').verbose();
const { argv } = require('node:process');


// open the database
 let db = new sqlite3.Database('./db/Users.db');
 
 let sql4 = "select * from Users;"

 db.all(sql4, [], (err, rows) => {
 if (err) {
 	throw err;
        }
 rows.forEach((row) => {
 console.log(row);
 });
});
argv.forEach((val, index) => {
	console.log(index, val);
});
// close the database connection
db.close();
