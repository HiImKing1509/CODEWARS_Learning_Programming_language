// Submitted
fn disemvowel(s: &str) -> String {
    let str = s.replace(&['A','E','I','O','U','a','e','i','o','u',][..], "");
    str
}
  
// Run to test
fn main() {
    let res = disemvowel("huynh viet tuan kiet");
    println!("{}", res);
}
