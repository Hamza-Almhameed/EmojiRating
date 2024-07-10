//root.style.setProperty('--main-bg-color', '#e9f1e8');
var range = document.getElementById("ratingInput")
var emoji = document.getElementById("emoji")
var containerr = document.getElementById("container")


range.oninput = function() {
    if(range.value == 0) {
        emoji.innerHTML = "😣"
        document.body.style.backgroundColor = "rgb(255 66 66)"
        containerr.style.boxShadow = "rgb(200 0 0) 0 0 30px"
    }else if(range.value == 1) {
        emoji.innerHTML = "😕"
        document.body.style.backgroundColor = "rgb(241 104 104)"
        containerr.style.boxShadow = "red 0 0 30px"
    }else if(range.value == 2) {
        emoji.innerHTML = "😐"
        document.body.style.backgroundColor = "rgb(207 195 49)"
        containerr.style.boxShadow = "yellow 0 0 30px"
    }else if(range.value == 3) {
        emoji.innerHTML = "😀"
        document.body.style.backgroundColor = "#00955e"
        containerr.style.boxShadow = "#04AA6D 0 0 30px"
    }else if(range.value == 4) {
        emoji.innerHTML = "🤩"
        document.body.style.backgroundColor = "#04d88a"
        containerr.style.boxShadow = "#04AA6D 0 0 30px"
    }
}