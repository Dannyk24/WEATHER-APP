const maxSize = 4; //This is the max size of the weatherHistoryArray
export function addItem(item, array) {
  if (array.length >= maxSize) {
    array.shift();
  }
  array.push(item);
}
