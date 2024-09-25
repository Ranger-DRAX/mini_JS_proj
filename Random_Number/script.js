const dice = document.getElementById('DICE');
const label = document.getElementById('my_label');


let random_number;

dice.onclick= function(){
    const max_input=document.getElementById('max_number').value;

    const min_input=document.getElementById('min_number').value;

    const max=Number(max_input);
    const min=Number(min_input);


    random_number = Math.floor(Math.random() * (max - min + 1)) + min;

    label.textContent = `Random Number is : ${random_number}`
    
    console.log(random_number);
 

}


