function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  array = ['a', 'series', 'of', 'unfortunate', 'events'];
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
