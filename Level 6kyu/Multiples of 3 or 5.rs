// Submitted
fn solution(num: i32) -> i32 {
    let mut result = 0;
    for n in 3..num {
        if n % 3 == 0 || n % 5 == 0 {
            result += n;
        }
    }
    return result;
}

// Run to test
fn main() {
    let res = solution(23);
    println!("{}", res);
}
