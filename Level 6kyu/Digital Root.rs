fn vectorize(num: i64) -> i64 {
    let vec: Vec<i64> = num
        .to_string()
        .chars()
        .map(|d| d.to_digit(10).unwrap() as i64)
        .collect();
    vec.iter().sum()
}

fn digital_root(num: i64) -> i64 {
    let mut sum: i64 = num;
    while sum >= 10 {
        sum = vectorize(sum);
    }
    sum
}

// Run to test
fn main() {
    let res = digital_root(942);
    println!("{}", res);
}
