// Write your solution in this file!
const driver = {name: "Dasha"}

function updateDriverWithKeyAndValue(driver, key, value) { 
    const newDriver = {...driver} 
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value 
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const object = {} 
    const newObject = Object.assign(object, driver)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key] 
    return driver
}