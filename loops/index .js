//WHILE LOOP

//let Gender = 'Male'

//while (Gender == 'Male'){
   // console.log( 'you are a man' )
//}

/*let number = 0;
while (number < 10) {
    console.log('i am a man');
    number++
    

} 

let number = 0;
while (number < 10) {
    if (number % 2 == 0){
        console.log(`${number} is an even number`)
    } else{
        console.log(` ${number} is an odd number`)
    }
    number++
}

//DO WHILE LOOP

let secondnumber = 1;
do{
    console.log(`The number is ${secondnumber}`)
    secondnumber++

}while (secondnumber < 5) 
    


//FOR LOOP
for(let i = 0; i <5 ; i++){
    console.log('i am a boy')}

    for(let i  =0 ; i <5; i++)
    
 

    //NESTING FOR LOOP
    for(let i = 0; i < 5; i++){
        console.log(`N10,000 alert recived`)
        for(let j = 0; j < 3; j++){
            console.log(`${j + 1 } Ram rice recived from West`)
        }
    }
        
       // write a palind rome checker

       
       //FOR OF LOOP
       let arryOfAge = [23, 24, 25, 26]
       for (age of arryOfAge){
        console.log(++age)
       }
       
       //FOR IN LOOP

       const westAccount = {
        bank: 'Access bank',
        "account name": 'West Money Money ',
         accNumber: '8109804996'   
       }
       for( keys in westAccount){
        console.log(westAccount[keys])
       }
         



}

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

function isPalindrome(str) {
    let j = str.length -1
    for (let i = 0; i < str.length/2; i++) {
    if(str[i] != str[j])
        return false;
        
  }
    
}
*/
//function isPalindrome(str) { const reversedStr = str.split("").reverse().join(""); return str === reversedStr; }

//console.log(isPalindrome("madam")); // true console.log(isPalindrome("hello")); // false

    
