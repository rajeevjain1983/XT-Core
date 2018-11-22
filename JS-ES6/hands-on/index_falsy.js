var isAvtive=true;

if(isAvtive)
 console.log('Active');
 else
 {
    console.log('Not Active');
 }

// 0 is false and 1 is true
 var value=0;
 if(value)
 {
     console.log("truthy");
 }

 else{
    console.log("falsy");
 }

//String values 
 var name="Rajeev";
 if(name)
 {
     console.log(`My Name is ${name}`);
 }

 else{
    console.log('Dot know');
 }

 // null is false

 var a =null;

 if (a)
 {
     console.log('have some value');
 }
 else
 {
     console.log('Null values');
 }

 // Blank Vlaues 

 var a='';
 if (a)
 {
     console.log('Not Blank Values');
 }
 else
 {
     console.log('Blank Values');
 }

 

 var a;
 if (a)
 {
     console.log('Not Undefined');
 }
 else
 {
     console.log('Undefined');
 }