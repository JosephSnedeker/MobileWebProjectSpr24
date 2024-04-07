const sqlite3 = require('sqlite3').verbose();


// open database in memory
 let db = new sqlite3.Database('./db/Users.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {//defaults to READWRITE and CREATE
   if (err) {
       return console.error(err.message);
      }
      console.log('Connected to the users SQlite database.');
 });

           // close the database connection
      db.close((err) => {
         if (err) {
             return console.error(err.message);
  	       }
               console.log('Close the database connection.');
 });
