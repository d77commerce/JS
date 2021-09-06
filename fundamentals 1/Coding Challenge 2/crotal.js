let markKg = 95;
let markH = 1.88;
let jonhKg = 85;
let jonhH = 1.76;
let jonBmi = jonhKg/jonhH**2;
let markBmi = markKg/markH**2;
let markHigherBmi = markBmi>jonBmi;
console.log(markBmi, jonBmi)
console.log(markHigherBmi);
if (markHigherBmi){
    console.log("Mark's BMI is higher than John's!")
}else{
    console.log("John's BMI is higher than Mark's!")
}