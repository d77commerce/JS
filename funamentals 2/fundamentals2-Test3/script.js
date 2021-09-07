function fruitCutPieces(fruit){
     return fruit*4;
     
     }
function juceMaker(apples, oringes) {
    const appleJuce = fruitCutPieces(apples);
    const oringeJuce = fruitCutPieces(oringes);
    const juce = `Juce of apple - ${appleJuce} pieces and oringe - ${oringeJuce} pieces!`;
    return juce;
}   
console.log(juceMaker(7,6));
