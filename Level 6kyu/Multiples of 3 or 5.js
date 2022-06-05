function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 && i % 5) {
            continue;
        } else {
            sum += i
        }
    }
    return number < 0 ? 0 : sum;
}
