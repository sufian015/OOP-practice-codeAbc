class Computer{
          constructor(name,model){
               this.name=name;
               this.model=model;
     
          }

          // static sudhu jekhane static method use kora hoy sei blueprint theke access korte parbo
          static sayAboutClassStatic=function(){
               console.log('this is static method of class constructor')
          }

          //get = getter get method blue print and main pc thekeo access korte parbo get method sob jaigai kaj kore

          get computerName(){
              return this.name;
          }

          // set diye get er value set kora jae
          set computerName(value){
               return this.name=value;

          }
     

     };

    
     const dell=new Computer("dell","gh89");

     // jehetu set method e computer name e bracket use korle bolse this is not a function sejonno amra value assign kore dilam 
     dell.computerName="hp"
     console.log(dell)
     console.log(dell.computerName)
     // Computer.computerName
     
