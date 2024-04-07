const sqlite3 = require('sqlite3').verbose();
const { argv } = require('node:process');
if (argv[3] == null){
	console.log("Missing Arguments: Requires 2: \nuserName\nUserPass\nquitting script");
	return 1;
}
var userName = argv[2].toString();
var userPass = argv[3].toString();

// open the database
 let db = new sqlite3.Database('./db/Users.db');
  
 let sqlAddUser = `insert into users(UserName, UserPass)
	 	values('${userName}', '${userPass}');`
 db.all(sqlAddUser, [], (err, rows) => {
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
