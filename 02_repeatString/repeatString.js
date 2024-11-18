const repeatString = function(string, num) {
    let saying = string;
    for(let i = 1; i < num; i++)
    {
        saying += string;
    }

    if(num == 0)
    {
        return '';
    }

    if(num < 0)
    {
        return 'ERROR';
    }
    
    return saying;
};

// Do not edit below this line
module.exports = repeatString;
