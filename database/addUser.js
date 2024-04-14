const sqlite3 = require('sqlite3').verbose();
const { argv } = require('node:process');
const signup = (userName, userEmail, userPass) => {


	//open the database
	let db = new sqlite3.Database('./db/Users.db');

	let sqlAddUser = `insert into users(UserName, UserEmail, UserPass)
	values('${userName}', '${userEmail}', '${userPass}');`
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
};
exports.signup = signup;
