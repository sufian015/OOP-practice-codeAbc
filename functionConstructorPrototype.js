
// function constructor

const Computer=function(name,roll){
    this.name=name;
    this.roll=roll;
    // this.aboutComputer=function(){
    //  console.log( `My computer name is ${this.name} and my roll is ${this.roll}`)
    // }
}

Computer.prototype.aboutComputer=function(){
    console.log( `My computer name is ${this.name} and my roll is ${this.roll}`)
   }
const dell=new Computer("dell",2);
console.log(dell)
// dell.aboutComputer()

// const obj1={
//   name:"faisal vaia"
// }
// console.log(obj1)
// console.log(Object())
// chaining

console.log(Computer.prototype)
// console.log(dell.__proto__.__proto__)
// console.log(Object.getPrototypeOf(dell))
// console.log(dell.hasOwnProperty('name'))






// const obj={};
// obj.name="sufian"
// obj.class=12
// console.log(obj)


// prototype

// const arr=[2,3,4,5,6,7,8,9];

// const evenNumbers=arr.filter(result=>result%2===0)
// console.log(evenNumbers)
// console.log(Array.prototype)
// console.log(new Array())

// modified javascript array filter

// Array.prototype.filter=function(){
//   let arr2=[]

//   for(let i=0;i<this.length;i++){
//     if(this[i]%2===0){
//         arr2.push(this[i]);

//     }
    
//   }
//   return arr2;
    
// }
// console.log([2,45,34,56,45].filter())