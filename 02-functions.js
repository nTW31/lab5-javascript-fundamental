// ============================================
// Activity 2: Functions & Arrow Functions
// ============================================
console.log("=== Functions & Arrow Functions Practice ===\n");

// ─────────────────────────────────
// 1. Function Declaration
// ─────────────────────────────────
function greet(name) {
  return `Hello, ${name}!`;
}

console.log("Function Declaration:");
console.log(greet("John"));
console.log(greet("Alice"));

// ─────────────────────────────────
// 2. Function Expression -- สำคัญมาก
// ─────────────────────────────────
const add = function (a, b) {
  return a + b;
};

console.log("\nFunction Expression:");
console.log("add(5, 3):", add(5, 3));
console.log("add(10, 20):", add(10, 20));

// ─────────────────────────────────
// 3. Arrow Functions (Modern!) -- สำคัญมาก
// ─────────────────────────────────

// Full syntax
const multiply = (a, b) => {
  return a * b;
};

console.log("\nArrow Function (full syntax):");
console.log("multiply(4, 5):", multiply(4, 5));

// Shorthand (implicit return)
const square = (x) => x * x;

console.log("Arrow Function (shorthand):");
console.log("square(5):", square(5));

// Single parameter
const double = (x) => x * 2;
console.log("double(10):", double(10));

// No parameters
const getRandom = () => Math.floor(Math.random() * 100);
console.log("getRandom():", getRandom());

// ─────────────────────────────────
// 4. Default Parameters
// ─────────────────────────────────
function introduce(name = "Anonymous", age = 0, city = "Unknown") {
  return `${name} is ${age} years old from ${city}`;
}

console.log("\nDefault Parameters:");
console.log(introduce());
console.log(introduce("John"));
console.log(introduce("John", 25));
console.log(introduce("John", 25, "Bangkok"));

// ─────────────────────────────────
// 5. Rest Parameters (...args) -- สำคัญมาก
// ─────────────────────────────────
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log("\nRest Parameters:");
console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum(5, 10, 15, 20):", sum(5, 10, 15, 20));
console.log("sum():", sum());

// ─────────────────────────────────
// 6. Destructuring Parameters -- สำคัญมาก
// ─────────────────────────────────
function printUser({ name, age, city }) {
  console.log(`${name}, ${age} years old, from ${city}`);
}

console.log("\nDestructuring Parameters:");
const user = { name: "Alice", age: 22, city: "Chiang Mai" };
printUser(user);

// ─────────────────────────────────
// 7. Validation Function (Early Return)
// ─────────────────────────────────
function validateEmail(email = "") {
  if (!email.trim()) {
    return { valid: false, message: "Email is required" };
  }

  if (!email.includes("@") || !email.includes(".")) {
    return { valid: false, message: "Invalid email format" };
  }

  return { valid: true, message: "Email is valid" };
}

console.log("\nValidation Function:");
console.log(validateEmail(""));
console.log(validateEmail("invalidemail"));
console.log(validateEmail("invalid@email"));
console.log(validateEmail("valid@email.com"));

// ─────────────────────────────────
// 8. Returning Objects
// ─────────────────────────────────
function createUser(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    getAge() {
      return this.age;
    },
  };
}

console.log("\nReturning Objects:");
const newUser = createUser("John", "Doe", 30);
console.log(newUser);
console.log("Email:", newUser.email);
console.log("Full name:", newUser.getFullName());

// ─────────────────────────────────
// 9. Function as Parameter (Callback)
// ─────────────────────────────────
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (x) => x * 2);
const squared = processArray(numbers, (x) => x * x);

console.log("\nCallback Function:");
console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);

// ─────────────────────────────────
// 10. Challenge: Calculator
// ─────────────────────────────────
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
  power: (a, b) => a ** b,
  operate(operation, a, b) {
    if (typeof this[operation] !== "function") {
      return "Unknown operation";
    }
    return this[operation](a, b);
  },
};

console.log("\nChallenge: Calculator");
console.log("8 + 3 =", calculator.add(8, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 4 =", calculator.divide(20, 4));
console.log("2 ^ 10 =", calculator.power(2, 10));
console.log("Using operate('add', 5, 3) =", calculator.operate("add", 5, 3));

console.log("\n✅ Activity 2 completed!");
