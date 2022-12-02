// 1. Given two objects. Write a function that performs shallow compare.




function compareObject(firstObject, secondObject) {
    let valid;
    if (Object.keys(firstObject).length === Object.keys(secondObject).length) {
        for (let key in firstObject)
            if (key in secondObject) {
                valid = true
                console.log(valid)
            } else {
                valid = false
                console.log(valid)
                break;
            }
    }
    if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
        valid = false
        console.log(valid)
    }

}

compareObject({ a: 1 }, { a: 1, b: 2 })


//   2.


function isIsogramm(word){
    let arr=[];
for(let idx=0;idx<word.length;idx++){
  if(arr.includes(word[idx])){
console.log('This word is not a isogramm')
    break;
  } else if (!arr.includes(word[idx])){
    arr.push(word[idx]);
  
}}
return arr;
};


console.log(isIsogramm('Foxxx'));













// 3.// Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
// 5, 8 …, ak = ak-1 + ak-2)


function fibonachi (n){
    let prev = 0, next = 1;
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;
        return prev;
    }
    console.log(fibonachi(10))











    //   4. Insert a number. Calculate product and sum of the digits of the number. If product is
    //   divisible by the sum, print the quotient, otherwise print the remainder.



    function calculateProductAndSum(number) {

        let productOfDigits = 1;
        let sumOfDigit = 0;
        let stringNumber;

        if (number > 0) {
            stringNumber = number.toString()

            for (let idx = 0; idx < stringNumber.length; idx++) {

                productOfDigits *= +stringNumber[idx]
            }
            for (let i = 0; i < stringNumber.length; i++) {
                sumOfDigit += +stringNumber[i]
            }

        }
        let sumDivisivleOfProduct = sumOfDigit % productOfDigits;
        let productDivisbeSum = productOfDigits / sumOfDigit;
        if (productDivisbeSum !== 0) {
            console.log('Quotient, is a ', `${productDivisbeSum}`)
        } else {
            console.log('Reminder is a ', `${sumDivisivleOfProduct}`)
        }
    };
}
    calculateProductAndSum(5);








