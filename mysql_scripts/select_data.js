const mysql = require('mysql2')


const connection = mysql.createConnection({//connecting with sql database with given details
    host: 'localhost',
    database: 'mytestdb',
    user: 'gagan',
    password: '1234'
})

connection.query(`
    select * from persons`,
    function(err,rows,cols){
        if(err){
            console.error(err)
        }
        else{
            console.log(rows)
            console.log(cols)
        }
        connection.close();
    }
)