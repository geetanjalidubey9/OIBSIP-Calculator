let display=document.getElementById('display');
let displayvalue='';
buttons=document.querySelectorAll('button');
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log("button Text is",buttonText);
        if(buttonText=='x') {
            buttonText='*';
displayvalue+=buttonText;
      display.value=displayvalue;      
        }
        else if(buttonText=='C'){
displayvalue="";

display.value=displayvalue;   


        }
        else if(buttonText=='sin'){
        
            // buttonText=Math.sin();
            display.value=Math.sin(display.value);
            
        }


        else if(buttonText=='=')
        {
            display.value=eval(displayvalue) ;


        }
        
        else{

            displayvalue+=buttonText;
            display.value=displayvalue;       

        }

    })
    






    
}