// Write your solution in this file!
function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

const driver = {
  name: "sam"
}

const newdriver = updateDriverWithKeyAndValue(driver, "address", "11 Broadway");

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj
}

function deleteFromDriverByKey(driver, key, value) {
  const newObj = { ...driver };

  newObj[key] = value;

  return newObj;
}

const update = delete newdriver.address;

function destructivelyDeleteFromDriverByKey(driver, name) {
  driver = delete driver.name;
  return driver
}
