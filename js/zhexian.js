var ocanvas = document.getElementById("myCanvas");
    var mycanvas = ocanvas.getContext("2d");
    var arr = [0, -4, 4];
    var ZXname = ['第一项', '第二项', '第三项'];




    function roundedRect(cornerX, cornerY, width, height, cornerRadius) {
       if (width> 0){
            mycanvas.moveTo(cornerX + cornerRadius, cornerY)
        }else {
            mycanvas.moveTo(cornerX - cornerRadius, cornerY)
        };
           mycanvas.arcTo(cornerX+width,cornerY,cornerX + width,cornerY+height,cornerRadius);
           mycanvas.arcTo(cornerX+width,cornerY + height,cornerX,cornerY+height,cornerRadius);
           mycanvas.arcTo(cornerX,cornerY+height,cornerX,cornerY,cornerRadius);
       if(width> 0) {
          mycanvas.arcTo(cornerX,cornerY,cornerX+cornerRadius,cornerY,cornerRadius);
       }
       else{
         mycanvas.arcTo(cornerX,cornerY,cornerX-cornerRadius,cornerY,cornerRadius);
       }
    }
    //è¿™ä¸ªå°±æ˜¯ç”»åœ†è§’çŸ©å½¢çš„æ–¹æ³•äº†ï¼Œå…¶ä¸­cornerX,cornerYæ˜¯çŸ©å½¢å·¦ä¸Šè§’åæ ‡ã€?
    function drawRoundedRect(strokeStyle,fillStyle,cornerX,cornerY,width,height,cornerRadius) {
       mycanvas.beginPath();
       roundedRect(cornerX, cornerY, width, height, cornerRadius);
       mycanvas.strokeStyle = strokeStyle;
       mycanvas.fillStyle = fillStyle;
       mycanvas.stroke();
       mycanvas.fill();
    }




    //ç¬¬ä¸€å…ˆå®šä¹‰ä¸€ä¸ªç”»çº¿çš„å‡½æ•°æ–¹æ³•    ç”»ä¸¤æ¡çº¿
    function line(aX,aY,bX,bY) {//å¼?å§‹å’Œç»“æŸçš„æ¨ªåæ ‡  å¼?å§‹å’Œç»“æŸçš„çºµåæ ‡
        mycanvas.beginPath();
        mycanvas.moveTo(aX,aY);
        mycanvas.lineTo(bX,bY);
        mycanvas.stroke();
    }
    line(60,0,60,500);

    //ç¬¬äºŒç”¨forå¾ªçŽ¯ ç”?11æ¡çº¿   åˆ©ç”¨ä¸Šé¢lineçš„ç”»çº¿æ–¹æ³?
    for(var i=0;i<12;i++){
       line(900,i*50,60,i*50);
       write(-(i-6),0,i*50);
    }

    line(900,600,94,600);

    function yuanjiao(){
	    mycanvas.beginPath();
	    mycanvas.moveTo(60,480);           // åˆ›å»ºå¼?å§‹ç‚¹
	    mycanvas.lineTo(60,500);          // åˆ›å»ºæ°´å¹³çº?
	    mycanvas.arcTo(70,600,80,600,50); // åˆ›å»ºå¼?
	    mycanvas.stroke();
    }

    yuanjiao();
    //ç¬¬ä¸‰å®šä¹‰ä¸?ä¸ªçŸ©å½¢çš„å‡½æ•°æ–¹æ³•
    function rect(X,Y,width,height,color) {
        mycanvas.beginPath();
        mycanvas.fillStyle=color;
        mycanvas.rect(X,Y,width,height);
        mycanvas.fill();
        mycanvas.closePath()
    }

    function Xname(){
        for(var y=0;y<ZXname.length;y++){
                  write(ZXname[y],90+y*150+y*120,640);
            }
    }

    Xname()
    //ç¬¬å››å®šä¹‰ä¸?ä¸ªæ–¹æ³?  å®šä¹‰çŸ©å½¢çš„å…·ä½“å˜é‡ä»¥åŠé«˜å¼•å…¥æ•°ç»„
    function lineTo() {
        for(var i=0;i<arr.length;i++){
            var width=30;
            var height=arr[i];
            var X=100+i*150+i*140;
            var Y=(296-(height*50));
            mycanvas.lineTo(X,Y);
            mycanvas.stroke();
            mycanvas.font="30px  Microsoft YaHei";
            mycanvas.fillStyle='black';
        }
    }


     function text() {
        for(var i=0;i<arr.length;i++){
            var height=arr[i];
            var X=100+i*150+i*140;
            var Y=(296-(height*50));

            drawRoundedRect('#666666',   '#666666',  X-25,  Y-55,  100,  35, 10);
            mycanvas.font="30px  Microsoft YaHei";
            mycanvas.strokeStyle='0000ff';
            mycanvas.fillStyle='#ffffff';
            if(arr[i]<0){
                mycanvas.fillText(arr[i],X,Y-26)
            }else{
                mycanvas.fillText('+'+arr[i],X,Y-26)
            }
        }
    }

    function circle() {
        for(var i=0;i<arr.length;i++){
            var width=30;
            var height=arr[i];
            var X=100+i*150+i*140;
            var Y=(296-(height*50));
            mycanvas.beginPath();
            mycanvas.arc(X,Y,10,0,2*Math.PI);
            mycanvas.fillStyle='black';
            mycanvas.fill();
            mycanvas.stroke();

        }
    }

    //æ·»åŠ å­?
    function write(start,ox,oy) {
        mycanvas.beginPath();
        mycanvas.font="26px  Microsoft YaHei";
        mycanvas.strokeStyle='black';
        mycanvas.fillStyle = 'black';
        mycanvas.fillText(start,ox,oy);
        mycanvas.closePath();
    }
    lineTo();
    text();
    circle();
