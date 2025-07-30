//alert("lestnica calc with simple AI");

let x0 = 200;//first vert line (left line) coordinate by
let y0 = 600;//first vert line (left line) coordinate by
let x1 = 200;//first vert line (left line) coordinate by
let y1 = 100;//first vert line (left line) coordinate by
let x2 = 0;//second vert line (right line) coordinate by
let y2 = 0;//second vert line (right line) coordinate by
let dx = 10;
let dy = 0;
let height = 0;
let ksteps = 0;
let n = 1;//quantity of steps
let w = 0;
let height1 = 0;


function bcalcclf()
{
    const canvas = document.getElementById("cnv");
    const ctx = canvas.getContext("2d");

    //begin clear canvas
    ctx.beginPath();
    ctx.moveTo(0, 0);
    //ctx.lineTo(x0, y0-y1);
    ctx.fillStyle = "darkblue";
    ctx.fillRect(0,0,800,600);
    //ctx.lineWidth = 2;
    //ctx.strokeStyle = "darkblue";
    ctx.stroke();

    n = 1;
    //end clear canvas



    y1 = document.getElementById("h").value/10;
    x1 = document.getElementById("w").value/10;
    ksteps = document.getElementById("steps").value;
    height = document.getElementById("h").value/10;
    height1 = document.getElementById("h").value;
    w = document.getElementById("w").value;

    //alert(y1);



    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0, y0-y1);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x0-(-1)*x1, y0);
    ctx.lineTo(x0-(-1)*x1, y0-y1);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "yellow";
    ctx.stroke();

do 
{
    ctx.beginPath();
    ctx.moveTo(x0, height - y0/ksteps);
    ctx.lineTo(x0-(-1)*x1,  height - y0/ksteps);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "silver";
    ctx.stroke();

    ctx.font = "25px Arial";
    ctx.fillStyle = "purple";
    ctx.fillText(n,x0-(-1.2)*x1,height - (y0/ksteps)/2);

    height -= y0/ksteps;    
    //alert(height);
    n++;
}
while (height>=2*y0/ksteps-1);

document.getElementById("hstepres").value = y0/ksteps*10;



//если материала не хватит на горизонтальные перекладины, то сигнализируем красным цветом, иначе зеленым
if (w * (n-1) < height1)
    {
        document.getElementById("res").style.backgroundColor = "green";
        alert(w * (n-1) + "mm");
        document.getElementById("res").value = w * (n-1);
    }    
else
if (w * (n-1) > height1)
    {
        document.getElementById("res").style.backgroundColor = "red";
        alert(w * (n-1));
        document.getElementById("res").value = w * (n-1);
    }





document.getElementById("ks").value = n-1;



}