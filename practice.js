
// const prompt = require("prompt-sync")();

// let x = prompt("Enter x here: ")
// let y = prompt("Enter x here: ")

// let sum = parseInt(x) + parseInt(y);
// console.log(`the sum of x and y is: ${sum}`)

// config prompt func
// const prompt = require(`prompt-sync`)();


// function votin_system() {
//     let user_name = prompt("Enter your name here:")
//     let_age = prompt("Enter your age here:")
//     let phone_number = prompt("Enter your phone# here:")
//     let gender = prompt("Enter your gender here:")

// }

// if (age >= 18 && age <= 60) {
//     if (gender === "Male") {
//         console.log(`${user_name} is eligible to vote`)
//     }
//     else {
//         console.log(${ user_name } is not eligible to vote)
//     }
//     else {
//         console.log(`you are not eligible to vote`)
//     }


// function voting system(){
// }

// function candidates() {
//     const parties = ["ABC party", "PQR party", "Congress party", "lmn party"]
//     for (let i in parties` ${x} ${1}`)
//         x++
// }
// let usre_party = ("enter your selected party here")
// }



const prompt = require("prompt-sync")();
function voting_system(){
    let username = prompt("Enter Your Name Here")
    let age = prompt("Enter Your Age Here")
    let phone_number = prompt("Enter Your Phone Number Here")
    let gemder = prompt("Enter Your Gender Here")
    if (age >= 18 && age <= 60){
        if (gender === `male`){
            console.log(`$(username) Is Eligible To Vote`)
        }
        else {
            console.log(`$(username) Is Not Eligible To Vote`)
        }
    }
    else {
        console.log(`You're Not Eligible For Vote`)
    }
}
function candidates (){
    const parties = [`Abc Party`, `Bcd Party`, `Cde Party`, `Def Party`, `Efg Party`]
    x = 1
    for (let i in parties){
        console.log(`$(x): $(i)`)
        x++
    }
    let user_party = prompt(`Enter Your Selected Party Number :`)
    if (parseInt(user_party)  === 1){
        console.log(`you have selected ${parties[0]}`)
    }
    ifelse (parseInt(user_party)  === 2){
        console.log(`you have selected ${parties[2]}`)
    }
    ifelse (parseInt(user_party)  === 3){
        console.log(`you have selected ${parties[3]}`)
    }
    ifelse (parseInt(user_party)  === 4){
        console.log(`you have selected ${parties[4]}`)
    }
     
}