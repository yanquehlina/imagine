

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
