const mysql = require('mysql2')

const connection = mysql.createConnection({//connecting to the database
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
                    reject(err)//reject is use to remove promise in case of error(marking/solving that error is addressed)
                }
                else{
                    resolve(rows)//denotes problem has been solved and we are passing results in var rows back to server.js
                }
            }
        )
    })
}

function addNewPerson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `insert into persons (name,age,city) values(?,?,?)`,//this (?,?,?) prevents user to write unwanted content as input/ prevents from  server attacks
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