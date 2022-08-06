export{}
function main():void
{
    var no=2;
    var ret:boolean = check(no);
    if(ret == true) 
    {
        console.log("Number is even ");
    }
    else
    {
        console.log("Number is odd ");
    }
}

function check(value:number):boolean
{
    //var ans=true;
    if((value % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();