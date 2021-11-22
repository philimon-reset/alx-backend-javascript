export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const id of array) {
    array2.push(appendString + array[array.indexOf(id)]);
  }
  return array2;
}
