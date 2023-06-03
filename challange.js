const HouseRent=function(amount){
     this.amount=amount;

}
HouseRent.prototype.increment=function(){
     this.amount +=1000;
     console.log(`next year my amount will be ${this.amount}`)


}
HouseRent.prototype.decrement=function(){

     this.amount -=1000;
     console.log(`next year my amount will be ${this.amount}`)
}
const income=new HouseRent(20000);
console.log(income)
console.log(income.increment())
// console.log(income.decrement())