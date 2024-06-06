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
    