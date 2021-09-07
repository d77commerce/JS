function garage (cars, bikes){
    const race = garage = `cars race - ${cars} and bikes race - ${bikes}`;
    return race ;
}
const race1 = garage(3, 5);
console.log(race1);

const race2 = function garage2 (cars2, bikes2){
 return `cars race - ${cars2} and bikes race - ${bikes2}`;
}
const result = race2(5, 9);
console.log(result);