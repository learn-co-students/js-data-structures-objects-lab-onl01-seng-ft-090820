// Write your solution in this file!
const driver = {name: "David"}

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
    const obj = {}
    const newObj = Object.assign(obj, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}