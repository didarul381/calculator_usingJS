let screen =document.getElementById('screen');
let buttons =document.querySelectorAll('button');
let screenValue='';
for(item of buttons){

  item.addEventListener('click',(e)=>{

    itemText=e.target.innerText;
    if(itemText=='X'){
       itemText='*';
       screenValue +=itemText;
       screen.value=screenValue;

    }else if(itemText=='c'){
        screenValue ='';
       screen.value=screenValue;


    }else if(itemText=='='){
        screen.value=eval(screenValue);
        screenValue=screen.value;
    }else{
        screenValue +=itemText;
        screen.value=screenValue;
 
    }


  })

}