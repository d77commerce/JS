const  calcAverag = (a,b,c) => (a+b+c)/3;
const dolphns = calcAverag(85,54,41);
const coalas = calcAverag(23,34,27);
 if(dolphns>=2*coalas){
    console.log(`Dolphins win \(${dolphns}vs${coalas}\)`);
 }else if(coalas>=2*dolphns){
     console.log(`Coalas win \(${coalas}vs${dolphns}\)`);
 }else{
     console.log('No one win!')
 }