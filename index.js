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

 let homeprod=[
    {
      titel:"Sirona Feminine Cramp Relief Patch Packet Of 5 'S",
  sprice:"₹224",
  mrp:"₹249",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/164721/sugar-free-gold-sweetener-tablets-strip-of-500-2-1654078766.jpg?dim=224x0&dpr=1.25&q=100"
  },
      {
        titel:"Liveasy Wellness Apple Cider Vinegar With Mother -Improves Metabolism- 500ml Bottle",
  sprice:"₹226",
  mrp:"₹649",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1654165611.jpg?dim=320x320&dpr=1&q=100"
   },
   {
    titel:"Revital H Women Multivitamin With Calcium, Zinc, Ginseng For Immunity, Strong Bones & Energy 30 Tablets",
  sprice:"₹345",
  mrp:"₹239",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-1-1654168794.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Volini Pain Relief Gel Tube Of 75 G",
  sprice:"₹245",
  mrp:"₹208",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1654078754.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Evion 400mg Strip Of 10 Capsules",
  sprice:"₹32",
  mrp:"₹35",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Livogen Z Captab 15'S",
  sprice:"₹71",
  mrp:"₹79",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/I32380/livogen-z-captab-15s-2-1656662098.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Pharmeasy Diabetic & Orthopedic Men Sandals (Fahion Range-3) Brown Color, Size 10",
  sprice:"₹1049",
  mrp:"1399",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/N15573/pharmeasy-diabetic-orthopedic-men-sandals-fahion-range-3-brown-color-size-10-1-1647418991.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Everyuth Naturals Anti Acne Anti Marks Tulsi Turmeric Face Wash 150 Gm",
  sprice:"₹97",
  mrp:"₹150",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/I10543/everyuth-naturals-anti-acne-anti-marks-tulsi-turmeric-face-wash-150-gm-2-1641787744.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Saffola Fittify Original Peanut Butter With Omega-3 Super Creamy 340g Jar",
  sprice:"₹138",
  mrp:"₹220",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/O01875/saffola-fittify-original-peanut-butter-with-omega-3-super-creamy-340g-jar-2-1647515308.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Polybion Czs Tablet 15'S",
  sprice:"₹82",
  mrp:"₹92",
  imgurl:"https://cdn01.pharmeasy.in/dam/products/196208/polybion-czs-tablet-15s-1-1641532585.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Sevenseas Original Capsule 100`S",
  sprice:"₹319",
  mrp:"₹287",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/227623/sevenseas-original-capsule-100s-2-1656662108.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Neurobion Forte Tablet 30'S",
  sprice:"₹31",
  mrp:"₹34",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Sugar Free Gold Sweetener Tablets Strip Of 500",
  sprice:"₹256",
  mrp:"₹285",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/164721/sugar-free-gold-sweetener-tablets-strip-of-500-2-1654078766.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Saffola Fittify Whey Protein Peanut Butter Dark Chocolaty Super Creamy 200g Jar",
  sprice:"₹125",
  mrp:"₹199",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/S50183/saffola-fittify-whey-protein-peanut-butter-dark-chocolaty-super-creamy-200g-jar-2-1647515150.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Abzorb Antifungal Dusting Powder 100gm",
  sprice:"₹120",
  mrp:"₹142",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/S50183/saffola-fittify-whey-protein-peanut-butter-dark-chocolaty-super-creamy-200g-jar-2-1647515150.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Baidyanath Chyawanprash Special - Immunity & Omniprotection | 52 Ayurvedic Ingredients - 950g  ",
  sprice:"₹261",
  mrp:"₹349",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/I41645/baidyanath-chyawanprash-special-immunity-omniprotection-52-ayurvedic-ingredients-950g-2-1654165857.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Everherb (By Pharmeasy) Amla Juice-Rich In Vitamin C-Natural Immunity Booster - 1 Litre Bottle  ",
  sprice:"₹299",
  mrp:"₹399",
  imgurl:"https://cdn01.pharmeasy.in/dam/products_otc/D92359/everherb-by-pharmeasy-amla-juice-rich-in-vitamin-c-natural-immunity-booster-1-litre-bottle-2-1654169607.jpg?dim=320x320&dpr=1&q=100"
  },
  {
    titel:"Crocin 650mg Advance Tablets 15'S  ",
  sprice:"₹26",
  mrp:"₹30",
  imgurl:"https://cdn01.pharmeasy.in/dam/products/I43006/crocin-650mg-advance-tab-15s-2-1641538269.jpg?dim=320x320&dpr=1&q=100"
  }
  ]
  
  let xxx=document.querySelector("#prodxx");
  
  
  homeprod.forEach(function(ele,ind){
  
    let div=document.createElement("div");
    div.setAttribute("class","arya_data")
    
  
    let img=document.createElement("img");
    img.setAttribute("class","arya_pic")
    img.src=ele.imgurl;
  
    let h4=document.createElement("h4");
    h4.innerText=ele.titel;
    h4.style.color="#596267"
  
    // let div2=document.createElement("div");
    // div2.setAttribute("class","arya_data2")
    
  
  
    let p=document.createElement("p");
    p.innerHTML=`MRP :<s>${ele.mrp}</s>`
    p.style.color="#b8c1c8"
    p.style.marginTop="0px"
  
    let b=document.createElement("b");
    b.innerText=ele.sprice;
    b.style.marginTop="20px"
    // div2.append(p,b)
    div.append(img,h4,p,b);
    xxx.append(div)
  })
  let proo=document.querySelector("#prodxx");
  let s=1;
  document.querySelector("#dls1").addEventListener("click",function (){
       if(s===1){
        s=1;
       }else{
        s--;
       }
       console.log(s)
      ddddl(s)
 })
 document.querySelector("#dls2").addEventListener("click",function (){
    if(s===13){
        s=13;
       }else{
        s++;
       }
      ddddl(s)
 })
 function ddddl(s){
      if(s===1){
       proo.style.left="0px";
      }else if(s===2){
        proo.style.left="-224px";
      }
      else if(s===3){
        proo.style.left="-448px";
      }
      else if(s===4){
        proo.style.left="-672px";
      }
      else if(s===5){
        proo.style.left="-896px";
      }
      else if(s===6){
        proo.style.left="-1120px";
      }
      else if(s===7){
        proo.style.left="-1344px";
      }
      else if(s===8){
        proo.style.left="-1568px";
      }
      else if(s===9){
        proo.style.left="-1792px";
      }
      else if(s===10){
        proo.style.left="-2016px";
      }
      else if(s===11){
        proo.style.left="-2240px";
      }
      else if(s===12){
        proo.style.left="-2464px";
      }
      else if(s===13){
        proo.style.left="-3000px";
      }

 }

let bloooog=document.querySelector("#blogsimg");
 let g=1;
 document.querySelector("#negetive").addEventListener("click",function(){
  if(g===1){
    g=1;
  }else{
    g--;
  }
  london(g)
  
 })
 document.querySelector("#positive").addEventListener("click",function(){
  if(g===6){
    g=6;
  }else{
    g++;
  }
  london(g)
 })

 function london(g){
  if(g===1){
    bloooog.style.left="0px";
  }else if(g===2){
    bloooog.style.left="-460px";
  }else if(g===3){
    bloooog.style.left="-920px";
  }else if(g===4){
    bloooog.style.left="-1380px";
  }else if(g===5){
    bloooog.style.left="-1840px";
  }else if(g===6){
    bloooog.style.left="-2300px";
  }
 }





let feed=document.querySelector("#feedimg");
 let h=1;
 document.querySelector("#sis").addEventListener("click",function(){
  if(h===1){
    h=1;
  }else{
    h--;
  }
  tokio(h)
 })
 document.querySelector("#bro").addEventListener("click",function(){
  if(h===7){
    h=1;
  }else{
    h++;
  }
  tokio(h)
 })

 function  tokio(h){
  if(h===1){
    feed.style.left="0px";
  }else if(h===2){
    feed.style.left="-340px";
  }else if(h===3){
    feed.style.left="-680px";
  }else if(h===4){
    feed.style.left="-1010px";
  }else if(h===5){
    feed.style.left="-1340px";
  }else if(h===6){
    feed.style.left="-1680px";
  }else if(h===7){
    feed.style.left="-2010px";
  }
}

  setInterval(function(){
    if(h===7){
      h=1;
    }else{
      h++;
    }
    tokio(h)
   },3000)
 













 


  
  






