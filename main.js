let def = 0;

let number =document.getElementById('number');
let higher = document.getElementById('higher');
let lower = document.getElementById('lower');



let increase = ()=>{
    
    def +=1;
    
    number.innerHTML=`${def}`;

    if(def>=1){
        number.style.color = 'green';
    }else if(def == 0){
        number.style.color = 'yellow';
    }

}
let decrease = ()=>{

   def -=1;


   number.innerHTML=`${def}`;
   if(def<0){
    number.style.color = 'red';
}else if(def == 0){
    number.style.color = 'yellow';
}


}







