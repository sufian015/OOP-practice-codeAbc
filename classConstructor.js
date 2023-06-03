// class declaration

// class myName {


// }



// class expression

// const myName=class{

// }

// class Computer{

//      constructor(name,model){

//           this.name=name;
//           this.model=model;
          
//      }

//      aboutComputer(){
//           console.log( `My computer name is ${this.name} and model is ${this.model}`)
//      }
// }
// const hp=new Computer("hp","gh45")
// console.log(hp);
// hp.aboutComputer();

// challange

class HouseRent{
     constructor(amount){
          this.amount=amount;
     }

     increment(){
          this.amount=this.amount+1000;
          console.log(`This time rent will be increase${this.amount}`)

     }
     decrement(){
          this.amount=this.amount-1000;
          console.log(`This time rent will be decrease${this.amount}`)

     }
}

const income=new HouseRent(30000);
console.log(income);
income.increment()
income.decrement()