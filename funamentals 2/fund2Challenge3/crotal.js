const mark={
    fullName: 'Mark Miller',
    mass: 41,
    height:1.69,
    calcbMI : function(){
        this.bmi= this.mass/this.height**2;
        return this.bmi;
     }
};
const jhon={
    fullName: 'John Smith',
    mass: 92,
    height:1.95,
    calcbMI : function(){
       this.bmi = this.mass/this.height**2;
       return this.bmi;
    }
};
jhon.calcbMI();
mark.calcbMI();

if(mark.bmi<jhon.bmi){
 
    console.log(`Jhon's BMI \(${jhon.bmi}\) is higher than Mark's \(${mark.bmi}\)!`);
}else{
    
    console.log(`Mark's BMI \(${mark.bmi}\) is higher than Jhon's \(${jhon.bmi}\)!`);
}