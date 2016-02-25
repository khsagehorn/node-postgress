var pg = require('pg');
var connectionString = 'postgres://localhost:5432/pgintro'
var client = new pg.Client(connectionString);
client.connect();

pg.connect(connectionString, function(err, client, done){

  if(err){
    done();
    console.log('Error fetching Client : ' + err);
  }

  var query = client.query('SELECT * FROM cities');

  query.on('row', function(row){
    console.log(row);
  });

  query.on('end', function(){
    done();
  });

});

// client.query("SELECT * FROM cities", function(err, result){
//   console.log(result.rows);
//   client.end();
// })

// client.query("INSERT INTO cities VALUES (default,'Santas Workshop','North Pole', 10)", function(err, result){
//   console.log(result.rows);
//   client.end();
// })

// client.query("DELETE FROM cities WHERE name='Santas Workshop';", function(err, result){
//   client.end();
// })

// client.query("SELECT * FROM cities", function(err, result){
//   console.log(result.rows);
//   client.end();
// });

// client.query("SELECT * FROM cities WHERE id =1;", function(err, result){
//   console.log(result.rows);
//   client.end();
// });

client.query("", function(err, result){
  console.log(result);
  client.end();
})
