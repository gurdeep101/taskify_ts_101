import React from 'react';

import './App.css';

// variable types in typescript
let name: string = 'Gurdeep';
let age: number = 43;
let isStudent: boolean;
let hobbies: string[]; // array of strings
let hobbies2: number[]; // array or nubmers
let role: [number, string]; // tuple - fixed number of variables and types

role = [54, 'egad!'];

// objects
let pearson: Object; // not recommended since property definition is difficult

// use type keyword to declare object of type Person and then assign using let
type Person = {
  name: string;
  age?: number; // makes age optional
}

// assign to variable
let person: Person = {
  name: 'Gurdeep',
  age: 43,
};

// array of person object





function App() {
  return (
    <div className="App">
      Hello World !!
    </div>
  );
}

export default App;
