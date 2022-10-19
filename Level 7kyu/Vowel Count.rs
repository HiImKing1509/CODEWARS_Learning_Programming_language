// Submitted
fn get_count(string: &str) -> usize {
    let mut vowels_count: usize = 0;
    let vowels_list = vec!['a', 'e', 'i', 'o', 'u'];
    for ch in string.chars() {
        if vowels_list.contains(&ch) {
            vowels_count += 1;        
        }
    }
    vowels_count
}
  
// Run to test
fn main() {
    let res = get_count("huynh viet tuan kiet");
    println!("{}", res);
}
