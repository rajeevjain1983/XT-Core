/*

form is also objects which is browser object.

<form>
</form>

form properties:
name=> name of the form 
action => server url

<form acton="http://www.example.com/login.aspx" >


</form>

method="get"/"post"

Note: Event object has some default evnt ap

form : onsubmit


Form Child Elements
=> Grouping form Elements

1.label













*/



document.querySelector('#txtName').addEventListener('input',function(e){
    console.log(e.target.value);
});
document.querySelector('#txtEmail').addEventListener('input',function(e){
    console.log(e.target.value);
});

document.querySelector('#txtPhone').addEventListener('input',function(e){
    console.log(e.target.value);
});
document.querySelector('#txtMsg').addEventListener('input',function(e){
    console.log(e.target.value);
});

document.querySelector("#male").addEventListener('input',function(e){
    console.log(e.target.value);
});
document.querySelector("#female").addEventListener('input',function(e){
    console.log(e.target.value);
});

document.querySelector("#option1").addEventListener('input',function(e){
    console.log(e.target.value);
});
document.querySelector("#option2").addEventListener('input',function(e){
    console.log(e.target.value);
});
document.querySelector("#option3").addEventListener('input',function(e){
    console.log(e.target.value);
});

document.querySelector("#sel1").addEventListener('input',function(e){
    console.log(e.target.value);
});


