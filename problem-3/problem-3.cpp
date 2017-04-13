
/*

	Problem 3: Largest prime factor

	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143 ?

	https://projecteuler.net/problem=3
	
*/

#include <iostream>
using namespace std;

typedef unsigned long long Number;

Number is_prime(Number x)
{
	bool prime = x > 1;
	for(Number i = 2; i*i <= x; i++)
	{
		if(x % i == 0)
		{
			prime = false;
			break;
		}
	}
	return prime;
}

Number prime_factors_max(Number x)
{
	Number factor = 2;
	while(factor < x)
	{
		if(x % factor == 0)
		{
			x = x/factor;
		}
		else
		{
			factor = factor + 1;
			// find next factor
			while(is_prime(factor) == false)
			{
				factor = factor + 1;
			}
		}
	}
	return factor;
}

int main()
{
	Number x = 600851475143;
	std::cout << "greatest factor of" << x << " is " << prime_factors_max(x) << ".\n";
	return 0;
}