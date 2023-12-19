data = [
    { loginemail: "xachaturyan1998@gimail", Password: "a" },
    { loginemail: "arman1998", Password: "123arman123" },
    { loginemail: "lavara", Password: "lavalinelu" },
    { loginemail: "a", Password: "a" }

]

function loginPasswordGO() {
    let loginemail = document.querySelector("#loginemail").value;
    let password = document.querySelector("#passwordInput").value;
    let filterData = filterLoginPassword(loginemail, password);
    console.log("OKK")
    console.log("Filterdata", filterData);
    console.log(data)

}
console.log(loginPasswordGO())

function filterLoginPassword(loginemail, password) {
    const filterdata = data.filter(data => data.loginemail === loginemail && data.password === password)
    if (filterdata.length > 0) {
        console.log("yes")
    } else {
        loginEror()
    }



}

function loginEror() {
    let Password = document.querySelector("#passwordInput")
    let Email = document.querySelector("#loginemail")

    if (Email.value === "") {
        Email.placeholder = "Plise enter Login"

        console.log("noo")

    } else if (Password.value === "") {
        Password.placeholder = "Plise enter Password"
    } else {
        console.log(data)
    }
}

function validateEmail() {

    let Email = document.querySelector("#loginemail").value
    let text = document.querySelector("#text")
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


    if (Email.match(pattern)) {
        text.innerHTML = "Your Email Address is Valid"
        text.style.color = "darkgreen"
    } else {
        text.innerHTML = "Please Enter Valid Email Address"
        text.style.color = "darkred"

    }
}