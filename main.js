var last_pos_x,last_pos_y;

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="red";
PenW=1;
var width= screen.width;
var new_width= width-70;
var height= screen.height;
var new_height= height-70;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart", my_touchStart);

function my_touchStart(e){
    console.log("Touch Screen Mode On");
    color= document.getElementById("color_input").value;
    PenW= document.getElementById("width_input").value;
    last_pos_x= e.touches[0].clientX - canvas.offsetLeft;
    last_pos_y= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    current_pos_x=e.touches[0].clientX - canvas.offsetLeft;
    current_pos_y=e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=PenW;
        console.log("x value is "+current_pos_x);
        console.log("y value is "+current_pos_y);
        ctx.moveTo(last_pos_x,last_pos_y);
        ctx.lineTo(current_pos_x,current_pos_y);
        ctx.stroke();
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
}

function ClearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


