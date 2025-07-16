
// {
//     name : "Harry",
//     salary  : 4500000,
//     languages:"Python",
//     city:"New York",
//     isManager:true
// }

import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema({
    name:String,
    salary: Number,
    languages:String,
    city:String,
    isManager:Boolean,
})


export const Company = mongoose.model('Company',CompanySchema)