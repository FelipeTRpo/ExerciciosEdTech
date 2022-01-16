const arr = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100
]

const maxValue = Math.max(...arr);
console.log(arr);
console.log(`O maior valor do array é ${maxValue}`);