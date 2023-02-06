const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'gagan',
    password: '1234'
})

connection.query(
    `create table if not exists persons(
        id integer AUTO_INCREMENT primary key,
        name varchar(50) not null,
        age int not null,
        city varchar(30)
    )`,
    function(err,results){
        if(err){
            console.error(err)
        }
        else{
            console.log("Table created successfully")
        }
        connection.close();
    }
)