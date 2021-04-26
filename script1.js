var count=0
var likesnum= document.querySelector("#likes")

function likecounter(){
    count++;
    likesnum.textContent = count +" Like(s)";
}