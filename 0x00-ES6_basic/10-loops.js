export default function appendToEachArrayValue(array, appendString) {
  for (let id of array) {
    const value = array[id];
    array[id] = appendString + value;
  }

  return array;
}
