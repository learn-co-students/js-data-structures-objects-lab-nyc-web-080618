const driver = {};

function updateDriverWithKeyAndValue(driver, key_value, value_value) {
  return Object.assign({}, driver, { [key_value]: value_value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
