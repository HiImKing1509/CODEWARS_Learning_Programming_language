// Submitted
fn array_diff<T: PartialEq>(a: Vec<T>, b: Vec<T>) -> Vec<T> {
    let mut result: Vec<T> = Vec::new();
    for num in a {
        if !b.contains(&num) {
            result.push(num);
        }
    }
    result
}

// Run to test
fn main() {
    let res: Vec<_> = array_diff(vec![1,2,2,2,3], vec![2]);
    println!("{:?}", res);
}
