const sequelize = require('sequelize')
const DataTypes = sequelize.DataTypes

const db = new sequelize('mytestdb','gagan','1234',{//'database','user','password'
    host: 'localhost',
    dialect: 'mysql'
})

// creating obj
const student = db.define('student' , {
    name:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER(2),
        allowNull: true,
        defaultValue: 0
    },
})

const task = async()=>{
    try{
        await db.sync()

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

db.sync()
    .then(()=> console.log('Database synchronised'))
    .catch(console.error)