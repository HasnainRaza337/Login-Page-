let orignalString = "1) Faisalabad  2) Lahore  3) Karachi  4) Islamabad  5) Burewala  6) Sheikhupura  7) Kashmir"
document.getElementById("orignalstring").innerHTML = orignalString;
// Array
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]



// print All Citie
function printAllCities() {
    document.getElementById("output").innerHTML = "";

    for (i = 0; i < cities.length; i++) {
        let num = i + 1
        document.getElementById("output").innerHTML += num + ")" + cities[i] + "<br />"

    }
}

// Add your Cities in the List
function addCityInList() {
    let city = document.getElementById("inputgroup").value;

    if (city.length < 3) {
        Toastify({
            text: "Please type your city name correctly.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            // onClick: function(){} // Callback after click
        }).showToast();
        return;
    }

    let cityFirstletter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityInCapitalize = cityFirstletter + cityAllLetters;

    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === cityInCapitalize) {
            cityFound = true;
            document.getElementById("output").innerHTML = "<span style='color:red; font-weight:bold; font-size:20px;'>'" + cityInCapitalize + "'</span> is already in list.";

        }
    }
    if (cityFound === false) {

        cities.push(cityInCapitalize);
        document.getElementById("output").innerHTML = "<span style='color:green; font-weight:bold; font-size:20px;'>'" + cityInCapitalize + "'</span> has been succesfully added into list.";

    }

}

// Check Your city in the List

function checkCityInList() {
    let city = document.getElementById("inputgroup").value;

    if (city.length < 3) {
        Toastify({
            text: "Please type your city name correctly.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            // onClick: function(){} // Callback after click
        }).showToast();
        return;
    }

    let cityFirstletter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityInCapitalize = cityFirstletter + cityAllLetters;

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === cityInCapitalize) {
            cityFound = true;
            document.getElementById("output").innerHTML = "<span style='color:red; font-weight:bold; font-size:20px;'>'" + cityInCapitalize + "'</span> found in the list. &#128151";

        }
    }
    if (cityFound === false) {

        // cities.push(cityInCapitalize);
        document.getElementById("output").innerHTML = "Sorry &#128524; We couldn't find your city <span style='color:green; font-weight:bold; font-size:20px;'>'" + cityInCapitalize + "'</span> in list.";

    }
}


// clea input text
document.getElementById("clearInput").onclick = function () {
    document.getElementById("inputgroup").value = " ";
}
// clear output box
document.getElementById("clearoutputbutton").onclick = function () {
    document.getElementById("output").innerHTML = "";
}

window.onload = function(){ 
    let userName = prompt("Enter you name")

    document.getElementById("userName").innerText = "Good day" +" "+ userName +"!";
}