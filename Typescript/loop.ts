export{}

function main():void
{
    console.log("Code Start Here");
    forloop();
    whileloop();
}

function forloop():void
{
    var i:number=0;
    for(i=0;i<5;i++)
    {
        console.log("Om Namah Shivay");
    }
}

function whileloop():void
{
    var j=0;
    while(j<=5)
    {
        console.log("Har Har Mahadev");
        j++;
    }
}

main();