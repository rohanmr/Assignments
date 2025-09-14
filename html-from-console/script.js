
document.body.style.backgroundColor = "gray"

let h1 = document.createElement("h1")
h1.textContent = "This Is My Site"
h1.style.color = "white"
h1.style.textAlign = "center"
h1.style.fontSize = "50px"

document.body.appendChild(h1)

let img = document.createElement("img");
img.src = "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
img.style.width = "300px"
img.style.height = "300px"
img.style.objectFit = "cover"
img.style.display = "block"
img.style.margin = "30px auto"

document.body.appendChild(img)

let para = document.createElement("p")
para.textContent = "This page is fully created by usign javascript consloe."
para.style.color = "#ddd"
para.style.textAlign = "center"
para.style.fontSize = "1.2rem"

document.body.appendChild(para)

let button = document.createElement("button")
button.style.color = "black"
button.textContent = "Click Me"
button.style.display = "block"
button.style.borderRadius = "8px"
button.style.padding = "15px 24px"
button.style.margin = "20px auto"
button.style.border = "none"
button.style.fontSize = "1rem"
button.style.cursor = "pointer"

document.body.appendChild(button)

button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "red"
    button.style.color = "white"
})

button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "black"
})

button.addEventListener("click", () => {
    alert("Wooo!! You have click it")
})

let card = document.createElement("div")

card.style.width = "300px"
card.style.margin = "20px auto"
card.style.padding = "10px"
card.style.borderRadius = "12px"
card.style.textAlign = "center"
card.style.fontSize = "25px"
card.style.boxShadow = "0 5px 15px rgba(2, 2, 2, 0.2)"
card.style.backgroundColor = "#333"


document.body.appendChild(card)


let cardTitle = document.createElement("h2")
cardTitle.textContent = "This the card"
cardTitle.style.color = "white"
card.appendChild(cardTitle)

let cardText = document.createElement("p")
cardText.style.color = "white"
cardText.textContent = "This is the my card paragraph"
cardText.style.fontSize = "1rem"
cardText.style.marginTop = "10px"
card.appendChild(cardText)


document.body.style.display = "flex"
document.body.style.flexDirection = "column"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"
document.body.style.height = "100vh"
document.body.style.fontFamily = "Arial,sans-serif"


