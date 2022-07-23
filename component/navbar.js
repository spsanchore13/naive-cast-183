let navbar = () => {
    return `<div id="topbar">
    <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="pharmeasy.in">
    <p>Select Pincode
        <ion-icon name="chevron-down-outline"></ion-icon>
    </p>
    <div id="container">
    <div id="searchBox">
        <input type="text" placeholder="Search Medicines/Healthcare Products" id="search">
        <ion-icon name="search-outline" class="search-icon"></ion-icon>
    </div>
    <div id="suggestion"></div>
    </div>
    <div id="log-out">
    <ion-icon name="person-outline"></ion-icon>
    </div>
</div>

<div id="bottombar">
    <div>
        <p>
            <a href="./order_online_sec/OM.html">Order Medicines</a>
        </p>
        <p>
            <a href="./gpu_3_category/cetogary.html">Healthcare Products</a>
        </p>
        <p>
            <a href="./gpu_3_lab_test/lab_test.html">Lab Tests</a>
        </p>
        <p>
            <a href="">RTPCR</a>
        </p>
    </div>
    <div id="user-options">
        <p class="open-btn">
            <ion-icon name="person-outline"></ion-icon>
            Log in
        </p>

        <div class="form-popup" id="myForm">
            <form class="login-form">
                <div class="form-top">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0" alt="">
                    <ion-icon name="close-outline" class="close"></ion-icon>
                </div>

                <div>
                    <h1>Login</h1>

                    <input type="text" placeholder="Username" id="username" required>
                    <input type="password" placeholder="Password" id="password" required>

                    <button type="submit" class="btn">Login</button>
                </div>

            </form>
        </div>

        <p class="open-btn-signup">
            <ion-icon name="person-outline"></ion-icon>
            Sign Up
        </p>

        <div class="form-popup-signup" id="signUp">
            <form class="signup-form">
                <div class="signup-form-top">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0" alt="">
                    <ion-icon name="close-outline" class="close-btn-signup"></ion-icon>
                </div>

                <div>
                    <h1>Sign Up</h1>
                    <input type="text" id="signup_name" placeholder="Name">
                    <input type="email" placeholder="Email" id="signup_email">
                    <input type="number" id="signup_mobile" placeholder="Mobile">
                    <input type="text" id="signup_username" placeholder="Username">
                    <input type="password" placeholder="Password" id="signup_password">
                    <input type="text" id="signup_description" placeholder="Description">
                    <button type="submit" class="btn-signup">Sign Up</button>
                </div>

            </form>
        </div>


        <p><a href="">
                <ion-icon name="flower-outline"></ion-icon>
                Offers
            </a></p>
        <p id="cart">
                <ion-icon name="cart-outline"></ion-icon>
                Cart
            </p>
    </div>
</div>`
}

export default navbar;