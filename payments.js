document.querySelector("#paynow>button").addEventListener("click", payFunction);
function payFunction() {
  let name = document.querySelector("#name").value;
  let mobile = document.querySelector("#mobile").value;
  let pincode = document.querySelector("#pincode").value;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let street = document.querySelector("#street").value;
  let landmark = document.querySelector("#landmark").value;

  let billObj = {
    customerName: name,
    customerMobile: mobile,
    customerPincode: pincode,
    customerCity: city,
    customerState: state,
    customerStreet: street,
    customerLandmark: landmark,
  };

  localStorage.setItem("customerData", JSON.stringify(billObj));
}

document
  .querySelector("#exp+button")
  .addEventListener("click", saveCardFunction);
let saveCardArr = JSON.parse(localStorage.getItem("cardData")) || [];
function saveCardFunction() {
  alert("Card saved");

  let card = document.querySelector("#card").value;
  let exp = document.querySelector("#expiryDate").value;
  let cvv = document.querySelector("#expiryDate+input").value;
  let saveCardObj = {
    cardNumber: card,
    expiry: exp,
    CVV: cvv,
  };
  saveCardArr.push(saveCardObj);
  localStorage.setItem("cardData", JSON.stringify(saveCardArr));
}
document.querySelector("#select").addEventListener("change", upi);

function upi() {
  if (document.querySelector("#select").value == "upi") {
    document.querySelector(
      "select+div"
    ).innerHTML = `<button><a href="https://teal-raindrop-50f4c3.netlify.app/">SCAN QR CODE</a></button>`;
  }
}
