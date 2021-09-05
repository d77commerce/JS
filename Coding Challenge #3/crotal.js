let dolphins = (96+12+101)/3;
let koalas  = (96+12+101)/3;
if(dolphins>koalas){
    if (dolphins>=100){
         console.log(`win Dolphins`);
    }
}else if (dolphins===koalas){
    if (koalas>=100){
        console.log(`winers Dolphins and Koalas`);
    }  
}else if(koalas>dolphins){
    if (koalas>=100){
         console.log(`win Koalas`);
    }
}
if (dolphins<100||koalas<100){
    console.log(`No one win!`)
}