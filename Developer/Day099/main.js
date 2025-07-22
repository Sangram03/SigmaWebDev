import mongoose from 'mongoose';


await mongoose.connect('mongodb://127.0.0.1:27017/test');
const express = require('express');
const app = express();
const port = 3000;
const Employee = require ("./models/Employee.js")

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
     let rno = Math.floor(Math.random()* (arr.length -1))
     return arr[rno];
}



app.get('/', (req, res) => {
  res.render('index',{foo: 'FOO'})
});

app.get('/generate', async (req, res) => {

    // Clear the collection employee
    Employee.deleteMany({})



    // generate random data
    

    let randomNames = ['Rohan', 'Sohan' , 'Mohan' , 'Sohan']

    let randomLang = ["Python","js","C++" , "Java"]

    let randomCities = ["Bilaspur" , "Moraabad", "Mysore" , "Kolkata"]

    for (let index = 0; index < 12; index++) {
        let e =  await Employee.create({
            name :getRandom(randomNames),
            salary:Math.floor(Math.random() * 22000),
            languages:getRandom(randomLang),
            city :getRandom(randomCities),
            isManager:Math.random()>0?true:false
        })

        // await e.save()
        
    }
  res.render('index',{foo: 'FOO'})
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 