// function repeat(operation, num) {
//   let count = num;
//   while (count > 0) {
//     operation();
//     --count;
//   }
// }

// recursive answer
function repeat(operation, num) {
  if (num <= 0) {
    operation();
    repeat(operation, --num);
  }
}

module.exports = repeat;
