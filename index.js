const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, name) {
//     return drivers.filter(function(driver) {
//         return driver.toLowerCase() === name.toLowerCase()
//     })
// }

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.slice(0,1) === name.slice(0,1)
    })
}

function matchName(driver, string) {
    return driver.filter(function(matchingName) {
        return matchingName.name === string
    })
}