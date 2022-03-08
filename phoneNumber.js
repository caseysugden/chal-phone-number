function createPhoneNumber(arr) {
    arr.splice(-10, 0, '(');
    arr.splice(-7, 0, ') ');
    arr.splice(-4, 0, '-');
    return arr.join("");
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(array));

// function createPhoneNumber2(arr) {
//     return `(${arr.slice(0,3).join("")}) ${arr.slice(3,6).join("")}-${arr.slice(6,10).join("")}`;
// }

// console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
