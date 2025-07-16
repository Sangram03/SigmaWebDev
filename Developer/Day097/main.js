// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name : "Harry",
//     salary  : 4500000,
//     languages:"Python",
//     city:"New York",
//     isManager:true
// }

// Generate 10 such records when a button called generate data is clicked!.
// Create an Express app with mongoose to achieve it

// Everytime the button is clicked , you should clear the collection

import express from "express";
import { Company } from "./models/Company.js";
import mongoose from "mongoose";

let conn = await mongoose.connect("mongodb://localhost:27017/companys");

const app = express();
const port = 3000;

// Dummy data
const dummyData = [
  {
    name: "Harry",
    salary: 4500000,
    languages: "Python",
    city: "New York",
    isManager: true,
  },
  {
    name: "Sangram",
    salary: 10000,
    languages: "Java",
    city: "India",
    isManager: true,
  },
  {
    name: "Sid",
    salary: 100,
    languages: "C++",
    city: "New York",
    isManager: false,
  },
  {
    name: "Abhi",
    salary: 200,
    languages: "JavaScript",
    city: "Chicago",
    isManager: false,
  },
  {
    name: "Raj",
    salary: 300,
    languages: "Go",
    city: "Houston",
    isManager: false,
  },
  {
    name: "Bunty",
    salary: 400,
    languages: "Ruby",
    city: "San Francisco",
    isManager: false,
  },
  {
    name: "Raju",
    salary: 500,
    languages: "Swift",
    city: "Seattle",
    isManager: false,
  },
  {
    name: "Rajkumar",
    salary: 600,
    languages: "Kotlin",
    city: "Boston",
    isManager: false,
  },
  {
    name: "Pabitra",
    salary: 700,
    languages: "PHP",
    city: "Austin",
    isManager: false,
  },
  {
    name: "John",
    salary: 800,
    languages: "Rust",
    city: "Los Angeles",
    isManager: true,
  },
];

// GET route to generate data
app.get("/generate", async (req, res) => {
  try {
    // Clear old data
    await Company.deleteMany({});

    // Insert new dummy data
    await Company.insertMany(dummyData);

    res.send("✅ Dummy employee data generated and inserted.");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error generating data.");
  }
});

// Optional: check data
app.get("/employees", async (req, res) => {
  const employees = await Company.find({});
  res.json(employees);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
