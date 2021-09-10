// array is an integer array
// returns the min in the array
function min(array) {
    console.log("stub for min");

    //Variable...
    let minValue = 0;

    //Pull min number from array...
    if(array[0])
    {
        minValue=array[0];
    }
    for(i=0; i<array.length-1;i++)
    {
        if(array[i]<minValue)
        {
            minValue=array[i];
        }
    }
    return minValue;
    /*
    Example with 1 less loop.

    if(array[0])
    {
        minValue=array[0];
    }
    for(i=1; i<array.length-1;i++)
    {
        if(array[i]<minValue)
        {
            minValue=array[i];
        }
    }
    return minValue;
    */
}
