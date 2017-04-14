var panel = function(id, option) {
    this.canvas = document.getElementById(id); //获取canvas元素  
    this.cvs = this.canvas.getContext("2d"); //得到绘制上下文  
    this.width = 800; //对象宽度  
    this.height = 300; //对象高度  
    this.level = option.level;
    this.outsideStyle = option.outsideStyle;
    this.r = this.width / 2 ;
}


var panelOption = {
    maxLength: 30,
    interval: 5,
    level: [//仪表盘需要呈现的数据隔离区域  
        {start: 0, color: "#0092d7" },
        { start: 30, color: "#00aeef" },
        { start: 40, color: "#4ec9f5" },
        { start: 100, color: "#f8995d" }
    ],
    outsideStyle: { lineWidth: 4, color: "rgba(100,100,100,1)" }
};

panel.prototype.save = function(fn) {
    this.cvs.save();
    fn();
    this.cvs.restore();
}


panel.prototype.drawLevelArea = function(level,value) {
    var p = this;
    var cvs = this.cvs;
    for (var i = 0; i < level.length; i++) {
        p.save(function() {
            cvs.translate(p.width / 2, p.height*2);
            cvs.rotate(Math.PI / 30 * level[i].start);
            p.save(function() {
                cvs.beginPath();
                cvs.arc(0, 0, p.height - p.outsideStyle.lineWidth, 0, 1*Math.PI,true);
                cvs.fillStyle = level[i].color;
                cvs.fill();
            });
        });
    }

    p.save(function() {
        cvs.translate(p.width / 2, p.height); //将坐标点移到矩形的底部的中间  
        cvs.beginPath();
        cvs.arc(0, p.height, 300, 0, Math.PI / 180 * 180, true); //画半圆
        cvs.fillStyle="#ffffff";
        cvs.strokeStyle = '#ffffff';
        cvs.fill();
        cvs.stroke();
    });

    p.save(function() {
        cvs.translate(p.width / 2, p.height); //将坐标点移到矩形的底部的中间  
        cvs.beginPath();
        cvs.arc(0, p.height, 150, 0, Math.PI / 180 * 180, true); //画半圆
        p.changeColor(value);
        cvs.fill();
        cvs.stroke();
    });

    p.save(function() {
        cvs.translate(p.width / 2, p.height); //将坐标点移到矩形的底部的中间  
        cvs.beginPath();
        cvs.lineWidth = p.outsideStyle.lineWidth;
        cvs.strokeStyle = '#ffffff';
        cvs.arc(0, p.height, p.height - cvs.lineWidth, 0, Math.PI / 180 * 180, true); //画半圆  
        cvs.stroke();
    });

}


panel.prototype.drawLine = function() {
    var p = this;
    var cvs = this.cvs;
    for (var i = 0; i <= 30; i++) {
        p.save(function() {
            p.save(function() {
                cvs.beginPath();
                if (i % 5 == 0) {
                    cvs.translate(p.width / 2 , p.height*2);
                    cvs.rotate(Math.PI / 30 * i);
                    cvs.font = '5px'
                    cvs.fillStyle="#a19493";
                    cvs.strokeStyle = '#a19493';
                    cvs.fill();
                    cvs.font='18px '
                    cvs.lineTo(-(p.height - p.outsideStyle.lineWidth) + 30, 0);
                    cvs.lineTo(-(p.height - p.outsideStyle.lineWidth) + 5, 0)
                } else{
                    cvs.translate(p.width / 2 , p.height*2);
                    cvs.rotate(Math.PI / 30 * i);
                    cvs.font = '5px'
                    cvs.fillStyle="#d2d4d5";
                    cvs.strokeStyle = '#d2d4d5';
                    cvs.fill();
                    cvs.lineTo(-(p.height - p.outsideStyle.lineWidth) + 30, 0);
                    cvs.lineTo(-(p.height - p.outsideStyle.lineWidth) + 5, 0)
                };
                cvs.stroke();
            });
        });
    }
}






panel.prototype.drawText = function(val) {
    var p = this;
    var cvs = this.cvs;
    var r = this.r;
    cvs.translate(r,r);
    cvs.beginPath();
    cvs.lineWidth =  5;
    cvs.stroke();
    var num = [-15,-10,-5,0,'+'+5,'+'+10,'+'+15,,,,,]
    cvs.font=  '18px Arial';
    cvs.textAlign = 'center';
    cvs.textBaseline = 'middle';
    num.forEach(function(number,i){
        var rad  =  2 * Math.PI / 12 * i;
        var x = Math.cos(rad)*(rad - 320);
        var y = Math.sin(rad)*(rad  - 295);
        // cvs.fillText(number,x,y+190);
    })
}


panel.prototype.drawSpanner = function(value) {
    var p = this;
    var cvs = this.cvs;
    p.save(function() {
        var values = (value/5*30)+90
        cvs.translate(p.width / 2, p.height*2);
        cvs.rotate(Math.PI / 180 * -90);
        p.save(function() {
            cvs.rotate(Math.PI / 180 * values);
            cvs.beginPath();
            cvs.moveTo(110, -2);
            cvs.lineTo(0, -p.height*0.7 );
            cvs.lineTo(-110, -3);
            cvs.lineTo(20, -3);
            p.changeColor(value);
            cvs.fill();
        });
    });
}


panel.prototype.changeColor = function(value){
    var p = this;
    var cvs = this.cvs;
    if(value >= -15 && value <= -10){
        cvs.fillStyle="#0092d7";
        cvs.strokeStyle = '#0092d7';
    }else if (value >=-10 && value <= -5 ){
        cvs.fillStyle="#00aeef";
        cvs.strokeStyle = '#00aeef';
    }else if(value >= -5 && value <= 0){
        cvs.fillStyle="#4ec9f5";
        cvs.strokeStyle = '#4ec9f5';
    }else if(value >= 0 && value <= 5){
        cvs.fillStyle="#f8995d";
        cvs.strokeStyle = '#f8995d';
    } else if(value >=5 && value <= 10){
        cvs.fillStyle="#f36f21";
        cvs.strokeStyle = '#f36f21';
    }else if(value >= 10 && value <= 15){
        cvs.fillStyle="#ef4136";
        cvs.strokeStyle = '#ef4136';
    }
}

panel.prototype.text = function(value){
    var p = this;
    var cvs = this.cvs
    cvs.beginPath();
    cvs.font="100px Microsoft YaHei";
    cvs.fillStyle='#ffffff';
    cvs.textAlign="left 100 100";
    cvs.textBaseline="bottom";
    cvs.fillText(value,-1,190);
    cvs.stroke();

}


panel.prototype.init = function(value) {
    var p = this;
    var cvs = this.cvs;
    p.drawLevelArea(p.level,value);
    // p.drawLine();
    p.drawSpanner(value);
    p.drawText();
    p.changeColor(value);
    p.text(value);
}



window.onload = function() {
    var panelOption = {
        maxLength: 30,
        interval: 5,
        level: [
            {start: 0, color: "#0092d7" },
            { start: 5, color: "#00aeef" },
            { start: 10, color: "#4ec9f5" },
            { start: 15, color: "#f8995d" },
            { start: 20, color: "#f36f21" },
            {start:25,color:"#ef4136"},
        ],
        outsideStyle: { lineWidth: 6, color: "rgba(100,100,100,1)" }
    };

    Panel = new panel("board", panelOption);
    Panel.init(-0.4);
    ;
}  