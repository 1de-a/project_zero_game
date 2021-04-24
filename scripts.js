

let n;
let answer;
let myNum;


function startGame()  {
answer = prompt("Kaçtan başlayalım?", "");

if (answer<20) {
    alert("20'den büyük demiştik ama.")
    startGame()
}

else {
    myNum = answer;
    document.getElementById("myNum").innerHTML = ("Sen en son"+" "+myNum+" "+"dedin.");

    if ( answer%3==0 )   {

        n= answer - 2;  }

   else if ( answer%3==1 )   {

    n= answer - 1;  }

    else if ( answer%3==2 )   {

        n= answer - 1;  }

    else {

        alert("bir takım hatalar yapıldı.")
    }


document.getElementById("gameLog").innerHTML = (n);

}}

function minusOne()   {

    

    myNum = n-1;
    document.getElementById("myNum").innerHTML = ("Sen en son"+" "+myNum+" "+"dedin.");

    if ( (n-1)%3==0 )   {

        n= n - 3;  }

   else if ( (n-1)%3==1 )   {

    n= n- 2;  }

    else if ( (n-1)%3==2 )   {

        n= n - 2;  }

    else {

        alert("bir takım hatalar yapıldı.")
    }

    document.getElementById("gameLog").innerHTML = (n);

   if (n==1) {
       
    alert("Sıfır sana kaldı. Kaybettin.")

   }

   else if (n==2) {

    alert("Sıfır bana kaldı. Kazandın.")
   }

   else if (n==3) {
    
    alert("Sıfır bana kaldı. Kazandın.")
    location.reload();
   }
  
}

function minusTwo()  {


    myNum = n-2;
    document.getElementById("myNum").innerHTML = ("Sen en son"+" "+myNum+" "+"dedin.");

    if ( (n-2)%3==0 )   {

        n= n - 3;  }

   else if ( (n-2)%3==1 )   {

    n= n- 3;  }

    else if ( (n-2)%3==2 )   {

        n= n - 3;  }

    else {

        alert("bir takım hatalar yapıldı.")
    }

    document.getElementById("gameLog").innerHTML = (n);

    if (n==1) {
       
        alert("Sıfır sana kaldı. Kaybettin.")
        location.reload();
    
       }
    
       else if (n==2) {
    
        alert("Sıfır bana kaldı. Kazandın.")
        location.reload();
       }

       else if (n==3) {
    
        alert("Sıfır bana kaldı. Kazandın.")
        location.reload();
       }

}

