var count=0
var count2=0
var count3=0
var likesnum= document.querySelector("#likes")
var likesnum2= document.querySelector("#likes2")
var likesnum3= document.querySelector("#likes3")

function likecounter(){
    count++;
    likesnum.textContent = count +" Like(s)";
}
function likecounter2(){
    count2++;
    likesnum2.textContent = count2 +" Like(s)";
}
function likecounter3(){
    count3++;
    likesnum3.textContent = count3 +" Like(s)";
}

