import navbar from "../component/navbar.js";

document.querySelector('#navbar').innerHTML = navbar();

document.querySelector(".open-btn").addEventListener("click", openForm)
document.querySelector(".close").addEventListener("click", closeForm)
document.querySelector(".open-btn-signup").addEventListener("click", openFormSignUp)
document.querySelector(".close-btn-signup").addEventListener("click", closeFormSignUp)


//Login Form Function
function openForm() {
    // document.getElementById("myForm").style.right = "0px"
    document.getElementById("myForm").style.display = "block";

}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Sign Form Function
function openFormSignUp() {
    document.getElementById("signUp").style.display = "block";
}

function closeFormSignUp() {
    document.getElementById("signUp").style.display = "none";
}

let suggestion = () => {
    let res = document.querySelector("#suggestion");
    let p = document.createElement("p");
    pp.innerText = "Patliya"
    res.append(p, p1)
}


let submit_query = () => {
    let q = document.querySelector("#search").value;
    console.log('q:', q)
}
document.querySelector(".search-icon").addEventListener("click", submit_query);


document.querySelector(".btn-signup").addEventListener("click", userData);

async function userData(event) {
    event.preventDefault();
    let name = document.querySelector("#signup_name").value;
    let email = document.querySelector("#signup_email").value;
    let mobile = document.querySelector("#signup_mobile").value;
    let username = document.querySelector("#signup_username").value;
    let password = document.querySelector("#signup_password").value;
    let description = document.querySelector("#signup_description").value;
    let obj = { name, email, mobile, username, password, description }
    let data = JSON.stringify(obj);

    let response = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        },
    });

    let res = await response.json();
    alert(res.message)
};

document.querySelector(".btn").addEventListener("click", login)
async function login(event) {
    event.preventDefault()
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let obj = { username, password }

    obj = JSON.stringify(obj)

    let response = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: obj,
        headers: {
            "Content-Type": "application/json"
        },
    });

    let res = await response.json();

    if (res.error) {
        alert(res.message)
    } else {
        alert("Login Successfull")
        getUserDetail(username, res.token)
        localStorage.setItem("system", "online")
        // window.location.reload();
    }
}

let getUserDetail = async (username, token) => {
    let url = `https://masai-api-mocker.herokuapp.com/user/${username}`
    let response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    let data = await response.json();
    localStorage.setItem("user", JSON.stringify(data))
}