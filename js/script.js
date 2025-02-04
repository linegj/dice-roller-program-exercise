"use strict";

// ## JavaScript Task:


// To complete this exercise watch the video from Bro Code here and implement the instrcutions inside the `js/script.js file`- [03:44:32 ⭐ Dice Roller program 🎲](https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=13472s)

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
      
    }
    
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");


}


// - After completing the *Random Dice Roller* try to answer following questions:
//     - What is a function?
//     - What is the difference between a function with and without parameters ?
//     - What does return do in a function?
//     - What is an array?
//     - What is the difference between an array an a variable like let or const ?
//     - What kind of operations can you do on an array ?
//     - What is template literals ?
//     - What is an addEventListener ?
//     - How is an addEventListener different from a onclick event inside a HTML button element ?