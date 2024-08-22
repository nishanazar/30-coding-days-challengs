//----------Question: 37------------------------------------
function findMaxDifference(arr) {
    var min = arr[0];
    var maxDifference = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] - min > maxDifference) {
            maxDifference = arr[i] - min;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return maxDifference;
}
console.log(findMaxDifference([2, 7, 9, 5, 1, 3, 5]));
