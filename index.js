let i1=document.querySelector("#i1");
let i2=document.querySelector("#i2");
let i3=document.querySelector("#i3");
let i4=document.querySelector("#i4");
let x=1;
let banner=(x)=>{
    if(x===1){
        i1.style.left="0px";
        i2.style.left="1600px"
        i3.style.left="3200px"
        i4.style.left="4800px"
    }else if(x===2){
        i1.style.left="-1600px";
        i2.style.left="0px"
        i3.style.left="1600px"
        i4.style.left="3200px"

    }else if(x===3){
        i1.style.left="-3200px";
        i2.style.left="-1600px"
        i3.style.left="0px"
        i4.style.left="1600px"
    }else if(x===4){
        i1.style.left="-4800px";
        i2.style.left="-3200px"
        i3.style.left="-1600px"
        i4.style.left="0px"
    }
}
let bannerslider =()=>{
    if(x===4){
        x=1;
    }else{
        x++;
    }
    banner(x)
}
let bannerslidel =()=>{
    if(x===1){
        x=1;
    } else{
        x--;
    }
    banner(x)
}
setInterval(()=>{
    bannerslider()
},3000)
let rbtn=document.querySelector("#right_btn").addEventListener("click",bannerslider)
let lbtn=document.querySelector("#left_btn").addEventListener("click",bannerslidel)

let y=1;
document.querySelector("#off1").addEventListener("click",slideoffer1)
document.querySelector("#off2").addEventListener("click",slideoffer2)

let o1=document.querySelector("#o1");
let o2=document.querySelector("#o2");
let o3=document.querySelector("#o3");
let o4=document.querySelector("#o4");
let o5=document.querySelector("#o5");
let o6=document.querySelector("#o6");
let o7=document.querySelector("#o7");
let o8=document.querySelector("#o8");
let o9=document.querySelector("#o9");
let o10=document.querySelector("#o10");
let o11=document.querySelector("#o11");
let o12=document.querySelector("#o12");
let o13=document.querySelector("#o13");
let o14=document.querySelector("#o14");

function slideoffer1(){
    if(y===1){
        y=1;
    }else{
        y--;
    }
    offff(y);
}
function slideoffer2(){
    if(y===11){
        y=11;
    }else{
        y++;
    }
    offff(y);
 }
 function offff(y){
    if(y===1){
        o1.style.left="0px";
        o2.style.left="320px";
        o3.style.left="640px";
        o4.style.left="960px";
        o5.style.left="1280px";
        o6.style.left="1600px";
        o7.style.left="1600px";
        o8.style.left="1600px";
        o9.style.left="1600px";
        o10.style.left="1600px";
        o11.style.left="1600px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===2){
        o1.style.left="-320px";
        o2.style.left="0px";
        o3.style.left="320px";
        o4.style.left="640px";
        o5.style.left="960px";
        o6.style.left="1280px";
        o7.style.left="1600px";
        o8.style.left="1600px";
        o9.style.left="1600px";
        o10.style.left="1600px";
        o11.style.left="1600px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===3){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="0px";
        o4.style.left="320px";
        o5.style.left="640px";
        o6.style.left="960px";
        o7.style.left="1280px";
        o8.style.left="1600px";
        o9.style.left="1600px";
        o10.style.left="1600px";
        o11.style.left="1600px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===4){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="0px";
        o5.style.left="320px";
        o6.style.left="640px";
        o7.style.left="960px";
        o8.style.left="1280px";
        o9.style.left="1600px";
        o10.style.left="1600px";
        o11.style.left="1600px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===5){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="0px";
        o6.style.left="320px";
        o7.style.left="640px";
        o8.style.left="960px";
        o9.style.left="1280px";
        o10.style.left="1600px";
        o11.style.left="1600px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===6){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="-320px";
        o6.style.left="0px";
        o7.style.left="320px";
        o8.style.left="640px";
        o9.style.left="960px";
        o10.style.left="1280px";
        o11.style.left="1600px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===7){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="-320px";
        o6.style.left="-320px";
        o7.style.left="0px";
        o8.style.left="320px";
        o9.style.left="640px";
        o10.style.left="960px";
        o11.style.left="1280px";
        o12.style.left="1600px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===8){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="-320px";
        o6.style.left="-320px";
        o7.style.left="-320px";
        o8.style.left="0px";
        o9.style.left="320px";
        o10.style.left="640px";
        o11.style.left="960px";
        o12.style.left="1280px";
        o13.style.left="1600px";
        o14.style.left="1600px";
    }else if(y===9){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="-320px";
        o6.style.left="-320px";
        o7.style.left="-320px";
        o8.style.left="-320px";
        o9.style.left="0px";
        o10.style.left="320px";
        o11.style.left="640px";
        o12.style.left="960px";
        o13.style.left="1280px";
        o14.style.left="1600px";
    }else if(y===10){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="-320px";
        o6.style.left="-320px";
        o7.style.left="-320px";
        o8.style.left="-320px";
        o9.style.left="-320px";
        o10.style.left="0px";
        o11.style.left="320px";
        o12.style.left="640px";
        o13.style.left="960px";
        o14.style.left="1280px";
    }else if(y===11){
        o1.style.left="-320px";
        o2.style.left="-320px";
        o3.style.left="-320px";
        o4.style.left="-320px";
        o5.style.left="-320px";
        o6.style.left="-320px";
        o7.style.left="-320px";
        o8.style.left="-320px";
        o9.style.left="-320px";
        o10.style.left="-320px";
        o11.style.left="0px";
        o12.style.left="320px";
        o13.style.left="640px";
        o14.style.left="960px";
    }
 }


 let f1=document.querySelector("#f1");
 let f2=document.querySelector("#f2");
 let f3=document.querySelector("#f3");
 let f4=document.querySelector("#f4");
 let f5=document.querySelector("#f5");
 let f6=document.querySelector("#f6");
 let f7=document.querySelector("#f7");
 let f8=document.querySelector("#f8");
 let f9=document.querySelector("#f9");
 let f10=document.querySelector("#f10");
 let f11=document.querySelector("#f11");
 let f12=document.querySelector("#f12");

 let z=1;
 document.querySelector("#labtest1").addEventListener("click",function (){
    if(z===1){
        z=1;
    }else{
        z--;
    }
    testlab(z);
 })
 document.querySelector("#labtest2").addEventListener("click",function (){
    if(z===9){
        z=9;
    }else{
        z++;
    }
    testlab(z);
 })
 function testlab(z){
    if(z===1){
        f1.style.left="0px";
        f2.style.left="320px"
        f3.style.left="640px"
        f4.style.left="960px"
        f5.style.left="1280px"
        f6.style.left="1600px"
        f7.style.left="1600px"
        f8.style.left="1600px"
        f9.style.left="1600px"
        f10.style.left="1600px"
        f11.style.left="1600px"
        f12.style.left="1600px"
    }else if(z===2){
        f1.style.left="-320px";
        f2.style.left="0px"
        f3.style.left="320px"
        f4.style.left="640px"
        f5.style.left="960px"
        f6.style.left="1280px"
        f7.style.left="1600px"
        f8.style.left="1600px"
        f9.style.left="1600px"
        f10.style.left="1600px"
        f11.style.left="1600px"
        f12.style.left="1600px"
    }else if(z===3){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="0px"
        f4.style.left="320px"
        f5.style.left="640px"
        f6.style.left="960px"
        f7.style.left="1280px"
        f8.style.left="1600px"
        f9.style.left="1600px"
        f10.style.left="1600px"
        f11.style.left="1600px"
        f12.style.left="1600px"
    }else if(z===4){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="-320px"
        f4.style.left="0px"
        f5.style.left="320px"
        f6.style.left="640px"
        f7.style.left="960px"
        f8.style.left="1280px"
        f9.style.left="1600px"
        f10.style.left="1600px"
        f11.style.left="1600px"
        f12.style.left="1600px"
    }else if(z===5){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="-320px"
        f4.style.left="-320px"
        f5.style.left="0px"
        f6.style.left="320px"
        f7.style.left="640px"
        f8.style.left="960px"
        f9.style.left="1280px"
        f10.style.left="1600px"
        f11.style.left="1600px"
        f12.style.left="1600px"
    }else if(z===6){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="-320px"
        f4.style.left="-320px"
        f5.style.left="-320px"
        f6.style.left="0px"
        f7.style.left="320px"
        f8.style.left="640px"
        f9.style.left="960px"
        f10.style.left="1280px"
        f11.style.left="1600px"
        f12.style.left="1600px"
    }else if(z===7){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="-320px"
        f4.style.left="-320px"
        f5.style.left="-320px"
        f6.style.left="-320px"
        f7.style.left="0px"
        f8.style.left="320px"
        f9.style.left="640px"
        f10.style.left="960px"
        f11.style.left="1280px"
        f12.style.left="1600px"
    }else if(z===8){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="-320px"
        f4.style.left="-320px"
        f5.style.left="-320px"
        f6.style.left="-320px"
        f7.style.left="-320px"
        f8.style.left="0px"
        f9.style.left="320px"
        f10.style.left="640px"
        f11.style.left="960px"
        f12.style.left="1280px"
    }else if(z===9){
        f1.style.left="-320px";
        f2.style.left="-320px"
        f3.style.left="-320px"
        f4.style.left="-320px"
        f5.style.left="-320px"
        f6.style.left="-320px"
        f7.style.left="-320px"
        f8.style.left="-320px"
        f9.style.left="0px"
        f10.style.left="320px"
        f11.style.left="640px"
        f12.style.left="960px"
    }
 }

 let p1=document.querySelector("#p1");
 let p2=document.querySelector("#p2");
 let p3=document.querySelector("#p3");
 let p4=document.querySelector("#p4");
 let p5=document.querySelector("#p5");
 let p6=document.querySelector("#p6");
 let p7=document.querySelector("#p7");
 let p8=document.querySelector("#p8");
 let p9=document.querySelector("#p9");
 let p10=document.querySelector("#p10");
 let p11=document.querySelector("#p11");
 let p12=document.querySelector("#p12");
 let p13=document.querySelector("#p13");
let m=1;
 document.querySelector("#prod1").addEventListener("click",function (){
    if(m===1){
        m=1;
    }else{
        m--;
    }
    idprod(m)
 })
 document.querySelector("#prod2").addEventListener("click",function (){
    if(m===5){
        m=5;
    }else{
        m++;
    }
    idprod(m)
 })

 function idprod(m){
    if(m===1){
        p1.style.left="0px";
        p2.style.left="166px";
        p3.style.left="332px";
        p4.style.left="498px";
        p5.style.left="664px";
        p6.style.left="830px";
        p7.style.left="996px";
        p8.style.left="1162px";
        p9.style.left="1350px";
        p10.style.left="1350px";
        p11.style.left="1350px";
        p12.style.left="1350px";
        p13.style.left="1350px";
    }else if(m===2){
        p1.style.left="-166px";
        p2.style.left="0px";
        p3.style.left="166px";
        p4.style.left="332px";
        p5.style.left="498px";
        p6.style.left="664px";
        p7.style.left="830px";
        p8.style.left="996px";
        p9.style.left="1162px";
        p10.style.left="1350px";
        p11.style.left="1350px";
        p12.style.left="1350px";
        p13.style.left="1350px";
    }else if(m===3){
        p1.style.left="-166px";
        p2.style.left="-166px";
        p3.style.left="0px";
        p4.style.left="166px";
        p5.style.left="332px";
        p6.style.left="498px";
        p7.style.left="664px";
        p8.style.left="830px";
        p9.style.left="996px";
        p10.style.left="1162px";
        p11.style.left="1350px";
        p12.style.left="1350px";
        p13.style.left="1350px";
    }else if(m===4){
        p1.style.left="-166px";
        p2.style.left="-166px";
        p3.style.left="-166px";
        p4.style.left="0px";
        p5.style.left="166px";
        p6.style.left="332px";
        p7.style.left="498px";
        p8.style.left="664px";
        p9.style.left="830px";
        p10.style.left="996px";
        p11.style.left="1162px";
        p12.style.left="1350px";
        p13.style.left="1350px";
    }else if(m===5){
        p1.style.left="-166px";
        p2.style.left="-166px";
        p3.style.left="-166px";
        p4.style.left="-166px";
        p5.style.left="0px";
        p6.style.left="166px";
        p7.style.left="332px";
        p8.style.left="498px";
        p9.style.left="664px";
        p10.style.left="830px";
        p11.style.left="996px";
        p12.style.left="1162px";
        p13.style.left="1350px";
    }else if(m===6){
        p1.style.left="-166px";
        p2.style.left="-166px";
        p3.style.left="-166px";
        p4.style.left="-166px";
        p5.style.left="-166px";
        p6.style.left="0px";
        p7.style.left="166px";
        p8.style.left="332px";
        p9.style.left="498px";
        p10.style.left="664px";
        p11.style.left="830px";
        p12.style.left="996px";
        p13.style.left="1162px";
    }
 }






