// Submitted
fn likes(names: &[&str]) -> String {
    let mut s = String::new();
    if names.len() == 0 {
        s = format!("no one likes this");
    } else if names.len() == 1 {
        s = format!("{} likes this", names[0]);
    } else if names.len() == 2 {
        s = format!("{} and {} like this", names[0], names[1]);
    } else if names.len() == 3 {
        s = format!("{}, {} and {} like this", names[0], names[1], names[2]);
    } else {
        s = format!("{}, {} and {} others like this", names[0], names[1], names.len() - 2);
    }
    s
}

// Run to test
fn main() {
    let res = likes(&["Jacob", "Alex"]);
    println!("{}", res);
}

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
