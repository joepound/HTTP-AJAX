const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: "4201548425716392852",
    firstname: 'Ben',
    lastname: 'Nelson',
    age: 30,
    email: 'ben@lambdaschool.com',
  },
  {
    id: "3581548425717955619",
    firstname: 'Austen',
    lastname: 'Allred',
    age: 32,
    email: 'austen@lambdaschool.com',
  },
  {
    id: "4931548425719590135",
    firstname: 'Ryan',
    lastname: 'Hamblin',
    age: 35,
    email: 'ryan@lambdaschool.com',
  },
  {
    id: "386154842572035858",
    firstname: 'Sean',
    lastname: 'Chen',
    age: 35,
    email: 'sean@lambdaschool.com',
  },
  {
    id: "731548425720982558",
    firstname: 'Karen',
    lastname: 'Zachary',
    age: 67,
    email: 'michelle@gmail.com',
  },
  {
    id: "9281548425722424738",
    firstname: 'Luis',
    lastname: 'Hernandez',
    age: 47,
    email: 'luis@lambdaschool.com',
  },
  {
    id: "8141548425768124967",
    firstname: 'Beej',
    lastname: 'Hall',
    age: 47,
    email: 'beej@lambdaschool.com',
  },
  {
    id: "3091548425768704569",
    firstname: 'Dustin',
    lastname: 'Myers',
    age: 47,
    email: 'dustin@lambdaschool.com',
  },
  {
    id: "7431548425770142869",
    firstname: 'Josh',
    lastname: 'Knell',
    age: 47,
    email: 'josh@lambdaschool.com',
  },
  {
    id: "1011548425770554460",
    firstname: 'Daniel',
    lastname: 'Frehner',
    age: 47,
    email: 'dan@lambdaschool.com',
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
