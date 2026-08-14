// ═══════════════════════════════════════════════════════
//  DataAnnotation.tech Assessment Prep — daiquiz.js
//  35 Questions covering JS fundamentals, code evaluation,
//  debugging, and AI output assessment skills.
// ═══════════════════════════════════════════════════════
const QUIZ = [

  // ═══════════════════════════════════════════════════════
  //  JAVASCRIPT FUNDAMENTALS
  // ═══════════════════════════════════════════════════════
  {
    cat: "JS Fundamentals",
    q: "What is the difference between var, let, and const?",
    a: "var: function-scoped, hoisted, can be redeclared. let: block-scoped, not hoisted to usable state, cannot be redeclared in same scope. const: block-scoped, must be initialized at declaration, cannot be reassigned (though object properties can still be mutated). Best practice: use const by default, let when reassignment is needed, avoid var.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What is hoisting in JavaScript?",
    a: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution. var declarations are hoisted and initialized as undefined. Function declarations are fully hoisted. let and const are hoisted but remain in a 'temporal dead zone' — accessing them before declaration throws a ReferenceError.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What is the difference between null and undefined?",
    a: "undefined: a variable has been declared but not assigned a value — JavaScript sets this automatically. null: an intentional absence of value — explicitly assigned by the programmer. typeof undefined === 'undefined'. typeof null === 'object' (a known JS quirk). Use null when you want to intentionally clear a value.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What is a closure and give a practical example?",
    a: "A closure is a function that retains access to its outer scope even after the outer function has returned. Example: a counter function that returns an inner function — the inner function remembers and updates the count variable from the outer scope. Used in module patterns, event handlers, and factory functions to create private state.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What is the difference between == and ===?",
    a: "== (loose equality) performs type coercion before comparing — '5' == 5 is true. === (strict equality) compares value AND type with no coercion — '5' === 5 is false. Always prefer === in production code to avoid unexpected type coercion bugs.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What are arrow functions and how do they differ from regular functions?",
    a: "Arrow functions (=>) are a concise function syntax. Key differences: 1) No own 'this' — they inherit 'this' from the enclosing scope (lexical this). 2) Cannot be used as constructors. 3) No 'arguments' object. 4) Cannot be used as generator functions. Best for callbacks and methods that don't need their own 'this'.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What is the event loop in JavaScript?",
    a: "The event loop is JavaScript's mechanism for handling asynchronous operations in a single-threaded environment. It continuously checks the call stack and the callback queue — when the stack is empty it pushes the next callback from the queue onto the stack. This allows async operations (setTimeout, fetch, event listeners) without blocking execution.",
    img: null
  },
  {
    cat: "JS Fundamentals",
    q: "What is a Promise and what are its three states?",
    a: "A Promise represents the eventual result of an asynchronous operation. Three states: Pending (initial state — operation in progress), Fulfilled (operation completed successfully — .then() fires), Rejected (operation failed — .catch() fires). Promises chain with .then() and .catch(), and can be used with async/await for cleaner syntax.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  CODE EVALUATION — RATING AI OUTPUT
  // ═══════════════════════════════════════════════════════
  {
    cat: "Code Evaluation",
    q: "An AI generates this function: function add(a,b){return a+b} — What would you rate it and why?",
    a: "Functional but incomplete. Rating: adequate for a trivial case. Issues: no input validation (add('hello', 5) returns 'hello5'), no JSDoc comments, no handling of non-numeric inputs. Improved version should validate inputs with typeof checks, handle edge cases, and include a comment describing the function's purpose and parameters.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "AI generates: for(var i=0;i<arr.length;i++){setTimeout(()=>console.log(i),100)} — What is wrong?",
    a: "Classic closure/var bug. By the time the setTimeout callbacks fire, the loop has finished and i equals arr.length for all of them — every callback logs the same value. Fix: replace var with let (block-scoped, creates a new binding per iteration) or wrap in an IIFE. This is a very common JS interview question and a real production bug source.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "How would you rate AI-generated code that works correctly but uses var throughout and has no error handling?",
    a: "Rate as below standard / needs significant improvement. Working code is the baseline — not a merit. Code quality includes: use of modern syntax (let/const), error handling (try/catch), input validation, readability, and maintainability. In a DataAnnotation task, correct but poorly written code should score lower than correct, clean, idiomatic code.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI produces two solutions to the same problem — one uses a for loop, one uses .map(). How do you evaluate which is better?",
    a: "Both can be correct. Evaluate on: readability (.map() is more declarative and idiomatic for transforming arrays), intent clarity (.map() signals 'transform each element', a for loop is more general), performance (negligible difference at small scale), and context (if side effects are needed, a for loop may be more appropriate than .map()). Prefer the solution that most clearly communicates intent.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What makes a good code comment vs a bad one?",
    a: "Bad comment: restates what the code already says — // increment i by 1 above i++. Good comment: explains WHY, not WHAT — // offset by 1 because array is zero-indexed but display is 1-based. Comments should add context, explain non-obvious decisions, or document edge cases. Code should be readable enough that most lines need no comment at all.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI response answers the question but includes unnecessary code the user didn't ask for. How do you rate it?",
    a: "Deduct for over-generation. A good AI response is precise — it answers what was asked, nothing more. Unnecessary code adds noise, potential bugs, and confusion. In DataAnnotation assessments, verbosity without purpose is a quality defect. The response should be rated lower than a concise, targeted answer even if the extra code is technically correct.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  DEBUGGING
  // ═══════════════════════════════════════════════════════
  {
    cat: "Debugging",
    q: "What does 'Cannot read properties of undefined' mean and how do you fix it?",
    a: "It means you are trying to access a property on a variable that is undefined. Common causes: 1) Variable not initialized before use. 2) Function returning undefined instead of expected object. 3) Array index out of bounds. Fix: check the variable exists before accessing its properties using optional chaining (?.) or an if check. console.log the variable just before the error line to confirm its value.",
    img: null
  },
  {
    cat: "Debugging",
    q: "A function is being called twice when you only expect it once. What do you check first?",
    a: "Check for duplicate event listeners — the most common cause. If addEventListener is called inside a function that runs multiple times, listeners stack up. Also check: onclick attribute in HTML AND addEventListener in JS on the same element (double trigger), recursive calls, or the function being called in two separate places in the code. Add console.log('called') as the first line to confirm call count.",
    img: null
  },
  {
    cat: "Debugging",
    q: "What is the best first step when debugging a JavaScript error in the browser?",
    a: "Open DevTools (F12) and check the Console tab for red error messages. The error message tells you what went wrong, the file name and line number tells you exactly where. Never guess before reading the error. Second step: set a breakpoint at the flagged line in the Sources tab and inspect variable values at that point in execution.",
    img: null
  },
  {
    cat: "Debugging",
    q: "What does NaN mean and how do you check for it?",
    a: "NaN stands for Not a Number — the result of an invalid numeric operation (e.g. parseInt('hello'), 0/0, undefined + 1). Crucially: NaN !== NaN is true — NaN is not equal to itself. To check for NaN use Number.isNaN(value) — never use == NaN or === NaN as both always return false.",
    img: null
  },
  {
    cat: "Debugging",
    q: "A variable shows the correct value in console.log but the wrong value in the DOM. What is likely wrong?",
    a: "The DOM is likely being updated before the variable is set, or the variable is being read at a different point in the event cycle than expected. Common causes: async timing issues (the DOM update fires before a fetch/setTimeout completes), scope issues (updating a local copy instead of the variable the DOM reads from), or caching (the DOM element was captured before the variable changed). Check the sequence of execution carefully.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  ARRAYS & OBJECTS
  // ═══════════════════════════════════════════════════════
  {
    cat: "Arrays & Objects",
    q: "What is the difference between .map(), .filter(), and .reduce()?",
    a: ".map(): transforms each element, returns new array of same length. .filter(): tests each element against a condition, returns new array of elements that pass. .reduce(): accumulates all elements into a single value (sum, object, string etc.). All three are non-destructive — they return a new array/value without modifying the original.",
    img: null
  },
  {
    cat: "Arrays & Objects",
    q: "What is the spread operator and give two use cases?",
    a: "The spread operator (...) expands an iterable into individual elements. Use case 1: copy an array without mutation — const copy = [...original]. Use case 2: merge arrays — const merged = [...arr1, ...arr2]. Also works with objects: const newObj = {...obj1, ...obj2}. Essential for immutable patterns in modern JS.",
    img: null
  },
  {
    cat: "Arrays & Objects",
    q: "What is destructuring and give an example with an object and an array?",
    a: "Destructuring extracts values from arrays or properties from objects into variables. Object: const {name, age} = person — extracts name and age properties. Array: const [first, second] = arr — extracts first two elements. Can rename: const {name: personName} = person. Can set defaults: const {age = 25} = person. Cleaner than multiple assignment lines.",
    img: null
  },
  {
    cat: "Arrays & Objects",
    q: "What is the difference between a shallow copy and a deep copy of an object?",
    a: "Shallow copy: copies the top-level properties only — nested objects still reference the original. Methods: Object.assign({}, obj) or spread {...obj}. Deep copy: copies all levels recursively — fully independent. Methods: JSON.parse(JSON.stringify(obj)) (simple but loses functions/undefined), or structuredClone(obj) (modern, handles more types). Use deep copy when nested data must not be shared.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  AI OUTPUT ASSESSMENT
  // ═══════════════════════════════════════════════════════
  {
    cat: "AI Output Assessment",
    q: "What is the key principle when evaluating whether an AI response correctly answered a coding question?",
    a: "Test it — don't just read it. AI code can look correct but fail on edge cases, have off-by-one errors, or make subtle logical mistakes. Run the code mentally or actually execute it. Check: does it handle empty inputs? Negative numbers? Null values? The response should be rated on whether it works correctly across realistic inputs, not just the happy path example.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "An AI gives a correct answer but uses a deprecated method. How do you rate it?",
    a: "Rate as partially correct / needs improvement. Deprecated methods still work but signal outdated knowledge and may break in future environments. A high quality response uses current best practices. Note the deprecation in your feedback and suggest the modern equivalent. Example: using substr() instead of substring() or slice(), or XMLHttpRequest instead of fetch().",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "What is 'instruction following' and why is it critical in DataAnnotation assessments?",
    a: "Instruction following means the response does exactly what was asked — no more, no less. Critical because: DataAnnotation tasks have explicit guidelines that must be followed precisely. An answer that is technically correct but ignores a formatting requirement, length constraint, or scope restriction fails the task. Always re-read the instructions before rating — the AI may have answered a slightly different question than was asked.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "How do you assess the factual accuracy of an AI explanation of a technical concept?",
    a: "Cross-check against authoritative sources: MDN Web Docs for JavaScript, official documentation for frameworks. Look for: incorrect claims, misleading simplifications, outdated information, or missing important caveats. A technically plausible-sounding explanation that contains one wrong statement should be rated lower than a simpler but fully accurate one. Confidence in tone does not equal correctness.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "An AI produces a solution that works but is O(n²) when an O(n) solution exists. How do you rate it?",
    a: "Rate as functional but suboptimal. For small inputs it may be acceptable. For production or large datasets it is a meaningful defect. In your evaluation note: the solution is correct, the algorithm is inefficient, and describe the more efficient approach. The rating depends on whether the task guidelines require optimal solutions or just working ones — always check the rubric.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "What is a hallucination in the context of AI code generation?",
    a: "A hallucination is when an AI confidently generates code that references functions, methods, libraries, or APIs that do not exist. Example: calling a made-up array method like arr.flattenDeep() when the correct method is arr.flat(). Hallucinations are particularly dangerous because the code looks plausible and may only fail at runtime. Always verify method names and APIs against documentation.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  CORE JAVASCRIPT
  // ═══════════════════════════════════════════════════════
  {
    cat: "Core JavaScript",
    q: "What are the primitive data types in JavaScript?",
    a: "There are 7 primitive types: String, Number, BigInt, Boolean, undefined, null, and Symbol. Primitives are immutable and compared by value. Everything else in JavaScript is an Object (arrays, functions, dates etc.) and compared by reference.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is type coercion and give an example of an unexpected result?",
    a: "Type coercion is JavaScript automatically converting one type to another during operations. Example: 1 + '2' = '12' (number coerced to string) but 1 - '2' = -1 (string coerced to number). Another classic: [] + [] = '' and [] + {} = '[object Object]'. These surprises are why strict equality (===) and explicit type conversion are best practice.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between a function declaration and a function expression?",
    a: "Function declaration: function foo() {} — hoisted completely, can be called before it appears in code. Function expression: const foo = function() {} — not hoisted, only available after the line it's defined on. Arrow functions are always expressions. Named function expressions are useful for recursion and stack traces.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What does 'this' refer to in JavaScript?",
    a: "'this' refers to the execution context — who called the function. In a method: the object the method belongs to. In a regular function: the global object (window in browser) or undefined in strict mode. In an arrow function: the enclosing lexical scope's 'this'. In an event handler: the element that fired the event. 'this' is one of JS's most common sources of confusion.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the prototype chain in JavaScript?",
    a: "Every JavaScript object has a hidden [[Prototype]] property linking it to another object. When you access a property, JS first checks the object itself, then walks up the prototype chain until it finds the property or reaches null. This is how inheritance works in JS — methods defined on Array.prototype are available to all arrays through the chain.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between call(), apply(), and bind()?",
    a: "All three set 'this' explicitly. call(thisArg, arg1, arg2): invokes the function immediately with individual arguments. apply(thisArg, [args]): invokes immediately with arguments as an array. bind(thisArg, arg1): returns a NEW function with 'this' permanently bound — does not invoke immediately. bind is commonly used in event handlers to preserve context.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is async/await and how does it relate to Promises?",
    a: "async/await is syntactic sugar over Promises — it makes async code read like synchronous code. An async function always returns a Promise. await pauses execution inside the async function until the Promise resolves. Use try/catch for error handling instead of .catch(). Under the hood it's still Promises — async/await just makes the code cleaner and easier to read and debug.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between synchronous and asynchronous code?",
    a: "Synchronous code executes line by line — each line waits for the previous to finish. Asynchronous code starts an operation and moves on, handling the result later via callbacks, Promises, or async/await. JavaScript is single-threaded but handles async through the event loop — long operations (network requests, timers) are offloaded so the UI doesn't freeze.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is a higher order function?",
    a: "A higher order function either takes a function as an argument or returns a function (or both). Examples: .map(), .filter(), .reduce() all accept callback functions — they are higher order functions. A factory function that returns a customized function is also higher order. Core to functional programming patterns in JavaScript.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between .forEach() and .map()?",
    a: ".forEach() iterates over an array and executes a callback for each element — returns undefined, used for side effects (logging, DOM updates). .map() iterates and returns a NEW array of transformed values — never use .map() if you don't use the return value. forEach cannot be chained; map can be chained with .filter(), .reduce() etc.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is a template literal and what advantages does it offer?",
    a: "Template literals use backticks (`) instead of quotes and support: 1) String interpolation — `Hello ${name}` instead of 'Hello ' + name. 2) Multi-line strings without \\n. 3) Tagged templates for advanced string processing. Cleaner, more readable, and less error-prone than string concatenation especially with multiple variables.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is optional chaining (?.) and when should you use it?",
    a: "Optional chaining safely accesses nested object properties without throwing if an intermediate value is null or undefined. Example: user?.address?.city returns undefined instead of throwing if user or address is null. Use when accessing deeply nested data from APIs or external sources where any level might be missing. Cleaner than lengthy if/else null checks.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the nullish coalescing operator (??) and how does it differ from ||?",
    a: "?? returns the right side only if the left side is null or undefined. || returns the right side for ANY falsy value (0, '', false, null, undefined). Example: 0 ?? 'default' returns 0 (0 is valid). 0 || 'default' returns 'default' (0 is falsy). Use ?? when 0 or empty string are valid values you want to preserve.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between .slice() and .splice()?",
    a: ".slice(start, end): non-destructive — returns a new array from start to end without modifying the original. .splice(start, deleteCount, ...items): destructive — modifies the original array by removing/replacing elements and returns the removed elements. Mnemonic: splice has a 'p' for 'permanent change'.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What are JavaScript modules and what are the two main systems?",
    a: "Modules split code into reusable files with explicit imports and exports — avoiding global scope pollution. Two systems: CommonJS (Node.js): module.exports = {} and require('./file'). ES Modules (ESM, modern standard): export / import syntax, supported natively in browsers with type='module'. ESM is the current standard; CommonJS still dominates in older Node.js code.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is a generator function and what is its primary use case?",
    a: "A generator function (function*) can pause execution and resume later using the yield keyword. It returns an iterator. Primary use case: lazy evaluation of sequences — generating values one at a time instead of all at once (useful for infinite sequences, async flows). Each call to .next() resumes until the next yield. Less common than Promises but powerful for certain patterns.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is memoization and how would you implement it in JavaScript?",
    a: "Memoization caches the results of expensive function calls so repeated calls with the same arguments return the cached result instantly. Simple implementation: wrap a function, store results in an object keyed by arguments. Example: const memo = {}; if(memo[n]) return memo[n]; else memo[n] = expensiveCalc(n). Used to optimize recursive functions like Fibonacci.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between Object.freeze() and const?",
    a: "const prevents reassignment of the variable binding — you can't point the variable at a new object, but you CAN mutate the object's properties. Object.freeze() prevents mutation of the object's properties — but the variable can still be reassigned. To make a truly immutable object you need both: const obj = Object.freeze({...}). Note: freeze is shallow — nested objects are not frozen.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between setTimeout and setInterval?",
    a: "setTimeout(fn, ms): executes the callback ONCE after the specified delay. setInterval(fn, ms): executes the callback REPEATEDLY every ms milliseconds until cleared. Both return an ID — use clearTimeout(id) / clearInterval(id) to cancel. Important: the delay is a minimum, not a guarantee — the event loop may delay execution if the call stack is busy.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is JSON and what are its two main methods in JavaScript?",
    a: "JSON (JavaScript Object Notation) is a lightweight data interchange format — text-based, language-independent, human readable. Two main methods: JSON.stringify(obj): converts a JavaScript object to a JSON string for storage or transmission. JSON.parse(str): converts a JSON string back to a JavaScript object. Limitations: cannot serialize functions, undefined, or circular references.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  DOM & EVENTS
  // ═══════════════════════════════════════════════════════
  {
    cat: "DOM & Events",
    q: "What is event bubbling and how do you stop it?",
    a: "Event bubbling means an event fired on a child element propagates up through its parent elements — a click on a button also triggers click handlers on its containing div, body, etc. Stop it with event.stopPropagation() inside the handler. Related: event.preventDefault() stops the default browser action (form submit, link navigation) but does NOT stop bubbling — they are separate concerns.",
    img: null
  },
  {
    cat: "DOM & Events",
    q: "What is event delegation and why is it useful?",
    a: "Event delegation attaches a single event listener to a parent element instead of individual listeners on each child. Uses bubbling — events from children bubble up to the parent listener. Useful when: child elements are dynamically created (new elements automatically work), or there are many children (one listener is more efficient than hundreds). Check event.target inside the handler to identify which child triggered it.",
    img: null
  },
  {
    cat: "DOM & Events",
    q: "What is the difference between innerHTML and textContent?",
    a: "innerHTML parses and renders HTML tags — setting it to '<b>Hello</b>' renders bold text. textContent treats everything as plain text — '<b>Hello</b>' displays literally as text including the tags. Security note: never set innerHTML from user input — it can execute malicious scripts (XSS attack). Use textContent for user data, innerHTML only for trusted HTML.",
    img: null
  },
  {
    cat: "DOM & Events",
    q: "What does defer do on a script tag and why is it useful?",
    a: "defer tells the browser to download the script in the background while parsing HTML, but not execute it until the DOM is fully parsed. Prevents 'element not found' errors that occur when script runs before HTML elements exist. Equivalent to placing the script just before </body> but keeps it organized in <head>. Scripts with defer execute in order, unlike async.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  BEST PRACTICES
  // ═══════════════════════════════════════════════════════
  {
    cat: "Best Practices",
    q: "What is DRY and why does it matter in code quality assessment?",
    a: "DRY stands for Don't Repeat Yourself. Repeated code is a quality defect — it means bugs must be fixed in multiple places, and changes require multiple updates. In code evaluation, look for: identical logic copied and pasted, magic numbers used repeatedly instead of named constants, and similar functions that could be one parameterized function. DRY code is more maintainable and less error-prone.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What is the single responsibility principle and how does it apply to JavaScript functions?",
    a: "A function should do one thing and do it well. A function named getUserAndSendEmail() is doing two things — it should be two functions. Signs a function violates SRP: it's hard to name without using 'and', it's longer than ~20 lines, it's hard to unit test in isolation. In code evaluation, functions with multiple responsibilities should be flagged for refactoring.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "Why is error handling important and what is the basic pattern in JavaScript?",
    a: "Unhandled errors crash applications and expose internal details to users. Basic pattern: try { // code that might fail } catch(error) { // handle gracefully } finally { // always runs — cleanup }. For async code: try/catch around await, or .catch() on Promise chains. Good error handling logs the error for debugging, shows a user-friendly message, and keeps the application running.",
    img: null
  },

];

// ═══════════════════════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════════════════════
let filtered  = [...QUIZ];
let idx       = 0;
let correct   = 0;
let partial   = 0;
let wrong     = 0;
let revealed  = false;
let activeCat = "All";

// ═══════════════════════════════════════════════════════
//  CATEGORY BAR
// ═══════════════════════════════════════════════════════
function buildCategories() {
  const cats = ["All", ...new Set(QUIZ.map(q => q.cat))];
  const bar = document.getElementById('catBar');
  bar.innerHTML = cats.map(c =>
    `<button class="cat-btn ${c === activeCat ? 'active' : ''}" onclick="setCategory('${c}')">${c}</button>`
  ).join('');
}

function setCategory(c) {
  activeCat = c;
  filtered  = c === "All" ? [...QUIZ] : QUIZ.filter(q => q.cat === c);
  idx = 0; correct = 0; partial = 0; wrong = 0;
  updateScore();
  buildCategories();
  showQuestion();
}

// ═══════════════════════════════════════════════════════
//  DISPLAY QUESTION
// ═══════════════════════════════════════════════════════
function showQuestion() {
  if (!filtered.length) return;
  const q = filtered[idx];
  document.getElementById('qNum').textContent    = idx + 1;
  document.getElementById('qTotal').textContent  = filtered.length;
  document.getElementById('qCat').textContent    = q.cat;
  document.getElementById('qText').textContent   = q.q;
  const aBox = document.getElementById('aBox');
  aBox.classList.remove('show');
  aBox.innerHTML = '';
  revealed = false;
  document.getElementById('btnReveal').classList.remove('hide');
  document.getElementById('btnCorrect').classList.add('hide');
  document.getElementById('btnPartial').classList.add('hide');
  document.getElementById('btnWrong').classList.add('hide');
  document.getElementById('btnNext').classList.add('hide');
}

// ═══════════════════════════════════════════════════════
//  REVEAL ANSWER
// ═══════════════════════════════════════════════════════
function reveal() {
  if (revealed) return;
  revealed = true;
  const q = filtered[idx];
  const aBox = document.getElementById('aBox');
  aBox.innerHTML = q.a;
  if (q.img) aBox.innerHTML += `<br><img src="${q.img}" alt="diagram">`;
  aBox.classList.add('show');
  document.getElementById('btnReveal').classList.add('hide');
  document.getElementById('btnCorrect').classList.remove('hide');
  document.getElementById('btnPartial').classList.remove('hide');
  document.getElementById('btnWrong').classList.remove('hide');
}

// ═══════════════════════════════════════════════════════
//  MARK ANSWER
// ═══════════════════════════════════════════════════════
function mark(pts) {
  if (pts === 2) correct++;
  else if (pts === 1) partial++;
  else wrong++;
  updateScore();
  document.getElementById('btnCorrect').classList.add('hide');
  document.getElementById('btnPartial').classList.add('hide');
  document.getElementById('btnWrong').classList.add('hide');
  if (idx < filtered.length - 1) {
    document.getElementById('btnNext').classList.remove('hide');
  } else {
    document.getElementById('qText').textContent =
      `Quiz complete! Score: ${(correct * 2) + partial} out of ${filtered.length * 2} possible. Got it: ${correct}  Partial: ${partial}  Missed: ${wrong}.`;
  }
}

function next() { idx++; if (idx < filtered.length) showQuestion(); }

function shuffle() {
  filtered.sort(() => Math.random() - 0.5);
  idx = 0; correct = 0; partial = 0; wrong = 0;
  updateScore(); showQuestion();
}

function updateScore() {
  document.getElementById('scCorrect').textContent = correct;
  document.getElementById('scPartial').textContent = partial;
  document.getElementById('scWrong').textContent   = wrong;
  document.getElementById('scTotal').textContent   = (correct * 2) + partial;
}

buildCategories();
showQuestion();
