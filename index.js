// Number 1: Validating if 2 passwords match and verifying if conditions are met

function validatePassword(pass1, pass2){

    if(typeof(pass1) == "string" && typeof(pass2) == "string"){
        if(pass1 === pass2){
            if(checkLength(pass1)){
                if(checkNumber(pass1)){
                    if(checkUppercase(pass1)){
                        if(checkLowercase(pass1)){
                            return true;
                        }
                    }
                }
            }
        }
    }

    return false;
}

function checkLength(pass1){ // To check if the length of the password is at least 8 characters
    if(pass1.length >= 8){
        return true;
    } else {
        return false;
    }
}

function checkNumber(pass1){ // To check if the password has at least one number
    var numbers = "1234567890"

    // to check if one of the characters in the password is a number by loop
    for(let i = 0; i <= numbers.length; i++){

        // loop for checking each character in the password
        for(let j = 0; j<= pass1.length; j++){
            if(numbers[i] === pass1[j]){
                return true;
            } 
        }
    }

    return false;
}

function checkUppercase(pass1){ // To check if at least one character is uppercase

    var numbers = ["1","2","3","4","5","6","7","8","9","0"]
    var isNumber = false
    
    for(let i = 0; i <= pass1.length; i++){
        for(let j = 0; j <= numbers.length; j++){
            if(pass1.charAt(i) == numbers[j]){
                isNumber = true
            }
        }

        if(isNumber === false){
            if(pass1.charAt(i).toUpperCase() === pass1.charAt(i)){
                return true;
            }
        }
    }
    return false;
}

function checkLowercase(pass1){ // To check if at least one character is lowercase

    var numbers = ["1","2","3","4","5","6","7","8","9","0"]
    var isNumber = false
    
    for(let i = 0; i <= pass1.length; i++){
        for(let j = 0; j <= numbers.length; j++){
            if(pass1.charAt(i) == numbers[j]){
                isNumber = true
            }
        }

        if(isNumber === false){
            if(pass1.charAt(i).toLowerCase() === pass1.charAt(i)){
                return true;
            }
        }
    }
    return false;
}

console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))
