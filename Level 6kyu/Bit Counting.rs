fn count_bits(n: i64) -> u32 {
    format!("{:b}", n).to_string().matches("1").count() as u32
}

// Run to test
fn main() {
    let res = count_bits(5);
    println!("{}", res);
}
