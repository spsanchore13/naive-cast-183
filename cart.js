let data = JSON.parse(localStorage.getItem("cartData")) || [];
let addToFav = JSON.parse(localStorage.getItem("favDataArray")) || [];

displayCart(data);
displayFav(addToFav);

function displayCart(data) {
  document.getElementById("cart_content").innerHTML = "";
  let mrp = 0;
  let offerDiscount = 0;
  data.forEach(function (ele, index) {
    // inside function
    let actualPrice = ele.price - ele.price * 0.2;
    actualPrice = Math.floor(actualPrice);
    let saved = ele.price - actualPrice;
    mrp += ele.price;
    offerDiscount += saved;
    // adding cart in html
    let cartDiv = document.createElement("div");
    cartDiv.setAttribute("class", "cart_div");
    cartDiv.innerHTML += ` <div>
    <div>
        <img src="${ele.image}" alt="">
    </div>
    <div>
        <h3>${ele.productName}</h3>
        <p>${ele.categories}</p>
        <p><span class ="span1"> ${ele.price}  ₹ </span><span class ="span2"> ${actualPrice} ₹ </span><span class="span3"> ${saved} ₹ saved</span></p>

        <p>ProductId : ${ele.Productid}</p>
    </div>
    </div>
    <h2><p class="delsym"><i class="fa-solid fa-blinds"></i></p><span class="delevery" style="font-weight:normal;">Delivery in   </span> <span> Enter pincode above</span><span class="qty">Qty:1</span></h2> `;
    let delRem_div = document.createElement("div");
    let remove = document.createElement("h5");
    remove.innerText = "Remove";
    // adding event listner for remove button
    remove.addEventListener("click", function () {
      removeFromCart(index);
    });

    let mtf = document.createElement("h5");
    mtf.innerText = "Move to favourite";
    // adding event listner for move to favourite element;
    mtf.addEventListener("click", function () {
      moveToFavourite(ele, index);
    });
    delRem_div.append(remove, mtf);
    cartDiv.append(delRem_div);
    document.getElementById("cart_content").append(cartDiv);
  });
  // showing total number of cart
  document.getElementById("cart_quantity").innerText =
    data.length + " " + " products ";
  displayPrices(mrp, offerDiscount);
}

// --------------display total price and total discount-------------
function displayPrices(total, discount) {
  let mrp = document.querySelector(".total_price");
  mrp.innerText = total;
  let dis = document.querySelector(".total_discount");
  dis.innerText = discount;
  document.querySelector(".total_payment").innerText = total - discount;
}

// --------------- removing functionalities -----------------

function removeFromCart(index) {
  console.log(index);
  data.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(data));
  displayCart(data);
}

// -------------- move to favourite functionalities ----------------
// let addToFav = JSON.parse(localStorage.getItem('favDataArray')) || [];
function moveToFavourite(element, index) {
  // console.log(element);
  addToFav.push(element);
  localStorage.setItem("favDataArray", JSON.stringify(addToFav));
  data.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(data));
  displayCart(data);
  displayFav(addToFav);
}

// --------displaying cart on favourite section------------------
function displayFav(addToFav) {
  document.querySelector(".fav_item_main_container").innerHTML = "";

  let main = document.createElement("div");
  // main.innerHTML =""
  // main.innerText ="hi"
  main.setAttribute("class", "fav_main");

  addToFav.forEach(function (ele, index) {
    let actualPrice = ele.price - ele.price * 0.2;
    actualPrice = Math.floor(actualPrice);
    let saved = ele.price - actualPrice;

    let fav_div = document.createElement("div");
    fav_div.setAttribute("class", "fav_div_container");
    fav_div.innerHTML += `<div>
    <img class="fav_img_div" src="${ele.image}" alt="">
    </div>
    <div>
    <p><span class ="span1"> ${ele.price}  ₹ </span><span class ="span2"> ${actualPrice} ₹ </span></p>
        <p class ="product_name">${ele.productName}</p>
    </div>`;
    let btn = document.createElement("button");
    btn.innerText = "Add to basket";
    btn.setAttribute("class", "fav_btn");
    btn.addEventListener("click", function () {
      moveFavToCart(ele, index);
    });
    fav_div.append(btn);
    main.append(fav_div);
    document.querySelector(".fav_item_main_container").append(main);
  });
}

// for sending cart favourite to bucket again
function moveFavToCart(ele, index) {
  data.push(ele);
  localStorage.setItem("cartData", JSON.stringify(data));
  displayCart(data);
  addToFav.splice(index, 1);
  localStorage.setItem("favDataArray", JSON.stringify(addToFav));
  displayFav(addToFav);
}

// -------------------promo-section --------------------

// let promoSel =document.getElementById('promoSelect');
// promoSel.addEventListener('click',fun);
// function fun(){

//     let x =document.querySelector('.total_payment');
//     console.log(x.innerText);
// }

let promocode = document.getElementById("promocode");
let appPromo_btn = document.getElementById("applyPromocode");
appPromo_btn.addEventListener("click", evalPromo);
function evalPromo(event) {
  // console.log('hi');
  let val = promocode.value;
  let tot_pay = document.querySelector(".total_payment").innerText;
  tot_pay = Number(tot_pay);
  let fin_pay;
  let flag = true;
  if (val === "FIRST50") {
    fin_pay = tot_pay * 0.5;
    alert("promocode applied successfully");
  } else if (val === "SUPER10") {
    fin_pay = tot_pay * 0.1;
    alert("promocode applied successfully");
  } else {
    fin_pay = tot_pay;
    alert("Either prmocode expire or invalid");
    flag = false;
  }
  // console.log(fin_pay)
  document.getElementById("okey_btn").addEventListener("click", function () {
    final_promo_func(fin_pay);
  });
}

// --------finalPromo function---------
function final_promo_func(fin_pay) {
  document.querySelector(".total_payment").innerText = fin_pay;
  let promo_cont = document.querySelector(".promo_container");
  promo_cont.style.display = "none";
  let cart_container = document.querySelector(".main_container");
  cart_container.style.opacity = "1";
}

// -----helper of promo section-----
let promoCli = document.getElementById("promoSelect");
promoCli.addEventListener("click", function () {
  let promo_cont = document.querySelector(".promo_container");
  promo_cont.style.display = "block";
  let cart_container = document.querySelector(".main_container");
  cart_container.style.opacity = ".3";
});

let cutPromo = document.getElementById("cutButton");
cutPromo.addEventListener("click", function () {
  let promo_cont = document.querySelector(".promo_container");
  promo_cont.style.display = "none";
  let cart_container = document.querySelector(".main_container");
  cart_container.style.opacity = "1";
});

// ---------add event listner to checkout page---------

let checkout_btn = document.querySelector(".checkout");
checkout_btn.addEventListener("click", goToPaymentPage);
function goToPaymentPage() {
  let final_payment = document.querySelector(".total_payment").innerText;
  localStorage.setItem("total_payment", final_payment);
  window.location.href = "payments.html";
}
