let lang;
let enBTN;
let nlBTN;

getCookie();

if(document.title == "router"){
    if(getCookie == null){
        setCookie("nl");
        routeVisitor();
    } else {
        routeVisitor();
    }
}

function getCookie(){
    let cookie = document.cookie.split("=");
    lang = cookie[1];
}

function setCookie(lang){
    document.cookie = `lang=${lang}; expires=2025 12:00:00 UTC; path=/`;
}

function routeVisitor(){
    if(lang == "nl"){
        location.href = "/nl/home.html";
    } else if(lang == "en"){
        location.href = "/en/home.html";
    }
}

function getPath(){
    let path = location.pathname.split("/");
    return path[1];
}


if(getPath() == "nl"){
    enBTN = document.getElementById("enBTN");

    enBTN.addEventListener("click", () => {
        setCookie("en");
        console.log("click");
        location.href = "../en/home.html";
    })
} else if(getPath() == "en"){
    nlBTN = document.getElementById("nlBTN");

    nlBTN.addEventListener("click", () => {
        setCookie("nl");
        location.href = "../nl/home.html";
    })
}



