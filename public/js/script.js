const myButton = document.getElementById('btn');
myButton.onclick = function() {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// Variebles
const pi = 3.142;
let name = 'Maame Yankeh';
let age = 967;
let present = false;
console.log(name);

// Object
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'purple',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Maame',
        driver: {
            name: 'Fiifi',
        }
        
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

console.log(car.numberPlate);
car.owner.driver.name = 'Mike';
console.log(car.owner.driver.name);


// Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweet: 1,
  }
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweet: 0,
  }
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if (today.getHours() >= 16) {
    console.log('class has ended!')
  } else {
    console.log('class is in session')
  }
  
  // For Loop
  for (let i = 0; i <=9; i+=1) {
    console.log('Notify friends!', i);
  }
    
  // Functions
// Defining functions
function login(username, password) {
  if (username == 'kehlina' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'kehlina') {
    return 'Invalid username!';
  } else if (passsword != '1234') {
    return 'Invalid password!';
  } else {
    return ('Invalid username or password!');
  }
}
 
// Invoking functions
login('kelina', '124');

// Basic Arithmetic
12+34;
45-8;
7*12;
78/3;
78%4;

// Comparison operators (used in the 'for loop')
2 === '2';
2 == '2';
3 !== 22;
4 !== '4';

// Built-in Math function
Math.round(37 / 24); 
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89);

// Order of operations
1 * 2 + 3 - 4 / 2 +2 ** 2;

// Handling user input
// correct
1200 + Number('250');

// wrong
1200 + '250';
1200 + Number('delete');


// Sring concatenation
const firstname = 'Maame Yankeh';
const lastname = 'Cornelius';
firstname + ' ' + lastname;

// Template Litral   get used to this snytax
`${firstname.trim()} ${lastname.trim()}`;

// Sting method
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
firstname.toUpperCase();
lastname.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

// Sring Conversion
String(2024);

// write a function that will add a participant to our Google Classroom

// right key word, semantic name
const participants = [];
function addParticipant(email){
  // check if email was provided
  if (email === null || email === undefined) {
    return 'Email not provided!'
  }
  // OR
  if (!email) {
    return 'Email not provided!'
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!';
  }
  // add email to the participants;
  participants.push(email);
  // notify them via mail
  // return response
  return 'Participant added!';
}

addParticipant('c.maameyankeh@gmail.com');

// Arrays in JavaScripts
const alphabets = ['A', 'B', 'C',  , 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');

// write a function that will take firstname, lastname and return fullname

function fullName(firstname, lastname) {
  return `${firstname} ${lastname}`;
}

fullName('Maame Yankeh', 'Cornelius')

// OR




// OR (THE IDAEL) defining OBJECT

  const user = {
    // key:'value'
    firstname: 'Maame Yankeh',
    lastname: 'Cornelius',
  }
  function fullName(user) {
    return {
      ...user,
      fullname: `${user.firstname} ${user.lastname}`
    }
  }

fullName(user);

// Array Map
// used for transformation

const users = [
  {firstname: 'Linda', lastname: 'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Stephen', lastname: 'Grider'},
  {firstname: 'Elon', lastname: 'Musk'},
]

users.map(fullName);


// Map and return squares of numbers
function square(number) {
  return number ** 2;
}
const numbers = [0,1,2,3,4,5];
numbers.map(square)


// Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}

numbers.filter(even);


// OBJECT IN JAVASCRIPT

// write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else false

// DataBase
// const user = {
//   name: 'Martin King',
//   // dateOfBirth: '1887-06-12'
//   dateOfBirth: '1997-06-12'
// };

function isBirthdayToday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  // debugging
  console.log(birthDate.getMonth(), today.getMonth());
  console.log(birthDate.getDate(), today.getDate());
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
     return true;
  } else {
  return false;
  }
} 
isBirthdayToday(user);

// write a function that takes a user with name and dateOfBirth and returns happy birthday if their birthday is today else returns not your day

function birthdayMessage (user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
   if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
     return 'Happy Birthday, Martin King';
} else {
  return 'Not your day';
  }
} 
 birthdayMessage(user);

// OR
function birthdayGreeting (user) {
  if (isBirthdayToday(user)) {
    return `Happy Birthday, Martin`
  } else {
    return `Not Yet!`
  }
}

birthdayGreeting(user)



