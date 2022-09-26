canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouseevent ="empty";
var last_position_of_x , last_position_of_y ;

color = "purple";
linewidth = 2 ;

canvas.addEventListener ("mouseup", up);
function up(e) {
    mouseevent = "mouseup";
}

canvas.addEventListener ("mouseleave", leave);
function leave(e) {
    mouseevent = "mouseleave";
}

canvas.addEventListener ("mousedown", down);
function down(e) {
    color = document.getElementById ("color").value;
    linewidth = document.getElementById ("width_of_line").value;
    mouseevent = "mousedown";
}

canvas.addEventListener ("mousemove", move);
function move(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown" ) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = linewidth;
      
      console.log("Last position of x and y coordinates = ");
      console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
      ctx.moveTo(last_position_of_x , last_position_of_y);

      console.log("current position of x and y coordinates = ");
      console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
      ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x ;
    last_position_of_y = current_position_of_mouse_y ;
}

console.log

canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log ("My touch has started");
       
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log ("My touchmove has started");

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches [0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
