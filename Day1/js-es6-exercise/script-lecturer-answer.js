// ================= run in powershell > find this pathfile > run script-lecturer-answer.js node.js
// answer for all, except `spread syntax` & `"this" exercise`

// randomString is simply 7 characters generated randomly:
const randomString = Math.random()
  .toString(36)
  .substring(6);
​
("gh46ngy");
// ------------ only modify the following object --------------
const user = {
  firstName: "Joey",
  lastName: "Tribbiani",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  hobbies: [
    () => {
      console.log("I like to eat");
    }
  ],
  actions: {
    laugh: function() {
      console.log("Muahahaha");
    },
    getJoke: function() {
      return "A lawyer walks into a bar exam";
    }
  },
  [randomString]: "Hello World"
};
// ------------------------------------------------------------------------------
​
// DO NOT MODIFY THE FOLLOWING CODE
// Edit the user object such that everything below works as intended
​
console.log(user.firstName); // print "Joey"
console.log(user["lastName"]); // print "Tribbiani"
console.log(user.fullName()); // print "Joey Tribbiani"
​
user.actions.laugh(); // print "Muahaha"
console.log(user.actions.getJoke()); // print "A lawyer walks into a bar exam"
​
user.hobbies.forEach(function(hobby) {
  hobby();
});
​
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
​
// array.forEach(function(num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });
// The loop above should print out these 3 lines:
// I like to eat
// I love to sleep
// I am not real
​
console.log(user[randomString]); // print "Hello World"


// const getState = state => {
//   // complete this
//   function logState() {
//     console.log(`Your state is ${state}`);
//   }
//   return [state, logState];
// };
​
// const [state, logState] = getState("stable");
// console.log(state); // The console should print out 'stable'
// logState(); // The console should print out 'Your state is stable'
​
const user = {
  id: 101,
  email: "josh@nextacademy.com",
  personalInfo: {
    name: "Josh",
    address: {
      line1: "AG-7, Glomac Damansara",
      state: "Kuala Lumpur",
      country: "Malaysia"
    }
  }
};
const {
  sex = "male",
  id,
  email,
  personalInfo: {
    name,
    address: { line1, state, country }
  }
} = user;
​
const josh = {
  gender: sex,
  email: email,
  address: `${line1}, ${state}, ${country}`
};
console.log(josh);
​
const randomString = "burger";
​
const newObj = {
  [randomString]: randomString
};
​
console.log(newObj.randomString);
Collapse




