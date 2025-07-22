import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:String,
    salary: Number,
    languages:String,
    city:String,
    isManager:Boolean,
});

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee;