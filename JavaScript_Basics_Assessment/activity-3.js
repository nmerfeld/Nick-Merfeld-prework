var students = ["Anna", "Jeff", "Bill"];

var numAdded = 0;

 while(numAdded < 3){
  newStudent = prompt("Please enter a student name");
  students.push(newStudent);
  numAdded++;
}

for(var i = 0; i < students.length; i++){
  console.log(students[i]);
}
