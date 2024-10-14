//5
console.log("Hello, World!");

//6
let name = "Batyrkhan";
console.log(`My name is ${name}`);

let age = 19;
console.log(`I am ${age} years old`)

//7
let number1 = 163;
let number2 = 7;
let result = number1 + number2;
console.log(`Addition of ${number1} and ${number2} equals to: ${result}`);

//9
const year = prompt("Please, enter a year: ")
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("It's a leap year");
}
else {
    console.log("It's not a leap year");
}

//10
function multiply(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = num1*num2;
    document.getElementById('result').innerText = result;
}

function divide(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num2 == 0){
        document.getElementById('result').innerText = "Can not divide by zero"
    } else {
        let result = num1 / num2;
        document.getElementById('result').innerText = result;
    }
}

// 11
let choice = prompt("Type 'F to C' to convert Fahrenheit to Celsius or type 'C to F' to convert Celsius to Fahrenheit: ");
if (choice === 'F to C') {
    let fahrenheit = prompt("Enter a temperature in Fahrenheit: ");
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F is ${celsius}°C`)
} else if (choice === "C to F") {
    let celsius = prompt("Enter a temperature in Celsius: ");
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`)
} else {
    console.log("Invalid input")
}

//12
function checkOddEvenNumber(number) {
    if (number % 2 === 0) {
        return "The number is even";
    } else {
        return "The number is odd";
    }
}

console.log(checkOddEvenNumber(8));

//13 
function checkNumbers(num1, num2, num3){
    if (num1 === num2 && num1 === num2 && num2 === num3) {
        console.log(`All the numbers are equal: ${num1}`);
    } else {
        if (num1 >= num2 && num1 >= num3){
            console.log(`${num1} is the largest`);
        } else if (num2>=num1 && num2 >= num3) {
            console.log(`${num2} is the largest`);
        } else {
            console.log(`${num3} is the largest`);
        }

        if (num1 <= num2 && num1 <= num3){
            console.log(`${num1} is the smallest`);
        } else if (num2 <= num1 && num2 <= num3){
            console.log(`${num2} is the smallest`);
        } else {
            console.log(`${num3} is the smallest`);
        }
    }
}

let input1 = parseFloat(prompt("Enter the 1st number: "));
let input2 = parseFloat(prompt("Enter the 2nd number: "));
let input3 = parseFloat(prompt("Enter the 3rd number: "));

checkNumbers(input1, input2, input3);

//15
function calculateFactorial(n){
    if (n === 0 || n === 1){
        return 1;
    }

    return n * calculateFactorial(n-1);
}
console.log(calculateFactorial(5));

//16
let vCount = 0;
let cCount = 0;
let str = "Hello there! This is a simple sentence";
str = str.toLowerCase();
for (let i = 0; i < str.length; i++){
    let char = str[i];
    if ('aeiou'.includes(char)){
        vCount++;
    } else if (char >= 'a' && char <= 'z') {
        cCount++;
    }
}

console.log("Vowel count: ", vCount);
console.log("Consonant count: ", cCount);


//17
let carPrice = parseFloat(prompt("Enter the price of your car: "))
if (carPrice > 10000) {
    console.log(`Your tax is: ${carPrice * 25 / 100 }`);
} else if (carPrice >= 5000 && carPrice <= 10000) {
    console.log(`Your tax is: ${carPrice * 15 / 100}`);
} else if (carPrice < 5000) {
    console.log(`Your tax is: ${carPrice * 10 / 100}`);
} else {
    console.log("Invalid input.")
}

//18
function findMostFrequentNumber(arr){
    let maxCount = 0;
    let mostFrequentNum = null;
    for (let i = 0; i < arr.length; i++){
        let count = 0;

        for (let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]){
                count++;
            }
        }

        if (count > maxCount){
            maxCount = count;
            mostFrequentNum = arr[i];
        }
    }

    return mostFrequentNum;
}

const numbers = [1, 3, 2, 4, 1, 1, 1, 3, 2, 6];
const res = findMostFrequentNumber(numbers);
console.log(`The most frequent number is: ${res}`);

//19
function fibonacci(n){
    if (n <= 1){
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(8));

//20
function countDaysLeftBeforeNewYear(){
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const difference = newYear - today;
    return Math.ceil(difference / (1000*60*60*24));
}

console.log(`Days left before New Year: ${countDaysLeftBeforeNewYear()}`);