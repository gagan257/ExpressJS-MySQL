const mysql = require('mysql2')

const insert = {
    // argv[0] is for node, argv[1] for sql
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}

const connection = mysql.createConnection({//connecting with sql database with given details
    host: 'localhost',
    database: 'mytestdb',
    user: 'gagan',
    password: '1234'
})

connection.query(//query goes here
    // strings in '' in commands
    `insert into persons(name,age,city) values(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    function(err,results){
        if(err){
            console.error(err)
        }
        else{
            console.log(results)
            console.log("Inserted Successfully")
        }
        connection.close();
    }
)