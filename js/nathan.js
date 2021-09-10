// param array is an integer array
// returns the min in the array
function min(array) {

    let minValue = array[0];

    for (i=1; i<array.length-1; i++) {
        if (array[i] < minValue) {
            minValue=array[i];
        }
    }

    return minValue;   
}
