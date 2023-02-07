const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'gagan',
    password: '1234',
    database: 'mytestdb'
})

function getAllPersons () {
    return new Promise(function (resolve,reject){
        connection.query(
            `select * from persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)//reject is use to remove promise in case of error
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPerson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `insert into persons (name,age,city) values(?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            }
        )
    })
}
exports = module.exports = {//exported to server
    getAllPersons,
    addNewPerson
}