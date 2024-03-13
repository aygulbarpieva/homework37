// 1)

const obj = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string"
};
for(let key in obj){
    console.log(key);
}


// 2)

const obj = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string"
};
for (const key in obj){
    if (typeof (obj[key] === null)) {
        delete obj.b;
        delete obj.d;
    }
    console.log(key);
    console.log(obj[key]);
}


// 3)

let students = {
    a: 'Nick',
    b: 'Jack',
    c: 'Ann',
    d: 'Helen'
}
for (let key of Object.values(students)) {
    if(key === 'Ann'){
        continue
    }
    console.log(key);
}


// 4)

const array = [2, 3, 56, 7, 100];
let sum = 0;
for (let i = 0; i < array.length; i++){
    sum = sum + array[i] / 5;
}
console.log(sum);


// 5)

const studentsByClass = [
    ["1A", ["Alice", "Bob", "Charlie "]],
    ["2B", ["David", "Emily", "Frank "]],
    ["3C", ["Grace", "Henry", "Ivy"]]
];
let keysvalues = '';
let sum = 0;
for (let i = 0; i < 1; i++){
        sum = keysvalues + studentsByClass[i];
}
console.log(sum);
for (let i = 0; i < 2; i++) {
    sum = keysvalues + studentsByClass[i];
}
console.log(sum);
for (let i = 0; i < 3; i++) {
    sum = keysvalues + studentsByClass[i];
}
console.log(sum);