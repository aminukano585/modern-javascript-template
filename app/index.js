import './styles.css'; // import CSS 

console.log(process.env.SECRET_KEY); // access environment variables from .env file

// classes
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}

const aminu = new Person('Aminu', 'Male');
console.log(aminu.gender);
console.log(aminu.sayHello());

// asynchronous request
async function getUser(userName) {
  await fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(e => console.log(e));
}

getUser('AminuSufi585');

// Test more es6+ features, if it fails find suitable polyfill and add it (https://babeljs.io/) 