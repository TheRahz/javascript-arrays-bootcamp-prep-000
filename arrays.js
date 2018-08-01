var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newArray = array
  newArray[newArray.length - 1] = element
  return newArray
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array = array.slice(0,1)
  return array
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(0,1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  array = array.slice(-1)
  return array
}