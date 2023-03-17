function register(event) {
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userNumber = document.getElementById("userNumber").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword, number: userNumber }

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, "dataFromLS")
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].Email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert('email alredy present, use another email')
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail < 1) {
        alert('must fill all fields!')
    } else if (userPassword.length < 8) {
        alert('Password must be more than 8 digit!')
    } else {
        dataFromLS.push(userData);
        localStorage.setItem('userData', JSON.stringify(dataFromLS));
        document.getElementById("userName").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';
        window.location.href = './login.html';
        alert('Registration Done.');


    }

}

function login(event) {
    event.preventDefault();
    // alert("working")

    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userData"));

    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword) {
            flag = true;
        }
    } if (flag === true) {
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';

        alert("You are logged in successfully!")
        var currentUser = {};
        currentUser["current-user-email"] = userEmail;
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        window.location.href = "./index.html"

    } else {
        alert("Please use correct credentials!")
    }

}


 







