"use strict"

window.addEventListener("load", () => {
    const url = document.getElementById("url");
    const btn = document.getElementById("go");

    const res = document.getElementById("result");

    btn.addEventListener("click", () => {
        fetch("/check/" + url.value, {
            method: "post"
        })
        .then(result => result.json())
        .then(uri => res.innerText = uri);
    });
});
