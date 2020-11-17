function darkmode() {
	// change black - white
    var app = document.getElementsByTagName("body")[0];
    if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("data-light-mode", "light");
    } else {
    localStorage.lightMode = "dark";
    app.setAttribute("data-light-mode", "dark");
    }
	// change text in button
	var text = document.getElementById("blackWhite");
	if (localStorage.lightModeButton == "dark") {
	localStorage.lightModeButton = "light";
	text.innerHTML = "Change to dark mode &#9214;";
    } else {
    localStorage.lightModeButton = "dark";
	text.innerHTML = "Change to light mode &#9788;";
    }
}



var app = document.getElementsByTagName("body")[0];
var text = document.getElementById("blackWhite");
        if (localStorage.lightMode == "dark") {
            app.setAttribute("data-light-mode", "dark");
        }
		if (localStorage.lightModeButton == "dark") {
			text.innerHTML = "Change to light mode &#9788;";
		}
		else{
			text.innerHTML = "Change to dark mode &#9214;";
		}
		
var textEnlarge = document.getElementById("zoom");
		if (localStorage.changeSize == "big"){
			app.style.fontSize = "150%";
			textEnlarge.innerHTML = "Decrease font size &#128269; ";
		}
		else {
			textEnlarge.innerHTML = "Increase font size &#128269; ";
		}
var simplePage = document.getElementById("color")
		if(localStorage.page == "simple"){
			sheet.setAttribute("href", "")
			simplePage.innerHTML = "Change to complex page &#9635;"
		} else{
			simplePage.innerHTML = "Change to simple page &#9635;"
		}
		
		
		
		
function enlarge(){
	var app = document.getElementsByTagName("body")[0];
		var text = document.getElementById("zoom");
	if (localStorage.changeSize == "big") {
		localStorage.changeSize = "small";
		app.style.fontSize = "100%";
		text.innerHTML = "Increase font size &#128269; ";
	} else {
		localStorage.changeSize = "big";
		app.style.fontSize = "150%";
		text.innerHTML = "Decrease font size &#128269; ";
	}
	
}

function simple(){
	var text = document.getElementById("color")
	var sheet = document.getElementById("style")
	if (localStorage.page == "simple") {
		localStorage.page = "complex"
		sheet.setAttribute("href", "")
		text.innerHTML = "Change to complex page &#9635;"
	} else {
		localStorage.page = "simple"
		sheet.setAttribute("href","style.css")
		text.innerHTML = "Change to simple page &#9635;"
	}
}