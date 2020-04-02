let Selena = {
    name: "Selena",
    zodiac: "Sagittarius",
    fictional: false,
    age: 23,
};

let Garnet = {
    name: "Garnet",
    zodiac: "Capricorn",
    fictional: true,
    age: 33,
};

function SuperHero (name, zodiac, fictional, age) {
    this.name = name;
    this.zodiac = zodiac;
    this.fictional = fictional;
    this.age = age;
};

let blackPanther = new SuperHero("Black Panther", "Aquarius", true, 35);
let adaWong = new SuperHero("Ada Wong", "Scorpio", true, 24);

Selena.tellZodiac = function() {
    console.log(`${this.name} was a ${this.zodiac}.`);
};

Selena.tellZodiac();

SuperHero.prototype.tellAge = function() {
    console.log(`${this.name} is ${this.age} years old.`);
}; 

blackPanther.tellAge();

let characterNames = ["Selena", "Garnet", "Black Panther", "Ada Wong"]
let text = "";
for (i = 0; i < characterNames.length; i++) {
    text += characterNames[i] + "\n";
};
console.log(text);