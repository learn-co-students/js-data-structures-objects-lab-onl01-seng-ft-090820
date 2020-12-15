// Write your solution in this file!
const driver = {name: "Sam", location: "LA"} 

function updateDriverWithKeyAndValue(object, key, value) { 
    const newDriver = {...driver} 
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromDriverByKey(driver, key) {
    const obj = {} 
    const newObj = Object.assign(obj, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}