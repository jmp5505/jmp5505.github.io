
function show(x, y) {
    if (y == 1) {
        document.getElementById("show").innerHTML = "<img id=\"image\" src=\"" + x.toString() + ".png\">";
    }
    if (x != -1) {
        document.getElementById(x.toString()).style = "background-color: rgb(209, 166, 240); color: #501a79;";
    }
    else {
        document.getElementById("show").innerHTML = "<img id=\"image\" src=\"0.gif\">";
    }    
}    
function unshow(x, y) {
    if (y == 1) {
        document.getElementById("show").innerHTML = "<img id=\"image\" src=\"" + "0" + ".png\">";
    }
    document.getElementById(x.toString()).style = "text-decoration: none";
    
}