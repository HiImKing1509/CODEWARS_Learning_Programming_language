// Submitted
fn square_digits(num: u64) -> u64 {
    let mut s: String = String::from("");
    let numerics: Vec<_> = num.to_string()
                      .chars()
                      .map(|c| c.to_digit(10).unwrap())
                      .collect();
    let doubled: Vec<_> = numerics.iter().map(|x| x * x).collect();
    for number in doubled {
        s.push_str(&number.to_string());
    }
    let result: u64 = s.parse().unwrap();
    result
}

// Run to test
fn main() {
    let res = square_digits(9119);
    println!("{}", res);
}
