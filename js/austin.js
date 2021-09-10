// array is an integer array
// returns the max in the array
function max(array) {
    
    let a = array.length
    let b = 0;
    
    for ( let i = 0 ; i < a; i++)
    {
        console.log(array[i])
        if (array[i] > b)
        {
            b = array[i];
        }
    }


    return b;
    
    
   
}