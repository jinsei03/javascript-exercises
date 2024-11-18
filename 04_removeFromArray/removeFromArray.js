const removeFromArray = function(arr, num1 = null, num2 = null, num3 = null, num4 = null) {
    const arr1 = [];
    for(let i = 0; i  < arr.length; i++)
    {
        if(arr[i] !== num1 && arr[i] !== num2 && arr[i] !== num3 && arr[i] !== num4)
        {
            arr1.push(arr[i]);
        }
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
