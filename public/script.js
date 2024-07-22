const useLocal = localStorage
/*
Themes
*/
const setToDark = () => {
	useLocal.setItem("theme", "dark")
	document.documentElement.style.setProperty("--bg-color", "#161517")
	document.documentElement.style.setProperty("--color", "#fff")
	document.documentElement.style.setProperty("--card-bg", "#49494d")
	document.documentElement.style.setProperty("--card-h", "#fff")
	document.documentElement.style.setProperty("--card-p", "#fff")
	document.documentElement.style.setProperty("--card-focus", "#38b7ff")
	/*
	document.querySelector(".dark").style.display = "none"
	document.querySelector(".light").style.display = "block"
    */
}

const setToLight = () => {
	useLocal.setItem("theme", "light")
	location.reload()
}
if (typeof useLocal.theme == "undefined") {
	useLocal.setItem("theme", "light")
}

if (useLocal.theme == "dark") {
	setToDark()
}

// Articles

window.addEventListener("load", () => {
	/*
    if (location.pathname === "/") {
        document.querySelector(".themes").addEventListener("click", () => {
            if (useLocal.theme === "dark") {
                setToLight()
            } else {
                setToDark()
            }
        })
    }
		*/
	if (location.pathname === "/") {
		const totalArticles = document.querySelectorAll(".link-card").length

		if (typeof useLocal.read === "undefined") {
			useLocal.setItem("read", "")
		}

		document.querySelectorAll(".link-card").forEach((el) => {
			el.addEventListener("click", (e) => {
				const name = el.querySelector("h2").innerText
				if (useLocal.read.indexOf(name) === -1 && !name.includes("👍")) {
					useLocal.setItem("read", useLocal.read + ", " + name)
					el.querySelector(".is-read").innerHTML += "Leído"
				}
				document.querySelector(".leido-count").innerHTML =
					useLocal.read.split(",").length - 1
			})

			if (useLocal.read.indexOf(el.querySelector("h2").innerText) !== -1) {
				el.querySelector(".is-read").innerHTML = "Leído"
			}
		})
		document.querySelector(".leido-count").innerHTML = useLocal.read.split(",").length - 1
		document.querySelector(".leido-total").innerHTML = totalArticles
	}
})
