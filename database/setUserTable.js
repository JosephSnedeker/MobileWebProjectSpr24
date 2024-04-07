const sqlite3 = require('sqlite3').verbose();
const { argv } = require('node:process');



// open the database
 let db = new sqlite3.Database('./db/Users.db');
  
 let sql = `create table Users(
	                 UserID integer primary key autoincrement,
			 UserName varchar(20) not null,
	                 UserPass text not null,
			 UserEmail nvarchar(255),
	                 TTTWins int,
	                 BWins int,
	                 CWins int
	          );`;
 db.all(sql, [], (err, rows) => {
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
