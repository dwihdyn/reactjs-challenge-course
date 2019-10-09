//===== String interpolation : ES6 uses (``), not ("") anymore
let name = `dwi`;
let count = `99`;
const oldMethodSentence = name + " drinks " + count + " coffee a day ";
const es6Sentence = `${name} drinks ${count} coffee a day`;

// document.write(oldMethodSentence);
// document.write(es6Sentence);

console.log(oldMethodSentence);
console.log(es6Sentence);

//======================================================================================================

//===== Object
const randomString = Math.random()
  .toString(36)
  .substring(6);
// toString(val), val min max is 2 & 36 respectively. because 26 alphabets + 10 numbers (0,1,2,..,9) | subString(val), val limit is 0 to infinite. it output how many letter for the given word. here is 6 letter words

const hobby = () => {
  console.log(hobbies);
};

let user = {
  firstName: `Joey`,
  lastName: `Tribbiani`,
  fullName() {
    return `${this.firstName} ${this.lastName} is my full name `; // avoid double console.log()
  },

  actions: {
    laugh() {
      console.log(`muhahhahah`);
    },
    getJoke() {
      return `A lawyer walks into a bar exam`; // avoid double console.log()
    }
  },

  // for hobbies, since we are calling `hobby()` function, what ever inside the array, it as to be function, not string
  hobbies: [
    () => {
      console.log(`i liek to eat`);
    },
    () => {
      console.log(`i love 2 sleep`);
    },
    () => {
      console.log(`i am i`);
    }
  ],
  // hobbies: ["i liek to eat", "i love 2 sleep", "i am i"], // method2
  [randomString]: `Hello world lmao`
};

// DO NOT MODIFY THE FOLLOWING CODE
// Edit the user object such that everything below works as intended

console.log(user.firstName); // print "Joey"
console.log(user["lastName"]); // print "Tribbiani"
console.log(user.fullName()); // print "Joey Tribbiani"

user.actions.laugh(); // print "Muahaha"
console.log(user.actions.getJoke()); // print "A lawyer walks into a bar exam"

user.hobbies.forEach(function(hobby) {
  hobby();
  // console.log(hobby); // method2
});
// The loop above should print out these 3 lines:
// I like to eat
// I love to sleep
// I am not real

console.log(user[randomString]); // print "Hello World"

//======================================================================================================

//===== Arrow function
//= Exercise1 - first
// // normal function
// function addAndMultiply(x, y, z) {
//   return (x + y) * z;
// }
// console.log(addAndMultiply(4, 8, 5)); // 60

// arrow function
const newAddAndMultiply = (a, b, c) => {
  return (a + b) * c;
};
console.log(newAddAndMultiply(4, 8, 5));

//= Exercise1 - second
// // normal function
// function selfIntro(name, hobby, count) {
//   return (
//     "My name is " +
//     name +
//     ". I practice " +
//     hobby +
//     " " +
//     count +
//     " times a day."
//   );
// }
// console.log(selfIntro("Shanqyeet", "Kendama", "18")); // My name is Shanqyeet. I practice Kendama 18 times a day.

// arrow function
const newSelfIntro = (name, hobby, count) => {
  return `My name is ${name}. I practice ${hobby} ${count} times a minute`;
};
console.log(newSelfIntro("dwi", "coding", "97"));

//= Exercise 2
// // arrow function
// // tips: remove curly braces
// let squared = x => {
//   return x * x;
// };

// simplifed arrow function
let simplifiedSquared = y => y * y;
console.log(simplifiedSquared(9));

//= Exercise 3 - Array.map() method
const prices = [1.0, 2.0, 3.0, 4.0];
const gst = 0.06;

const pricesWithTax = prices.map(inputMoney => inputMoney * (1 + gst)); // inputMoney is a name, name can be anything, because we set prices.map(), which means prices is our source point
console.log(pricesWithTax); // you should get [1.06, 2.12, 3.18, 4.24]

//= Exercise 3 - forEach method

prices.forEach(inputMoneyMoney => {
  inputMoneyMoney * (1 + gst);
});
console.log(pricesWithTax); // you should get [1.06, 2.12, 3.18, 4.24]

//======================================================================================================
//===== Destructuring
//= Exercise 1
// let nameOfTheFunction = (inputOfFunction1, inputOfFunction2) => {return actions-of-the-function}
const getState = state => {
  let logState = () => {
    // return `Your state is ${state}`; // cant do this, bc return can be `document` return or `console` return
    console.log(`Your state is ${state}`);
  };
  return [state, logState];
};

const [state, logState] = getState("stable");
console.log(state); // The console should print out 'stable'
logState(); // The console should print out 'Your state is stable'

//= Exercise 2
let user2 = {
  id: 101,
  email: "josh@nextacademy.com",
  personalInfo: {
    name2: "Josh",
    address: {
      line1: "AG-7, Glomac Damansara",
      state2: "Kuala Lumpur",
      country: "Malaysia"
    }
  }
};

// disassemble everything first
const {
  id,
  email,
  personalInfo: {
    name2,
    address: { line1, state2, country }
  }
} = user2;

let josh = {
  gender: "Male", // gender not defined, hence need to hard code
  email: email, // set this email as the email that we have save from destructing user2 above, email: email IS NOT THE SAME AS email = email | this works because whatever is in an object, it's newly born, hence is empty
  address: `${line1} ${state2} ${country}`
};

console.log(josh);
/* prints out:
  gender: 'male',
  email: 'josh@nextacademy.com',
  address: 'AG-7, Glomac Damansara, Kuala Lumpur, Malaysia'
}
*/

//======================================================================================================
//===== Spread Syntax
//= Exercise - use .map() & spread syntax {...}
const discount = {
  rate: 0.5,
  reason: "New Year Sales"
};

const products = [
  {
    name: "Laptop",
    price: 800
  },
  {
    name: "Keyboard",
    price: 160
  },
  {
    name: "Mouse",
    price: 70
  }
];

// let nameOfTheFunction = inputOfFunction => {return action-of-function}
const updatedProducts = products.map(eachProd => {
  return { ...eachProd, newPrice: eachProd.price * discount.rate, ...discount }; // `...product` is to select ONLY the value inside each products (name: "Mouse", price: 70), not the whole array | we combine everything by putting coma in betweem to separate `return{...firstContent, secondContent}`
});

console.log(updatedProducts);

// Printout of `updatedProducts`
// [
//     {
//       name: 'Laptop',
//       price: 800,
//       rate: 0.5,
//       reason: 'New Year Sales',
//       newPrice: 400
//     },
//     {
//       name: 'Keyboard',
//       price: 160,
//       rate: 0.5,
//       reason: 'New Year Sales',
//       newPrice: 80
//     },
//     {
//       name: 'Mouse',
//       price: 70,
//       rate: 0.5,
//       reason: 'New Year Sales',
//       newPrice: 35
//     }
//   ]

//======================================================================================================
//===== `this` exercise
// ????
class Car {
  constructor(owner) {
    this.brand = "Tesla";
    this.model = "Model X";
    this.owner = owner;
  }

  drive() {
    console.log(this);
    console.log(`${this.owner.name} is driving his ${this.brand}`);
  }

  doSomethingTwice(action) {
    for (let i = 0; i < 2; i++) {
      action();
    }
  }
}

const mycar = new Car({
  name: "Nicholas",
  age: 21,
  gender: "male"
});

mycar.doSomethingTwice(mycar.drive); // Cannot read property 'owner' of undefined
