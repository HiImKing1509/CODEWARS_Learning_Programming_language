// Submitted
fn create_phone_number(numbers: &[u8]) -> String {
    let s = format!("({}{}{}) {}{}{}-{}{}{}{}", numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], numbers[6], numbers[7], numbers[8], numbers[9]);
    s
}

// Run to test
fn main() {
    let res = create_phone_number(&[0, 7, 9, 6, 6, 1, 6, 1, 1, 1]);
    println!("{}", res);
}
