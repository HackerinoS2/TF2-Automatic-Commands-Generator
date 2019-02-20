function autopricer(){
    document.getElementById("inputPrice").style.display = "block";
    document.getElementById("buttonAutopricer").innerHTML = "Enable Autopricer";
    document.getElementById("buttonAutopricer").onclick = enableAutopricer;
}

function enableAutopricer(){
    document.getElementById("inputPrice").style.display = "none";
    document.getElementById("buttonAutopricer").innerHTML = "Disable Autopricer";
    document.getElementById("buttonAutopricer").onclick = autopricer;
}