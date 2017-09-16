const add = (a, b) => {
    //console.log(arguments); //Not accesible on arrow functions
    return a + b;
}

console.log(add(55,1));

const user = {
    name: 'Josue',
    cities: ['San Isidro', 'San Jose', 'Cartago'],
    printPlacesLived() {
        const cityMessages = this.cities.map(city => this.name + ' has lived in ' + city);
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4 ,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());