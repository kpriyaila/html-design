function oncartClicked(element){
    console.log("Element clicked", element)
    alert("Your cart is empty");
}

function onacceptClicked(element){
    console.log("element clicked", element);
    document.getElementById("pop-up").style.display = "none";
}