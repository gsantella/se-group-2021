function min(array) {

    let min = array[0];

    for (let i=1; i < array.length; i++) {
        (array[i] < min) ? min = array[i] : null;
    }

    return min;
}

function max(array) {
    
    let max = array[0];

    for (let item of array) {
        (item > max ) ? max = item : null;
    }

    return max;    
}

function avg(array) {
    let sum = 0;
    array.forEach(element => sum += element);
    //array.map(element => sum += element);
    return sum;
}