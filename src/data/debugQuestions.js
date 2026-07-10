export const hardQuestions = [
  {
    id: 1,
    question: "What will this code print?",
    code: `const arr = [1, 2, 3];

const result = arr.map(num => {
  if (num > 1) {
    return num * 2;
  }
});

console.log(result);`,
    options: [
      "[2, 4, 6]",
      "[undefined, 4, 6]",
      "[1, 4, 6]",
      "Throws an error",
    ],
    answer: 1,
    explanation:
      "map() always returns an array with the same length. Since nothing is returned for the first element, it becomes undefined.",
  },

  {
    id: 2,
    question: "What is the output?",
    code: `let x = 10;

function demo() {
  console.log(x);
  let x = 20;
}

demo();`,
    options: [
      "10",
      "20",
      "undefined",
      "ReferenceError",
    ],
    answer: 3,
    explanation:
      "Variables declared with let exist in the Temporal Dead Zone until initialized.",
  },

  {
    id: 3,
    question: "What gets printed?",
    code: `console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");`,
    options: [
      "A D C B",
      "A C D B",
      "A B C D",
      "D A C B",
    ],
    answer: 0,
    explanation:
      "Promises (microtasks) execute before setTimeout callbacks (macrotasks).",
  },

  {
    id: 4,
    question: "Why does this throw an error?",
    code: `const user = {
  name: "Harsh"
};

console.log(user.address.city);`,
    options: [
      "address is undefined",
      "city is undefined",
      "user is null",
      "Syntax error",
    ],
    answer: 0,
    explanation:
      "user.address is undefined, so trying to access .city throws an error.",
  },

  {
    id: 5,
    question: "What is the output?",
    code: `const a = [1, 2];

const b = a;

b.push(3);

console.log(a);`,
    options: [
      "[1,2]",
      "[1,2,3]",
      "undefined",
      "Throws an error",
    ],
    answer: 1,
    explanation:
      "Arrays are reference types. Both variables point to the same array.",
  },

  {
    id: 6,
    question: "What is wrong with this code?",
    code: `async function getData() {
  const response = fetch("/api");

  const data = response.json();

  console.log(data);
}

getData();`,
    options: [
      "fetch() returns undefined",
      "Missing await",
      "json() is invalid",
      "Nothing is wrong",
    ],
    answer: 1,
    explanation:
      "Both fetch() and response.json() return Promises and must be awaited.",
  },

  {
    id: 7,
    question: "What is printed?",
    code: `const nums = [1,2,3];

nums.forEach(num => {
  if(num === 2){
    return;
  }

  console.log(num);
});`,
    options: [
      "1 2 3",
      "1 3",
      "2 3",
      "Nothing",
    ],
    answer: 1,
    explanation:
      "return exits only the current callback iteration, not the loop.",
  },

  {
    id: 8,
    question: "What is the output?",
    code: `const person = {
  name: "Harsh",

  greet() {
    return () => {
      console.log(this.name);
    };
  }
};

const fn = person.greet();

fn();`,
    options: [
      "undefined",
      "Harsh",
      "window",
      "ReferenceError",
    ],
    answer: 1,
    explanation:
      "Arrow functions inherit 'this' from the surrounding scope, which is person.",
  },

  {
    id: 9,
    question: "What will this print?",
    code: `console.log(typeof null);`,
    options: [
      "null",
      "object",
      "undefined",
      "Throws an error",
    ],
    answer: 1,
    explanation:
      "This is a long-standing JavaScript quirk: typeof null returns 'object'.",
  },

  {
    id: 10,
    question: "What is the output?",
    code: `const obj = {
  value: 5,

  getValue() {
    return function () {
      return this.value;
    };
  },
};

console.log(obj.getValue()());`,
    options: [
      "5",
      "undefined",
      "null",
      "ReferenceError",
    ],
    answer: 1,
    explanation:
      "The returned regular function has its own 'this'. It is not bound to obj, so this.value is undefined.",
  },
];