function inte(num,ID1,ID2,ID3) {
    var canvas_1 = document.querySelector('#'+ID1);
    var canvas_2 = document.querySelector('#'+ID2);
    var canvas_3 = document.querySelector('#'+ID3);

    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    var ctx_3 = canvas_3.getContext('2d');

    var angle = 0;
    var timer;
    var percent = num/16*100;


    function color(color){
        ctx_3.beginPath();
        ctx_3.arc(canvas_1.width/2, canvas_1.height/2,70,0,2*Math.PI);
        ctx_3.fillStyle=color;
        ctx_3.strokeStyle = color;
        ctx_3.fill();
        ctx_3.stroke();
    }
    function draws() {
      
        //百分比圆环
        ctx_2.beginPath();
        if(num<0){
            console.log(-((percent / 100 * 360)-90*Math.PI/180));
            ctx_2.arc(canvas_2.width/2, canvas_2.height/2, canvas_2.width/2 - ctx_2.lineWidth/2,0-90*Math.PI/180,(-((percent / 100 * 360) *Math.PI/180)-90*Math.PI/180), false);
        }else{
            console.log((percent / 100 * 360)-90*Math.PI/180);
            ctx_2.arc(canvas_2.width/2, canvas_2.height/2, canvas_2.width/2 - ctx_2.lineWidth/2 ,0-90*Math.PI/180,((percent / 100 * 360) *Math.PI/180)-90*Math.PI/180, false);
        }
    
        ctx_2.stroke();

        var text = num;
        ctx_2.font = '20px Arial';
        ctx_2.fillStyle = '#ffffff';

        var str = (num + "").replace("-", "");
        var len = str.length;
        console.log(num,len);
        var x = 65;
        if (len == 2) {
            x = 55;
        } else if (len == 3) {
            x = 55;
        } else if (len == 1) {
            x = 65;
        }
         else if (len == 4) {
            x = 50;
        }
        if(num< 0){
            ctx_2.fillText(text,x,100);
        }else{
            ctx_2.fillText("+"+text,x,100);

        }
    }

    if(percent < 0 ){
        var percent = Math.abs(percent);
        function bottomCircles(){
            ctx_1.lineWidth = 30;
            ctx_1.beginPath();
            ctx_1.closePath();
            ctx_1.stroke();
            ctx_1.arc(canvas_1.width/2, canvas_1.height/2, canvas_1.width/2 - ctx_1.lineWidth/2, 0 , Math.PI * 2, false);
            if (num < 0 && num >= -5) {
                ctx_1.strokeStyle = "#4ec9f5";
                color('#4ec9f5');
                ctx_1.stroke();
            }else if(num < -5 && num >= -10){
                ctx_1.strokeStyle = "#00aeef";
                color('#00aeef');
                ctx_1.stroke();
            }else if(num < -10 && num >= -15){
                ctx_1.strokeStyle = "#0092d7";
                color('#0092d7');
                ctx_1.stroke();
            }
            ctx_2.strokeStyle = "#eeeeee";
            //画底部的灰色圆环
            ctx_2.lineWidth = 20;
        }
        bottomCircles();
        draws()
    }else {
        var percent = Math.abs(percent);
        function bottomCircle(){
            ctx_1.lineWidth = 20;
            //画底部的灰色圆环
            ctx_1.beginPath();
            ctx_1.arc(canvas_1.width/2, canvas_1.height/2, canvas_1.width/2 - ctx_1.lineWidth/2, 0, Math.PI * 2, false);
            ctx_1.closePath();
            ctx_1.stroke();
            ctx_2.lineWidth = 30;
            if (num >= 0 && num <= 5) {
                ctx_2.strokeStyle = "#f8995d";
                color('#f8995d');
                ctx_2.stroke();

            }else if(num > 5 && num <= 10){
                ctx_2.strokeStyle = "#f36f21";
                color('#f36f21');
                ctx_2.stroke();
            }else if(num > 10 && num <= 15){
                ctx_2.strokeStyle = "#ef4136";
                color('#ef4136');
                ctx_2.stroke();
            }
            ctx_1.strokeStyle = "#eeeeee";
            ctx_1.stroke();

        }
        draws()
        bottomCircle();
    }



}
window.onload = inte(7.6,'canvas_1','canvas_2','canvas_3'),inte(14,'canvas_4','canvas_5','canvas_6'),inte(12.5,'canvas_7','canvas_8','canvas_9'),inte(3.2,'canvas_10','canvas_11','canvas_12');