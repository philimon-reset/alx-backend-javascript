export default function appendToEachArrayValue(array, appendString) {
	for (let id of array) {
	  let value = array.id;
	  array[id] = appendString + value;
	}
      
	return array;
      }