
/*
    Problem 1: Multiples of 3 and 5

    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.

    https://projecteuler.net/problem=1

*/

// arithmetic progression
function sumofprogression(a, n, d)
{
    return (2*a*1 + (n-1)*d)*n/2;
}


// solution
function multiple35(n)
{

    // below n -> 1 to n-1
    n = n-1;
    // calculate sum of number of multiple of 3
    m = (n - n%3)/3;
    multiple3     = sumofprogression(3, m, 3);
    console.log(multiple3);

    // calculate sum of  number of multiple of 5
    m = (n - n%5)/5;
    multiple5     = sumofprogression(5, m, 5);
    console.log(multiple5);

    // calculate sum of  number of multiple of 3 and 5
    m = (n - n%15)/15;
    multiple3and5 = sumofprogression(15, m, 15);
    console.log(multiple3and5);

    // calculate sum of  number of multiple of 3 or 5
    multiple3or5  = multiple3 + multiple5 - multiple3and5;

    return multiple3or5;  
}

// use function
n = 1000;
console.log(multiple35(n));

// result: 233168