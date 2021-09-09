const petre = {
    name: 'Petre',
    burthY: 1977,
    lastName: 'Brown',
    age : function(){
        return 2021 - this.burthY;      
    },
    drivingLicense : true,
    yearNCB: 4
}
console.log(petre.age());