const express = require('express');
const router = express.Router();

const connect = require('../utils/sqlConnect');





router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');
    connect.getConnection((err, connection) => {
		if (err) { return console.log(error.message); }
        let query = `SELECT  * FROM tbl_books WHERE ID="${req.params.id}"`;

		
		connect.query(query, (err, rows) => {
			connection.release(); // send this connection back to the pool

			if (err) {
				// will exit the function and log the error
				return console.log(err.message);
			}

			console.log(result);// this should be your database query result

			// render our page
			res.render('index', { data: result }); // whatever page and data you're rendering
		});
	});
})

//looling for localhost:3000/anything
router.get('/books/:id', (req, res) => {
    console.log("hit a dynamic route");
    console.log(req.params.id);



    connect.getConnection((err, connection) => {
        if (err) { return console.log(error.message); }


	

		connect.query(query, (err, rows) => {
			connection.release(); // send this connection back to the pool

			if (err) {
				// will exit the function and log the error
				return console.log(err.message);
            }
            console.log(result); // should see objects wrapped in an array
        // turn our social property into an array - its just text in the DB
        // wich isnt really anything we can work with

         result[0].quote = result[0].quote.split(',').map(function(item) {
         item = item.trim(); //remove the extra spaces from each word

         return item;
          });
       console.log('after split: ', result[0]);
      


        // render the home view with dynamic data
        //res.render('home', { data: result });
        res.json(result);
		});
	});
})


module.exports = router;