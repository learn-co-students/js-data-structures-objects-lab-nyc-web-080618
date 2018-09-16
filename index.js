// Write your solution in this file!

  let driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  new_driver = Object.assign({},driver)
  delete new_driver[key]
  return new_driver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
