function changeColor(){
    let div = document.getElementById("child");
    let img = document.getElementById("img");
    let currentColor = document.getElementById("child").style.background;
    if(currentColor == "white")
    {
        document.getElementById("child").style.background = "lightgreen";
    }
    else if(currentColor == "lightgreen")
    {
        document.getElementById("child").style.background = "blue";
    }
    else
    {
        document.getElementById("child").style.background = "white";
    }
}