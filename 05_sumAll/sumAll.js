const sumAll = function(num1, num2) {
    let total = 0;
    
    if(num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }

    if(num1 % 1 != 0 || num2 % 1 != 0)
    {
        return "ERROR";
    }

    if(typeof num1 == "string" || typeof num2 == "string")
    {
        return "ERROR";
    }

    if(Array.isArray(num1) || Array.isArray(num2))
    {
        return "ERROR";
    }

    if(num2 > num1)
    {
       for(let i = num1; i <= num2; i++)
        {
            total += i;
        } 
    }
    else
    {
        for(let i = num2; i <= num1; i++)
            {
                total += i;
            } 
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
