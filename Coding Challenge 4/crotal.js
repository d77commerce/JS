let input = 275;
let tip = input>=50 &&input<=300 ?
 input*0.15:input*0.20;
 console.log(`The bill was${input}, the tip was ${tip}, and the total value ${input+tip}`);