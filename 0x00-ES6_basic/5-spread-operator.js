export default function concatArrays (array1, array2, string, ...args) {
  return array1.concat(array2, [...string]);
}
