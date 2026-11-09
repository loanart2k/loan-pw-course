//1. multiply 2 numbers
function multiply(a, b) {
    return a * b;
}

multiply(2, 3);
console.log(multiply(2, 3));
multiply(10, 1000);
console.log(multiply(10, 1000));

//2. find minimum number in an array
function findMin(array){
    let min = array[0];
    for (let i=1; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min; 
}
const numbers = [10, 15, 26, 1, 5, 100, 2];
console.log(findMin(numbers));

//3. get topStudents
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
]
console.log(getTopStudents(students, 80));

//4. calculate interest
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years/100;
    return total;
}
console.log(calculateInterest(1000, 5, 2));