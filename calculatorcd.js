var buttons=document.getElementsByClassName("inner_head");
console.log(buttons);
var display=document.getElementById("con_result");
var operand1=0;
var operand2=null;
var operator=null;

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
         var value=buttons[i].innerText
         console.log(value);
         console.log(buttons[i]);
       
        if(value=='='){
         display.innerText=eval(display.innerText);
        }else if(value=='AC'){
            display.innerText='';
        }else if(display.innerText.length>='10'){
            window.alert('error');
        } else{
            display.innerText +=value;
        }
    })
}