var nameVar = 'Josue';
nameVar = 'David';
console.log('nameVar', nameVar);

let nameLet = 'Josue';
nameLet = 'David';
console.log('nameLet', nameLet);

const nameConst = 'Josue';
console.log('nameConst', nameConst);

const fullName = 'Josue Diaz';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName', firstName);
}

console.log('firstName', firstName);