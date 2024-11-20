const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0)
    {
        return "OOPS";
    }
    else if(num <= 1)
    {
        return num;
    }
    else
    {
        let fib = 0;
        let a = 0;
        let b = 1;
        for(let i = 1; i < num; i++)
        {
            fib = a + b;
            a = b;
            b = fib;
        }
        return fib;
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
