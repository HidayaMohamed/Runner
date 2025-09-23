const signUp = document.getElementById("signUp")
const form = document.getElementById("form")

signUp.addEventListener("click", () => {
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    } 
})
