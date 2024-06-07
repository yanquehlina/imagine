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

