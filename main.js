var menu = document.getElementById("bar");
var item = document.getElementById("item");


itemm.style.right = '-300px';
menu.onclick = function(argument){
    if (item.style.right == '-300px'){
        item.style.right = '0';
    }
    else{
        item.style.right = '-300px'
    }
}