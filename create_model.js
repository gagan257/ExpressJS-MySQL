const sequelize = require('sequelize')
const DataTypes = sequelize.DataTypes//DataType keyword in sequelize enable to create obj

const db = new sequelize('mytestdb','gagan','1234',{//'database','user','password'
    host: 'localhost',
    dialect: 'mysql'
})

// creating obj
const student = db.define('student' , {//'student' name of table
    name:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    },
})

const task = async()=>{
    try{
        await db.sync({alter: true})

        //insert a student
        await student.create({
            name: 'Some person',
            age: 20
        })
    }
    catch(e){
        console.error(g)
    }
}
task();

db.sync({alter: true})
    .then(()=> console.log('Database synchronised'))
    .catch(console.error)