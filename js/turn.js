var order1 = document.getElementById("img-circle");
var order2 = document.getElementById("image-x");
var imgCircle = '<img class="circle-t" src="img/circle.png" alt="#">'
var imgX = '<img class="image-x" src="img/x_image.png" alt="#">'
var order = 1;

order2.classList.add("d-none");

document.addEventListener('click', function(e) {
    if (e.target.className.includes("space")) {
        if(order == 1){
            e.target.innerHTML = imgCircle;
            order1.classList.add("d-none");
            order2.classList.remove("d-none");
            order = 2;
        } else {
            e.target.innerHTML = imgX;
            order1.classList.remove("d-none");
            order2.classList.add("d-none");
            order = 1;
        }
    }
    tri("circle-t")
    tri("image-x")
});


function tri(name) {
    var position0 = document.getElementsByClassName("space")[0].getElementsByTagName("img")[0].className
    var position1 = document.getElementsByClassName("space")[1].getElementsByTagName("img")[0].className
    var position2 = document.getElementsByClassName("space")[2].getElementsByTagName("img")[0].className
    var position3 = document.getElementsByClassName("space")[3].getElementsByTagName("img")[0].className
    var position4 = document.getElementsByClassName("space")[4].getElementsByTagName("img")[0].className
    var position5 = document.getElementsByClassName("space")[5].getElementsByTagName("img")[0].className
    var position7 = document.getElementsByClassName("space")[6].getElementsByTagName("img")[0].className
    var position8 = document.getElementsByClassName("space")[7].getElementsByTagName("img")[0].className

    if (position0 == name & position1 == position0 & position2 == position0) {
        console.log(position0);
        alert("triqui");
    } if (position3 == name & position4 == position3 & position5 == position3) {
        alert("triqui");
    } if (position6 == name & position7 == position6 & position8 == position6) {
        alert("triqui")
    }
}