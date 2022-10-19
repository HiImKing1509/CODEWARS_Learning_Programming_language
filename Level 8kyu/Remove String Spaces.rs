// Submitted
fn no_space(x : String) -> String {
    let mut a = x.replace(" ", "");
    return a;
}

// Run to test
fn main() {
    let mut x = String::from("b   aa  aaaa ");
    x = no_space(x);
    println!("{}", x);
}
