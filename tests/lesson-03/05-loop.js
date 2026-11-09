//1. Sum of 1 to 100 using for loop
let sum = 0;
for (let i=1; i<=100; i++) {
    sum +=i;
}
console.log(sum);

//2. Print 9 times tables
for (let i=2; i<=9; i++) {
    console.log(`===Bảng cửu chương ${i}===`);
    for (let j=1; j<=10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
        
//3. Create array contains odd number from 1 to 99
for (let i=1; i<100; i+=2) {
    console.log(i);
}   
//OR
for (let i=1; i<100; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }
}

//4. Print 10 emails using for loop
for (let i=1; i<=10; i++) {
    console.log(`user${i}@example.com`);
}

//5. Print total income
let incomeByMonth = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 100 },
    { "month": 4, "total": 100 },
    { "month": 5, "total": 100 },
    { "month": 6, "total": 100 },
    { "month": 7, "total": 100 },
    { "month": 8, "total": 100 },
    { "month": 9, "total": 100 },
    { "month": 10, "total": 100 },
    { "month": 11, "total": 100 },
    { "month": 12, "total": 100 },
];
let totalIncome = 0;
//calculate totla income
for (i=0; i<incomeByMonth.length; i++) {
    totalIncome += incomeByMonth[i].total;
}
console.log(`Total income: ${totalIncome}`);