

let n;
let answer;
let myNum;
let logger;
let para = document.createElement('p');


const output = document.querySelector(".logger");
logger.innerHTML = "";


function startGame()  {
answer = prompt("Kaçtan başlayalım?", "");

if (answer<20) {
    alert("20'den büyük bir sayıyla başlamalısın.")
    startGame()
}

else {
    myNum = answer;
    para.textContent = myNum;

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
para.textContent = n;
output.appendChild(para);
}}

function minusOne()   {

    

    myNum = n-1;
    para.textContent = myNum;

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
    para.textContent = n;
    

   if (n===1) {
       
    alert("Sıfır sana kaldı. Kaybettin.")

   }

   else if (n===2) {

    alert("Sıfır bana kaldı. Kazandın.")
   }

   else if (n===3) {
    
    alert("Sıfır bana kaldı. Kazandın.")
    
   }
   output.appendChild(para);
   location.reload();
}

function minusTwo()  {


    myNum = n-2;
    para.textContent = myNum;
    

    if ( (n-2)%3==0 )   {

        n= n - 3;  }

   else if ( (n-2)%3==1 )   {

    n= n- 3;  }

    else if ( (n-2)%3==2 )   {

        n= n - 3;  }

    else {

        alert("bir takım hatalar yapıldı.")
    }
    para.textContent = n;

    document.getElementById("gameLog").innerHTML = (n);

    if (n===1) {
       
        alert("Sıfır sana kaldı. Kaybettin.")
        
    
       }
    
       else if (n===2) {
    
        alert("Sıfır bana kaldı. Kazandın.")
        
       }

       else if (n===3) {
    
        alert("Sıfır bana kaldı. Kazandın.")
        
       }


       output.appendChild(para);
       location.reload();
       

}

