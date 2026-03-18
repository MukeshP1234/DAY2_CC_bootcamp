const x=20;
let name = "John";  
let age = 20;  
let isStudent = true;
let fruits = ["apple", "banana", "mango"];
let dict = {"A":1,"B":2,"C":3};
const add = (a, b) => {
    return a + b;
};
const evens = [1,2,3,4].filter(n=>n%2===0);
const sqr = [1,2,3,4].map(n=>n*n);
button.addEventListener('click',()=> {
    console.log("Clicked!");
});
button.addEventListener('keydown',(e)=> {
    if(e.key==='Enter') submitForm();
});
function sum(a, b) {
    return a + b;
}
function greet(name) 
{ return `Hello ${name}` }
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log()
console.log(greet(name));
console.log("Sum:", add(5, 3));
console.log(evens);
console.log(sqr);
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('output').innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    clearBtn.addEventListener('click', () => {
        document.getElementById('output').innerHTML = '';
    });
    document.getElementById('output').appendChild(clearBtn);
});

document.getElementById('calcBtn').addEventListener('click', () => {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    if (!isNaN(a) && !isNaN(b)) {
        const result = sum(a, b);
        document.getElementById('sumOutput').innerHTML = `Sum: ${result}`;
    } else {
        document.getElementById('sumOutput').innerHTML = 'Please enter valid numbers';
    }
});
