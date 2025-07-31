const button = document.getElementById("myButton");
const body = document.querySelector("body");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const paragraph = document.createElement("p");
    paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    body.insertBefore(paragraph, button.nextElementSibling);
})