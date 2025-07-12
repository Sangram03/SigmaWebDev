// The Magical Sorting Hat : imagine you are creating a magical sorting hat for a wizard school implement a JavaScript function that takes an array of student names and assigning them to one of the four houses (Gryffinder (length less than 6), Hufflepuff(length less than 8). Ravenclaw(length less than 12),or Slytherin(length greater then or equal to 12)) based on the length of their names.


let students = ["shubh","ajanli","shivani" , "shivangi" , "Annapurna", "Shubham" , "Krishnanedu","ravindranathan","Shivesh", "kaif" ,"Emanuel"]


let houses = []


for (const element of students) {
    if (students.length < 6) {
        houses.push("Gryffindor")
    } else if (students.length <8) {
        houses.push("Huffindor")
    }
    else  if (students.length < 12) {
        houses.push("Revenclaw")
    }
    else{
        houses.push("Slytherin")
    }
}

console.log(houses);
