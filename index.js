const Rotor = require('./rotor');
const cripto8 = require('./cripto8');

let r1 = new Rotor(5,'p');
let r2 = new Rotor(4,'o');
let r3 = new Rotor(1,'s');

let ent = 'Nem adianta discutir. Todos sabem que o meu peido fede muito mais que seu!!';

let enc = cripto8.encode(ent,r1,r2,r3);
console.log(enc);

r1 = new Rotor(5,'p');
r2 = new Rotor(4,'o');
r3 = new Rotor(1,'s');

let dec = cripto8.decode(enc,r1,r2,r3);
console.log(dec);