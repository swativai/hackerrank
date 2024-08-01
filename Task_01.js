array = [-4, 1, 0, -1, -1, 3];

var positiveNumCount = 0;
var negativeNumCount = 0;
var zeroCount = 0;

function plusMinus(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumCount++;
    } else if (array[i] < 0) {
      negativeNumCount++;
    } else if (array[i] == 0) {
      zeroCount++;
    }
  }

  var positiveNumRatio = (positiveNumCount / array.length).toFixed(6);
  console.log(positiveNumRatio);

  var negativeNumRatio = (negativeNumCount / array.length).toFixed(6);
  console.log(negativeNumRatio);

  var zeroRatio = (zeroCount / array.length).toFixed(6);
  console.log(zeroRatio);
}

plusMinus(array);
