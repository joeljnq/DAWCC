


if (!sessionStorage.getItem("visited")) {
    let language = prompt("elije el idioma");
    let theme = prompt("elije tu tema");
    let user = "usuario=" + prompt("dime tu usuario");
    let preference = prompt("dime tu preferencia")
    let lastVisit = "ultima_visita=" + new Date().toLocaleString();
    console.log(document.cookie);
    document.cookie = user
    document.cookie = lastVisit

    setCookie("idioma", language, 10);
    setCookie("tema", theme, 10);
    setCookie("preferencia", preference, 10);


    // Marcar la página como visitada en sessionStorage
    sessionStorage.setItem("visited", "true");

}else{
borrarCookie("usuario");
borrarCookie("ultima_visita");

}
function setCookie(name, value, seconds) {
    let expire_date = new Date();
    expire_date.setTime(expire_date.getTime() + (seconds * 1000));

    let expire = "expires=" + expire_date.toUTCString();
    document.cookie = name + "=" + value + ";" + expire + ";path=/";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

setInterval(() => {
 
    console.log(document.cookie);
}, 2000);

