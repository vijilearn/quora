let max = prompt("Enter the Max value")
let random_number = (Math.floor(Math.random()*max))+1;
let guess = parseInt(prompt("Enter the number u guess"));

while(true){
    if((guess=="quit")||(guess=="QUIT"))
    {
        console.log("You Quit");
        break;
    }
    
    if(guess == random_number)
    {
         console.log("Your guess is correct congrats!!!!");
         break;

    }else{
       guess = prompt("Wrong guess Try again , if you want to quit type it");

    }
}




    
