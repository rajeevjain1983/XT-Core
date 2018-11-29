console.log('********************** POJO objects *****');



class Person
{

}

class Employee extends Person{

}

let emp=new Employee();
console.log(emp instanceof Employee);
console.log(emp instanceof Person);
console.log(emp instanceof Object);



//........Task...............................

//Object.Freeze
//Object.seal
//Object.assign
//Object.preventExtension


//.............................................
//Wrapper objects
//String Apis
//Number Apis
//Boolean Apis
//Date
//Math
//Array Api


const video={
   
    genere:"sc fi",
    list:['a','b','c'],
    findMovies(){
        this.list.forEach((movie,index) => {
            console.log(this.genere, movie);
        })
    }
}

video.findMovies();