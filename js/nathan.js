// array is an integer array
// returns the min in the array
function min(array) {
    console.log("stub for min");

    //Variable...
    let x = 0;

    //Pull min number from array...

    for(i=0; i<array.length-1;i++)
    {
        if(i==0){
            x=array[i];
        }
        else{
            if(array[i]<x){
                x=array[i];
            }
        }
    }
    return x;
}
