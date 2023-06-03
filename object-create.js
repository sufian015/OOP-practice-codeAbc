const computer={
     name:"",
     model:"",

   aboutComputer(){

     console.log(`This computer name is ${this.name} and model is ${this.model}`)
          
     }

}

// object.create method

const dell=Object.create(computer);
// ekhane dell er ekta object create hobe and computer ei obj er prototype hisebe thakbe


// object.create awesome method

dell.name="DELL"
dell.model="dh89"

console.log(dell)
dell.aboutComputer()

const hp=Object.create(computer);

hp.name="HP",
hp.model="model"
console.log(hp)

