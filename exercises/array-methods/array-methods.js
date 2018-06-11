const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planets.forEach(planet => planetEl.textContent += `${planet[0].toUpperCase() + planet.substr(1)} `)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const upperPlanets = planets.map(planet => planet[0].toUpperCase() + planet.substr(1))
console.log('upperPlanets',upperPlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = planets.filter(planet => planet.includes('e'))
console.log('ePlanets', ePlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const sentence = words.reduce((sent, word) => sent += " " + word)
console.log('sentence', sentence)

const emails = [].concat.apply([], (customers.map(obj => obj.contacts.email)))

console.log('emails', emails)

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log((((integers.sort()).reverse()).filter(num => num <= 19)).map(n => ((n*1.5)-1)))
let total = 0;
const profit = cars.reduce((total, car) => total += car.gross_profit, 0)
console.log('profit', profit)
const bestMonth = () => {
    let counts = Array(12).fill(0)
    let index = 0
    cars.forEach(car => {
        index = (car['purchase_date'].split('-')[1]).replace('0','')
        counts[index-1] += 1
    })
    return counts;
    
}
const months = {'1': 'January', '2': 'February', '3': 'March', '4': 'April', '5': 'May', '6': 'June', '7': 'July', '8': 'August', '9': 'September', '10': 'October', '11': 'November', '12': 'December'}
const counts = bestMonth()
const best = counts.indexOf(Math.max(...counts))
console.log("Best Month:", months[best])
const peeps = {}
cars.forEach(car => {
    let person = car.sales_agent.first_name + " " + car.sales_agent.last_name
    if (peeps[person]){
        peeps[person] += 1
    } else{
        peeps[person] = 1
    }
})

console.log(peeps)
let maxi = 0;
let maxp = 0
let mvp = ""
let mvps = ""
for (peep in peeps){
    if (peeps[peep] > maxi){
        maxi = peeps[peep]
        mvp = peep
    }
    
}

console.log("Bestest Sales Person:", mvp)
let car_names = {}
cars.forEach(car => {
    let carN = car.vehicle.make + " " + car.vehicle.model
    if (car_names[carN]){
        car_names[carN] += 1
    } else{
        car_names[carN] = 1
    }
})
let max_cars = 0
let maxName = ""
for(name in car_names){
    if (car_names[name] > max_cars){
        max_cars = car_names[name]
        maxName = name
    }
}
let bank_names = {}
cars.forEach(car => {
    let bankN = car.credit.credit_provider
    if (bank_names[bankN]){
        bank_names[bankN] += 1
    } else{
        bank_names[bankN] = 1
    }
})
let max_bank = 0
let maxB = ""
for(bank in bank_names){
    if (bank_names[bank] > max_bank){
        max_bank = bank_names[bank]
        maxB = bank
    }
}
cars.forEach(car => {
    let person = car.sales_agent.first_name + " " + car.sales_agent.last_name
    let sales = car.gross_profit
    if (peeps[person]){
        peeps[`${person} Sales`] += sales
    } else{
        peeps[`${person} Sales`] = sales
    }
})
for (peep in peeps){
    if (peeps[peep] > maxp){
        maxp = peeps[peep]
        mvps = peep
    }
}

console.log('Max Sales:', mvps)
console.log('Most popular car:', maxName)
console.log('Bestest Bank:', maxB)