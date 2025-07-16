// CRUD Operation
// Create
use("CrudDb")


console.log(db);

db.createCollection("courses")

db.courses.insertOne({
    name:"Harry web dev free courses",
    price:0,
    assignments:12,
    projects:45,
})


db.courses.insertMany([
{
    "name":"Responsive web design",
    "price":0,
    "assignments":13,
    "projects":446
},

{
    "name":"Responsive web design",
    "price":0,
    "assignments":15,
    "projects":116
},
{
    "name":"Responsive web design",
    "price":0,
    "assignments":43,
    "projects":66
},{
    "name":"Responsive web design",
    "price":0,
    "assignments":63,
    "projects":76
},
{
    "name":"Responsive web design",
    "price":0,
    "assignments":23,
    "projects":46
},
{
    "name":"Responsive web design",
    "price":0,
    "assignments":83,
    "projects":56
},
{
    "name":"Responsive web design",
    "price":0,
    "assignments":12,
    "projects":86
},
{
    "name":"Responsive web design",
    "price":0,
    "assignments":82,
    "projects":46
},
])



// READ
console.log(a);

console.log(a.count());


let b = db.courses.findOne({price:0})

console.log(b);

// UPDATE

db.courses.updateOne({price:0} ,{$set:{price:100}})

db.courses.updateMany({price:0} ,{$set:{price:1000}})



// DELETE

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100})