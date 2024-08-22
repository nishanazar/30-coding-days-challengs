function mergeSortedArrays(arr1, arr2) {
    var result = [];
    var a = 0;
    var b = 0;
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] < arr2[b]) {
            result.push(arr1[a]);
            a++;
        }
        else {
            result.push(arr2[b]);
            b++;
        }
    }
    while (a < arr1.length) {
        result.push(arr1[a]);
        a++;
    }
    while (b < arr2.length) {
        result.push(arr2[b]);
        b++;
    }
    return result;
}
var mergeArray = mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);
console.log("Merged Array:", mergeArray);
//Merged Array: [ 1, 2, 3, 4, 5, 6, 7, 8]
