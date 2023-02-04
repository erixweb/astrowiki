// LocalStorage
const useLocal = localStorage

const totalArticles = document.querySelectorAll(".link-card").length

if (typeof useLocal.read === "undefined") {
    useLocal.setItem("read", "")
}

document.querySelectorAll(".link-card").forEach(el => {
    el.addEventListener("click", (e) => {
        const name = el.querySelector("h2").innerText
        if (useLocal.read.indexOf(name) === -1 && !name.includes("Leído")) {
            useLocal.setItem("read", useLocal.read + ", "+ name)
            el.querySelector("h2").innerHTML = el.querySelector("h2").innerHTML + "Leído"
        }
        document.querySelector(".leido-count").innerHTML = useLocal.read.split(",").length - 1
    })

    if (useLocal.read.indexOf(el.querySelector("h2").innerText) !== -1) {
        el.querySelector("h2").innerHTML = el.querySelector("h2").innerHTML + "Leído"
    }
})
document.querySelector(".leido-count").innerHTML = useLocal.read.split(",").length - 1
document.querySelector(".leido-total").innerHTML = totalArticles