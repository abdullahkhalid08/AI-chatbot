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