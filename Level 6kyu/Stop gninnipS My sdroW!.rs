fn spin_words(words: &str) -> String {
    let vec = words.split(" ");
    let mut vec_res: Vec<&str> = Vec::new();
    for s in vec {
        if s.len() >= 5 {
            vec_res.push(string_to_static_str(s.chars().rev().collect::<String>()));
        } else {
            vec_res.push(s);
        }
    }
    vec_res.join(" ")
}

fn string_to_static_str(s: String) -> &'static str {
    Box::leak(s.into_boxed_str())
}

// Run to test
fn main() {
    let res = spin_words("I am Huynh Viet Tuan Kiet");
    println!("{}", res);
}
