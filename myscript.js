function changeLine(x) {
    x.classList.toggle("change");
    if (x.classList.contains("change")) {
        document.getElementById("topnav").classList.add("mob");
    } else {
        document.getElementById("topnav").classList.remove("mob");
    }
}

function active(x) {
    var i, link;
    link = document.getElementsByTagName("a");
    for (i = 0; i < link.length; i++) {
        link[i].classList.remove("active");
    }
    x.classList.toggle("active");
}