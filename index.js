// Write your solution in this file!
const driver = {};

//returns a driver with the original key value
//pairs the new key value pair
function updateDriverWithKeyAndValue(driver, key, value) {
  //non-destructive
    return Object.assign({}, driver, {[key]: value});
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
    return driver;
}


function deleteFromDriverByKey(driver, key) {
  //non destructive function, therefore I need to
  //declare a new object and use the assign method to delete
  const new_object = Object.assign({}, driver);

  delete new_object[key];
    return new_object;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
    return driver;
}
