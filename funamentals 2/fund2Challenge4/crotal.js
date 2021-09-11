function one (){
    const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    let tips = [];
    let totals =[];
    let sum =0;
    sumTips =0;

 for(let i = 0; i<bills.length;i++){
        let tip = bills[i]>=50 && bills[i]<=300 ? bills[i]*0.15:bills[i]*0.20;
    tips.push(tip);  
    totals.push(bills[i]+tip); 
    sum+=(bills[i]+tip);
    sumTips+=tip;
    }
   console.log(bills, tips, totals)
   console.log(sum/10);
   console.log(sumTips/10);
}
one();