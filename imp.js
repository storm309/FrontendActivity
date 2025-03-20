let fruits = ["Apple","Mango","PineApple","Grapes"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//

let colors = ["Red","Black","Green","Blue","Yellow"];
for(let color of colors)
    {
        console.log(color):
    }

    //

    let colors = ["Red","Black","Green","Blue","Yellow"];
    for(let color of colors)
        {
            console.log(color);
        }


    //

    let text = "";
    let i = 1;
    while(i <= 5)
    {
        text += "The number is " + i + "\n";
        i++;
    }
    console.log(text);

//
let text = "";
let j = 1;
do{
    text += "The number is " + j + "\n";
    j++;
}while(j <=5 );
console.log(text);

//

alert("Welcome to LPU");

if(confirm("Are you sure you want to delete this record!!!"))
{
    console.log("Record is successfully deleted.");
}
else
{
    console.log("Deletion operation is cancelled.");
}

let name = prompt("Enter Your name", "Dear");
console.log("Hello " + name + ", How are you today?");