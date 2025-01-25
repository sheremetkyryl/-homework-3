//1

const result = 5 + 5 + '5';
console.log(`${result}, ${typeof result}`);

//2

const email = "kruisher@gmail.com";

if(email.includes('@')) {
    console.log("Email містить '@'.");
} else {
    console.log("Email не містить '@'.");
}
console.log("Кількість символів у Email:", email.length);

//3

const firstWord = "My ";
const secondWord = "name ";
const thirdWord = "is ";
const fullName = firstWord + secondWord + thirdWord + "Viktor";
console.log(fullName);

//4

const userName = "Олександро";
const payment = "300";

alert (`Дякуємо, ${userName}! До сплати ${payment} гривень`);