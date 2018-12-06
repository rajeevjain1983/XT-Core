define(["./add.js"],function(add){
    return function calcualte(a,b){
        console.log('Hi');
        return add(a,b);
    }
})