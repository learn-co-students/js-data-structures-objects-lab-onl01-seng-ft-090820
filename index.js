// Write your solution in this file!
const driver = { }

function updateDriverWithKeyAndValue(driver, key, value) {

    return Object.assign({}, driver, {[key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const new_objejct = Object.assign({}, driver);
    delete new_objejct[key];
    return new_objejct;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    Object.assign({}, driver);
    delete driver[key];
    return driver;
}