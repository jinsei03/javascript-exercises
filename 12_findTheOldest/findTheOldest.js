const findTheOldest = function(array) {
    let ages = [];
    for(let i = 0; i < array.length ;i++){
            if(array[i].yearOfDeath == undefined)
            {
                array[i].yearOfDeath =  new Date().getFullYear();
            }
            ages.push(Math.abs(array[i].yearOfDeath - array[i].yearOfBirth));
            
        }
    let index = 0;
    let max = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(ages[max] < ages[i])
        {
            max = i;
            index = ages.indexOf(ages[i]);
        }
    }
    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
