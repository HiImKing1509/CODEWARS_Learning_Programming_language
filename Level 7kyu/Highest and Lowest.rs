// Submitted
fn high_and_low(numbers: &str) -> String {
    let mut arr: Vec<i32> = numbers.split(" ")
                               .map(|x| x.parse::<i32>().unwrap())
                               .collect();
    arr.sort();
    let max: String = arr[arr.len() - 1].to_string().to_owned();
    let min: String = arr[0].to_string().to_owned();
    let result = [max, min].join(" ");
    result
}

// Run to test
fn main() {
    let res = high_and_low("3 1 2 3");
    println!("{:?}", res);
}
