canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mosedown);
function my_mosedown(e)
{
    Mouse_x = e.clientX - canvas.offsetLeft;
    Mouse_y = e.clientY - canvas.offsetLeft;

    console.log("x=" + Mouse_x + ", y =" + Mouse_y);
    circle(Mouse_x, Mouse_y);


}
function circle(Mouse_x, Mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(Mouse_x,Mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}