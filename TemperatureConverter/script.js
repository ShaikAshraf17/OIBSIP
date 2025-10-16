function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("tempUnit").value;
    let result = "";

    if(temp === "") {
        alert("Please enter a temperature!");
        return;
    }

    temp = parseFloat(temp);

    if(unit === "celsius") {
        result = (temp * 9/5 + 32).toFixed(2) + " °F";
    } else {
        result = ((temp - 32) * 5/9).toFixed(2) + " °C";
    }

    document.getElementById("result").innerText = result;
}
