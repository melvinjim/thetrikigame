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

        triki("circle-t",0,1,2);
        triki("image-x",0,1,2);
        triki("circle-t",3,4,5);
        triki("image-x",3,4,5);
        triki("circle-t",6,7,8);
        triki("image-x",6,7,8);
        triki("circle-t",0,4,8);
        triki("image-x",0,4,8);
        triki("circle-t",2,4,6);
        triki("image-x",2,4,6);
        triki("circle-t",0,3,6);
        triki("image-x",0,3,6);
        triki("circle-t",1,4,7);
        triki("image-x",1,4,7);
        triki("circle-t",2,5,8);
        triki("image-x",2,5,8);
        
    }
});

function triki(name, value, value2, value3) {
    var space1 = document.getElementsByClassName("space")[value].getElementsByTagName("img")[0];
    var space2 = document.getElementsByClassName("space")[value2].getElementsByTagName("img")[0];
    var space3 = document.getElementsByClassName("space")[value3].getElementsByTagName("img")[0];
    
    if (space1 !== undefined && space2 !== undefined && space3 !== undefined) {
        if (space1.className == name && space2.className == name && space3.className == name) {
            setTimeout(() => { alert('ganó ' + name) }, 10);
        }
    }
}