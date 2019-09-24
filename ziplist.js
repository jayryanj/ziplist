function zipList(list1, list2) {
  const result = [];
  for (let x = 0; x < list1.length; x++) {
    result.push(list1[x]);
    result.push(list2[x]);
  }
  return result;
}

function zipListTheEasyWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
console.log(zipList(letters, numbers));
console.log(zipListTheEasyWay(letters, numbers));
