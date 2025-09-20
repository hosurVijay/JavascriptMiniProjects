const passwordBox = document.getElementById("password");
const length = 10;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbols = "@#$&*()_+~|{}[]<>/-=?";

const allChar = upperCase + lowerCase + number ;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += specialSymbols[Math.floor(Math.random()*specialSymbols.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }


    passwordBox.value = password
}; 




