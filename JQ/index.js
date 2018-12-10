$(()=>{
console.log('JQuery is ready!');

//DOM Acess
var header=$('#myheader');

console.log(header.html());//inner HTML
console.log(header.text());

$('#head1').html($('#span1').html());


// how to set css in JS?
//addClass
//addClassList
//add Style

// in JQ

//Add class
$('#span1').addClass("name");
//$(".mypara").addClass("bgcolor");
$(".mypara").click(()=>{

    alert("para click");

    $(this).addClass("bgcolor");
});


});