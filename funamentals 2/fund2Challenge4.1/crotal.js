function one (){
    const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    let tips = [];
    let totals =[];
    
    const calcTips = function(input){
 return  input>=50 && input<=300 ? input*0.15:input*0.20;

    }

    
    for(let i = 0; i<bills.length;i++){
        let tip = calcTips(bills[i]);
    tips.push(tip);  
    totals.push(bills[i]+tip); 
    
    }
    const calcAverage = function(arr){
        let sum = 0;
        for(let i = 0; i<arr.length;i++){
            sum+=arr[i];
        }
        return sum/arr.length;
    }
   console.log(bills, tips, totals)
   console.log(calcAverage(totals));
   console.log(calcAverage(tips));
}


one();