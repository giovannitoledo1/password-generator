/*Will revist project to add functioing copy button, password length and toggle symbols on and off. */

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-password");
let passwordEl = document.getElementById("password-el");
let passwordTwoEl = document.getElementById("passwordTwo-el");
let isAlive = true;

function clearPasswords (){
    passwordEl.textContent = ""
    passwordTwoEl.textContent = ""
}
function generatePassword (){
   
    for(let i =0; i<15; i++){
        let passwordOne = Math.floor(Math.random() * characters.length);
        let passwordtwo = Math.floor(Math.random() * characters.length);
        if(passwordEl.textContent.length < 15){ 
            passwordEl.textContent += characters[passwordOne]
            passwordTwoEl.textContent += characters[passwordtwo]
        }
    }
}

function copy(){
    let copyPass = passwordEl.textContent;
    navigator.clipboard.writeText(copyPass)
}