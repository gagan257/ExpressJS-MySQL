// Connecting sequelize with database using sql2
const sequelize = require('sequelize')

const db = new sequelize('mytestdb','gagan','1234',{//'database','user','password'
    host: 'localhost',
    dialect: 'mysql'
})

db.authenticate()//checking that it is properly installed or not
    .then(()=> console.log("Connection worked"))
    .catch((err)=> console.error(err))
