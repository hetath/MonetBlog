// debugger header
// "use strict"; //使用严格模式
function out(i){
    document.getElementById("txt").innerHTML=
    document.getElementById("txt").innerHTML+", "+i;
    return;
}

// -> Array长度构造
var color = new Array();
out(color);

var color_a = new Array(20);
out(color_a);
