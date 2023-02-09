const express = require('express')
const app = express()
const db = require('./db')//catching db.js

app.use(express.json())//                       enable to fetch data from "body" during post requests
app.use(express.urlencoded({extended: true}))// if not written then req.body(data) = "undefined"(i.e no read possible)

app.set("view engine","hbs")//denotes that view engine = hbs format

app.get('/',(req,res)=>{

    db.getAllPersons()
        .then((rows)=>{//naming "rows" var which is taking the passed data from promise in db.js file
            res.render('persons',{rows})//telling use "persons" as hbs file name in views folder and using our named var that is taking data from promise in db.js
        })
        .catch((err)=>{//only called in case of error
            res.send(err)
        })

    // res.render('persons',{
    //     persons: [
    //         {name: 'Abc', age: 22, city: 'Bhopal'},
    //         {name: 'Cbe', age: 15, city: 'Delhi'}
    //     ]
    // })
})

app.get('/add',(req,res)=>{
    res.render('persons_add') 
})

app.post('/add',(req,res)=>{
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
})

app.listen(4444, ()=>{
    console.log('Server started on http://localhost:4444');
})