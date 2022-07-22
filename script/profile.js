let user = JSON.parse(localStorage.getItem("user")) || {};

let append = (user) => {
    let { name, email, mobile, username, description } = user;
    console.log(name, email, mobile, username, description)
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("mobile").value = mobile;
    document.getElementById("userName").innerText = name;
}
append(user);