// 诊断代谢症后群
var checkResult = 0;
if (checkResult >= 3) {
    $('#rbad').attr('src', 'images/01xiao.png');
} else if (checkResult > 1 && checkResult < 3) {
    $('#rbad').attr('src', 'images/02xiao.png');
} else if (checkResult == 0) {
    $('#rbad').attr('src', 'images/03xiao.png');

}


//丢值进来咯
//
//    // 腰围
// var Myaoweix=70;
// var Wyaoweix=87;
// 男
//   if(Myaoweix>90){
//        var Mrightnum = (Myaoweix-90)/(105-90);
//        $('#Mrightnum span').css('width',Mrightnum/0.01+'%');

//   }else{
//        var Mleftnum = (Myaoweix-90)/(60-90);
//        $('#Mleftnum span').css('width',Mleftnum/0.01+'%');
//   }
// //   // 女
// if(Wyaoweix>85){
//      var Wrightnum = (Wyaoweix-85)/(105-85);
//      $('#Mrightnum span').css('width',Wrightnum/0.01+'%');
// }else{
//  var Wleftnum = (Wyaoweix-85)/(60-95);
//  $('#Mleftnum span').css('width',Wleftnum/0.01+'%');
// }
// // 血压
// var SSyx = 131;
// var SZyx = 86;
// if(SSyx>130&&SZyx>85){
//      console.log(SSyx);
//    if(SSyx>130){
//         var XYrightnum = (SSyx-130)/(160-130);
//         console.log(XYrightnum);
//          $('#SSrightnum span').css('width',XYrightnum/0.01+'%');

//      }else{
//         var XYleftnum = (SSyx-130)/(90-130);
//         $('#SSleftnum span').css('width',XYrightnum/0.01+'%');

//      }
// }else if(SSyx>130&&SZyx<85){
//     if(SSyx>130){
//         var XYrightnum = (SSyx-130)/(160-130)
//         $('#SSrightnum span').css('width',XYrightnum/0.01+'%');

//      }else{
//         var XYleftnum = (SSyx-130)/(90-130);
//         $('#SSleftnum span').css('width',XYrightnum/0.01+'%');

//      }
// }else if(SSyx<130&&SZyx>85){
//     if(SZyx>85){
//         var XYrightnum = (SZyx-85)/(100-50)
//         $('#SSrightnum span').css('width',XYrightnum/0.01+'%');

//      }else{
//         var XYleftnum = (SZyx-85)/(50-85)
//        $('#SSleftnum span').css('width',XYleftnum/0.01+'%');

//     }
// }else if (SSyx<130&&SZyx<85){
//     if(SSyx>130){
//         var XYrightnum = (SSyx-130)/(160-130)
//         $('#SSrightnum span').css('width',XYrightnum/0.01+'%');

//      }else{
//         var XYleftnum = (SSyx-130)/(90-130)
//        $('#SSleftnum span').css('width',XYleftnum/0.01+'%');

//      }
// }
// // 血糖
//    var XT=0
//    if(XT>100){
//        var XTrighttnum = (XTrighttnum-100)/(140-100);
//         $('#XTrightnum span').css('width',Mrightnum/0.01+'%');

//    }else{
//        var XTleftnum = (XTrighttnum-100)/(50-100);
//         $('#XTleftnum span').css('width',Mrightnum/0.01+'%');

//    }
//    // })
// // 高密度胆固醇
//    var Mdangucun=0;
//    var Wdangucun=0;
//    // 男
//   if(Mdangucun>40){
//        var dangucunnum = (Mdangucun-40)/(90-40);
//        $('#GMDrightnum span').css('width',Mrightnum/0.01+'%');

//   }else{
//        var Mleftnum = (Mdangucun-40)/(20-40);
//        $('#GMDleftnum span').css('width',Mrightnum/0.01+'%');

//   }
//   // 女
//   if(Wdangucun>50){
//        var Wrightnum = (Wdangucun-50)/(90-50);
//        $('#GMDrightnum span').css('width',Mrightnum/0.01+'%');

//   }else{
//        var Wleftnum = (Wdangucun-50)/(60-95);
//        $('#GMDleftnum span').css('width',Mrightnum/0.01+'%');

//   }

//   // 中性脂肪
//   var ZXzf=0;
//   if(ZXzf > 150){
//        var ZXzfrightnum = (ZXzf-150)/(400-150);
//        $('#ZXZrightnum span').css('width',Mrightnum/0.01+'%');

//   }else{
//        var ZXzfleftnum = (ZXzf-150)/(50-150);
//       $('#ZXZleftnum span').css('width',Mrightnum/0.01+'%');

//   }