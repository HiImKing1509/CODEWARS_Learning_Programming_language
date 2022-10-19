// Submitted
fn even_or_odd(i: i32) -> &'static str {
    let x = if i % 2 == 0 { "Even" } else { "Odd" } ;
    return x ;
}

// Run to test
fn main() {
    let res = even_or_odd(23);
    println!("{}", res);
}
