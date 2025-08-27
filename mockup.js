// let Anas_age = 17

// while (Anas_age <= 19){
// console.log("Anas is", Anas_age , "playing circket ")
// Anas_age ++

// }
// console.log("Anas is 19 year old and his colify in circket")


//...........for loop............... 

// for (let x = 1 ; x  <= 1000; x ++) {
//     if (x == 50){
//         console.log("half of thousand")

//     } else {
//   console.log("pakistan zindabad" , x)

//     }

// }


//..........for of loop...........

// let myname ="Anas"
// for ( let x of myname ){
//     console.log(x)
// }





//...........for in loop.............
const country = {
    "Name": "Pakistan",
    "population": "220,000,000",
    "continent": "asia"
}
for (let Anas in country) {
    if (Anas == "continent") {
        console.log("Biggest Continent")
    } else {
        console.log(`${key}: ${country[key]}`)
    }

};


