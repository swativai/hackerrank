array = [-4, 1, 0, -1, -1, 3];

var positive_count = 0;
var negative_count = 0;
var zero_count = 0;

function plusMinus(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive_count++;
    } else if (array[i] < 0) {
      negative_count++;
    } else if (array[i] == 0) {
      zero_count++;
    }
  }

  var calculatePos = (positive_count / array.length).toFixed(6);

  console.log(calculatePos);

  var calculateNeg = (negative_count / array.length).toFixed(6);
  console.log(calculateNeg);

  var calculateZero = (zero_count / array.length).toFixed(6);
  console.log(calculateZero);
}

plusMinus(array);
