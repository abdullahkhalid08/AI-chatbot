// conditional statements:

// wo statement hum jin ke through hum conditions ka upper 

// syntax 

// if (condition) {
//    console.log("print")

// //}
// else {
  // console.log()

//}
// let x = 2;

// if (x > 5) {
//     console.log("x is greater than 5")
// } else {
//    console.log("x is less than 5")


// // }
// let x =2;

// if (x > 10) {
//   console.log(`${x}, is greater than 10`)

// }else if (x < 10 && x > 5) {
//     console.log(` ${x}, is less than 10 but greater than 5`) 
// } else{
//     console.log(`${x} is less than 5`)
// }


//let y = 14;

// if (y > 10) {
//    console.log(`${y} multiply by 8`)
// }
// else if  (y < 10 && x > 9) {
//     console.log(`${y}  multiply by 9`)
// }
// else{
//     console.log(`${y} multiply by 8`)
// }
  

// multiple ELSE IF STATEMENTS

let marks = 71;

if (marks >= 95) {
  console.log(` marks:${marks}, Grade; A*, scolarship: fully funded`)
}
else if (marks <= 95 && marks >=90) {
  console.log(`marks: ${Marks}, Grade:A, Scolarship:85%`)
}
else if (marks <90 && marks>=85) {
   console.log(`marks: ${marks}, Grade: B, scolarship:65%`)
}
else if (marks < 75 && marks >=75) {
console.log(`marks: ${marks} ,Grade: C, scolarship:55%`)


}
else if (marks < 70 && marks >=70){
  console.log(`marks: ${marks} ,Grade: C, scolarship:45%`)
}
  else {
    console.log(`we are sorry! your marks are not elight to scolarship`)
  }