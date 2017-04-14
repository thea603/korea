var ocanvas = document.getElementById("canvas");
var mycanvas = ocanvas.getContext("2d");
var arr = [-8, 10, 10, -5];
var befores = [-8, 10, -5, 2];
var nows = [-1, 4, 5, 2];


var Xname = ['腹部肥胖年龄','血压年龄','血糖年龄','动脉硬化年龄'];


//第一先定义一个画线的函数方法    画两条线
function lines(aX,aY,bX,bY) {//开始和结束的横坐标  开始和结束的纵坐标
    mycanvas.beginPath();
    mycanvas.moveTo(aX,aY);
    mycanvas.lineTo(bX,bY);
    mycanvas.stroke();
}

lines(60,10,60,480);

//第二用for循环 画11条线   利用上面line的画线方法
for(var i=1;i<9;i++){
    lines(900,i*60,60,i*60);
    writes(-(i*5-20),0,i*60);
}


lines(900,540,94,540);

function circles(){
    mycanvas.beginPath();
    mycanvas.moveTo(60,480);           // 创建开始点
    mycanvas.lineTo(60,500);          // 创建水平线
    mycanvas.arcTo(70,540,80,540,50); // 创建弧
    mycanvas.stroke();
}

circles();


//第三定义一个矩形的函数方法
function rects(X,Y,width,height,color) {
    mycanvas.beginPath();
    mycanvas.fillStyle=color;
    mycanvas.rect(X,Y,width,height);
    mycanvas.fill();
    mycanvas.closePath()
}

function Xnames(){
    for(var y=0;y<Xname.length;y++){
        writes(Xname[y],120+y*150+y*40,600);
    }
}


Xnames()


//第四定义一个方法  定义矩形的具体变量以及高引入数组
function beforeB() {
    for(var i=0;i<arr.length;i++){
        var width=30;
        var Initheight=arr[i];
        var height = Initheight/5*60;
        var X=140+i*150+i*20;
        var Y=240-height;
        rects(X,Y,width,height,'#fff6cc');
        mycanvas.font="20px  Microsoft YaHei";
        mycanvas.fillStyle='black';
        if(arr[i]<0){
            mycanvas.fillText(arr[i],X-2,Y+25)
        }else{
            mycanvas.fillText('+'+arr[i],X-3,Y-18)
        }
    }
}


function before() {
    for(var i=0;i<befores.length;i++){
        var width=30;
        var Initheight=befores[i];
        var height = Initheight/5*60;
        var X=180+i*150+i*20;
        var Y=240-height;
        rects(X,Y,width,height,'#ffe87f');
        mycanvas.font = "20px  Microsoft YaHei";
        mycanvas.fillStyle='black';
        if(befores[i]<0){
            mycanvas.fillText(befores[i],X,Y+25)
        }else{
            mycanvas.fillText('+'+befores[i],X-8,Y-8)
        }
    }
}


function now() {
    for(var i=0;i<nows.length;i++){
        var width=30;
        var Initheight=nows[i];
        var height = Initheight/5*60;
        var X=220+i*150+i*20;
        var Y=240-height;
        rects(X,Y,width,height,'#ffcf00');
        mycanvas.font = "20px  Microsoft YaHei";
        mycanvas.fillStyle='black';
        if(nows[i]<0){
            mycanvas.fillText(nows[i],X-3,Y+25)
        }else{
            mycanvas.fillText('+'+nows[i],X,Y-8)
        }
    }
}
beforeB();
before();
now();

//添加字
function writes(start,ox,oy) {
    mycanvas.beginPath();
    mycanvas.font="30px Microsoft YaHei";
    mycanvas.strokeStyle='black';
    mycanvas.fillStyle='balck';
    mycanvas.fillText(start,ox,oy+2);
    mycanvas.closePath();
}