
function GetX()
{
    let list=[];
    return function SetX(num)
    {
        for(var i=0;i<list.length;i++){
            let item=list[i];
            if(item===num)
            {
                return `Item {${num}} is already added in Cache  [${list}]`;
            }
        }

        // list.map(function(item,index){
        //     if(item===num)
        //     {
                
                
        //             return `Item {${num}} is already added in Cache  [${list}]`;
        //     } 
        // })
        
        list.push(num);
        return `Added Number ${num}`;
    }
}

let getx=GetX();
let x=getx(1);
console.log(x);
x=getx(1);
console.log(x);

x=getx(2);
console.log(x);
x=getx(2);
console.log(x);



