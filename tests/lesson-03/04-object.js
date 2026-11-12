//1. Print the year of the car object to the console.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
}
console.log(car.year);

//2. Print the street of the address object to the console.
const person = {
    name: 'Name',
    address : {
        street: 'Street',
        city: 'city',
        country: 'Country'
    }
}
console.log(person.address.street);

//3. Print using [] notation the math grade of the student object to the console.
const student = {
    name: 'Name',
    grades: {
        math: 9,
        english: 10
    }
}
console.log(student["grades"]["math"]);

//4. Update value then print
const settings = {
    volume: 10,
    brightness: 70
}
settings.volume = 20;
console.log(settings.volume);           

//5. Add new key 
const bike = {}
bike.color = 'red';

//6. Remove key from object
const employee = {
    name: 'Loan',
    age: 26,
}
delete employee.age;

//7. Array in object
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
