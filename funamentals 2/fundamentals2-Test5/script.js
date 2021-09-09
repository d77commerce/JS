const objekt ={
    name :'petre',
    lastName : 'willson',
    age  : '31',
    frends : ['Ostin','Jhon','Maria']
};
console.log(objekt.lastName);
console.log(objekt['age']);
const inpUt = prompt('Chose ? . . . ');
if(objekt.inpUt){
    console.log(objekt[inpUt]);
} else {
    console.log('Wrong request!')
}
objekt.location = 'London';
console.log(`${objekt.name} has ${objekt.frends.length} frends, and his best frend is ${objekt.frends[objekt.frends.length-1]}`);
