let n;
let ans;
let txt;


function gameLogger () {
    // create a new div element
    const newLi = document.createElement("li");
  
    // and give it some content
    const newContent = document.createTextNode(txt);
  
    // add the text node to the newly created div
    newLi.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentLi = document.getElementById("li1");
    document.body.insertBefore(newLi, currentLi);

    //let li = document.createElement('li');
    //ul.appendChild(li);

    //li.innerHTML += item;

}


function finish() {

if              (n===1)  {  txt = ("0"); 
                            gameLogger();
                            txt= ("Tebrikler. Kazandın!");
                            gameLogger();
                            setTimeout(() => { location.reload(); }, 2500);
                            

    }   else if (n===2)   {   
                            txt = ("1"); 
                            gameLogger();
                            txt= ("Sıfır demekten başka şansın kalmadı. Kaybettin.");
                            gameLogger();
                            setTimeout(() => { location.reload(); }, 2500);
                            

    }   else if (n===3)   {   
                            txt = ("1"); 
                            gameLogger();
                            txt= ("Sıfır demekten başka şansın kalmadı. Kaybettin.");
                            gameLogger();
                            setTimeout(() => { location.reload(); }, 2500);
                            

    }   else               {

        game()
    }

}


function game() {

    if              (n%3===0)  {  ans= n-2;
                                  txt = ans; 
                                  setTimeout(() => { gameLogger(); }, 400);
                                  
                                  
    
        }   else if (n%3===1)   {   
                                  ans= n-1;
                                  txt = ans; 
                                  setTimeout(() => { gameLogger(); }, 400);
    
        }   else if (n%3===2)   {   
                                  ans= n-1;
                                  txt = ans; 
                                  setTimeout(() => { gameLogger(); }, 400);
    
        }   else               {
    
            alert("Korkunç bir hata oluştu!")
        }
    
    
    }

function getNumber()     {
    // Selecting the input element and get its value 

    n = document.getElementById("num").value;
    

    if (n<20 || ans>0 ){     
                    location.reload();
                    
    }
            
    else    {
            txt = n;
            gameLogger();
            setTimeout(() => { finish(); }, 400);
            
            
      }

}

function minusOne()     {
 if (n>3) 
{ n = ans - 1;
txt = n;
gameLogger();
finish();}

else {location.reload();}

}

function minusTwo()     {
    if (n>3) 
    {
    n = ans - 2;
    txt = n;
    gameLogger();
    finish(); }
    else {location.reload()}
    
    }