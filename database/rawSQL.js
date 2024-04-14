const sqlite3 = require('sqlite3').verbose();
const { argv } = require('node:process');
if (argv[2] == null){
	console.log("Missing Arguments: Requires 1: \nSQL String\nquitting script");
	return 1;
}
var sql = argv[2].toString();


// open the database
 let db = new sqlite3.Database('./db/Users.db');
 

 let sql1 = `create table Users(
	 	UserID integer primary key autoincrement,
		UserPass text not null,
	 	UserName varchar(20) not null,
	 	TTTWins int,
	 	BWins int,
	 	CWins int
	 );`;
 let sql2 = 'pragma table_info(Users)'
 let sql3 = "drop table Users;"
 let sql4 = "select * from Users;"

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
