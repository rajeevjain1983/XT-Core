
function init(){

    document.getElementById("hsearch").addEventListener('click',function(e){
       e.preventDefault();
       alert("page has not moved");
    });

    document.getElementById("parentDiv").addEventListener('click',function(e){
        console.log("parent div clicked");
    });
    document.getElementById("childDiv").addEventListener('click',function(e){
        
        console.log("child div clicked");
    });
    document.getElementById("button1").addEventListener('click',function(e){
        e.stopPropagation();
        console.log("button  clicked");
    });

}

window.onload=init();