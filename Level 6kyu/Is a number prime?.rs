// Submitted
fn is_prime(x: i64) -> bool {
    if x <= 1 {
        return false
    } else {
        let xx = f64::sqrt(x as f64) as i64 + 1;
        for i in 2..xx {
            if x % i == 0 {
                return false
            }
        }    
    }
    true
}

// Run to test
fn main() {
    let check = is_prime(10);
    println!("{}", check);
}
