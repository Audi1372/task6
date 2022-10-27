// //1- a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective 
// // class properties to these values

    class movie{
        setMovie(title,studio,rating){
            this.title=title,
            this.studio=studio,
            this.rating=rating
        }
        getMovie(){
            console.log(
            ` ${this.title}--${this.studio}--${this.rating}`)
            }
    }
    let movie1=new movie()
    movie1.setMovie("Bahubali","RRSTUDIO","PG")
    movie1.getMovie();
// OUTPUT:
// Bahubali--RRSTUDIO--PG





// b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

        class movies{
            constructor(title,studio,rating="PG"){
                this.title=title,
                this.studio=studio
                this.rating=rating
            }
        }
        let mv1=new movies("bahubali","rrstudio",)
        console.log(mv1)
// OUTPUT:{ title: 'bahubali', studio: 'rrstudio', rating: 'PG' }



// // C.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. 
// The returned array need not be full.
        let movies=[
            {title:"bahuabali",studio:"rr",rating:"G"},
            {title:"PUSHPA",studio:"PP",rating:"PG"},
            {title:"SARINODU",studio:"SS",rating:"PG"},
            {title:"SAAHO",studio:"YY",rating:"g"},
            
        ]
        
        getPG(movies)
        function getPG(movies){
            let array=[]
            for(i=0;i<movies.length;i++){
                    if(movies[i].rating=="PG"){
                    array.push(movies[i])
                }
            }
            console.log(array)
        }

// OUTPUT:[
//     { title: 'PUSHPA', studio: 'PP', rating: 'PG' },
//     { title: 'SARINODU', studio: 'SS', rating: 'PG' }
//   ]





//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

    class movies{
        constructor(title,studio,rating){
            this.title=title,
            this.studio=studio
            this.rating=rating
        }
    }
    let mv=new movies("CasinoRoyale","Eon Productions","PG­13")
    console.log(mv)
// // OUTPUT:
// // movies {
// //     title: 'CasinoRoyale',
// //     studio: 'Eon Productions',
// //     rating: 'PG­13'
// //   }



class circle{
   
    constructor(radius){
        this.radius=radius;
     
    }
    getRadius(){
        return this.radius
    }
    getArea(){
      return  3.14*this.radius*this.radius
      
    }
    getCircumfrence(){
        return 2*3.14*this.radius
    }
          
}

  
// }
// circle.setRadius=21
// let c1=new circle(5.6)
// console.log(`radius:${c1.getRadius()}---area:${c1.getArea()}-----circumfrence:${c1.getCircumfrence()}`)
// console.log(circle.radius)


// circle set method

       let circle1={
            radius:34,
             color:"orange",
             set setRadius(rad){
                return this.radius=rad;
            },
            set setColor(clr){
                return this.color=clr
            }
         }
         console.log(`before:${circle1.radius}`)
         circle1.setRadius=67
         console.log(`after:${circle1.radius}`)
         console.log(`before:${circle1.color}`)
         circle1.setColor="GREEN"
         console.log(`after:${circle1.color}`)
            // output:
            // before:34
            // after:67
            // before:orange
            // after:GREEN




// circle with two parameters
            class circle3{
                constructor(radius,color){
                    this.radius=radius;
                    this.color=color;
                }
            }
            let c1=new circle3(4,"orange")
            console.log(c1)
            // output:
            // circle3 { radius: 4, color: 'orange' }


// 3.Write a “person” class to hold all the details.

            class person{
                constructor(name,age,address,education,job,status,salary){
                    this.name=name;
                    this.age=age;
                    this.address=address;
                    this.education=education;
                    this.job=job;
                    this.status=status;
                    this.salary=salary
            }
            
            }
            let person1=new person("lakshmi",23,"Ap","btech","SDE","single","80000")
            console.log(person1)
            // output:person {
            //     name: 'lakshmi',
            //     age: 23,
            //     address: 'Ap',
            //     education: 'btech',
            //     job: 'SDE',
            //     status: 'single',
            //     salary: '80000'
            //   }
 


 //4 write a class to calculate the uber price.

            class uber{
                constructor(fixedcharge,distance,pricefordistance,toll){
                    this.fixedcharge=fixedcharge,
                    this.distance=distance,
                    this.pricefordistance=pricefordistance,
                    this.toll=toll
                }
                    getfair(){
                    let fair= (this.fixedcharge)+(this.distance*this.pricefordistance)+(this.toll)
                   return fair
                }
            }
            let uberprice=new uber(50,15,10,30)
            console.log(uberprice.getfair())
            // output:230