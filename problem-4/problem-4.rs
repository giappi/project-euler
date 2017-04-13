

fn is_palindrome(x:u32)->bool
{
    let mut y = 0;
    let mut z = x;
    while z > 0
    {
        y = y*10 + z%10;
        z = (z - z%10)/10;
    }
    return x == y;
}

fn main()
{
    
    let mut a = 0;
    let mut b = 0;

    let mut i = 999;
    while i > 99
    {
        let mut j = 999;
        while j > 99
        {
            if is_palindrome(i*j) && i*j > a*b
            {
                a = i;
                b = j;
            }
            j -= 1;
        }
        i -= 1;
    }
    
    println!("the largest palindrome made by product of {0}*{1} is {2}",a, b, a*b);
}