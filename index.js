const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
  var newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver,key){
  var newObj = {...driver};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
