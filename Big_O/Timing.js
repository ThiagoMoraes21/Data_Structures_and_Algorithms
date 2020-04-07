// Linear time O(n)
const addUpTo1 = n => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

const t1 = new Date();
addUpTo1(1000000000);
const t2 = new Date();
console.log(`Time Elapsed addUpto1(): ${(t2 - t1) / 1000} seconds.`)


// Constante time O(1)
const addUpTo2 = n => n * (n + 1) / 2;

const t3 = new Date();
addUpTo2(1000000000);
const t4 = new Date();
console.log(`Time Elapsed addUpto2(): ${(t3 - t4) / 1000} seconds.`)