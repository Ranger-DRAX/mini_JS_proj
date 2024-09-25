

// main programme

const dbtn= document.getElementById('dbtn') // decreasing
const rbtn=document.getElementById('rbtn') // resetting
const ibtn=document.getElementById('ibtn') // increasing
const ct = document.getElementById('ct') // counter label


let count=0;
//number increasing
ibtn.onclick = function(){
    count+=1;// count ++
    ct.textContent = count;


}

// number decreasing
dbtn.onclick = function() {
    count-=1; 
    ct.textContent= count;

}

//reset number
rbtn.onclick = function() {
    count=0; 
    ct.textContent= count;
}

