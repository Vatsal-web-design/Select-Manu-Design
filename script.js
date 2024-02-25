var m = document.getElementById("m1")
var r = document.getElementById("r1")

document.getElementById("selecttext").addEventListener("click", (e) => {
    m.classList.toggle("m2")
    r.classList.toggle("rotate")
})

document.querySelector(".f").addEventListener("click", (e) => {
    document.getElementById("selecttext").innerHTML = "Facbook";
    m.classList.toggle("m2")
    r.classList.toggle("rotate")



})
document.querySelector(".i").addEventListener("click", (e) => {
    document.getElementById("selecttext").innerHTML = "Instagram";
    m.classList.toggle("m2")
    r.classList.toggle("rotate")



})
document.querySelector(".y").addEventListener("click", (e) => {
    document.getElementById("selecttext").innerHTML = "Youtube";
    m.classList.toggle("m2")
    r.classList.toggle("rotate")



})
document.querySelector(".t").addEventListener("click", (e) => {
    document.getElementById("selecttext").innerHTML = "Twitter";
    m.classList.toggle("m2")
    r.classList.toggle("rotate")

})

