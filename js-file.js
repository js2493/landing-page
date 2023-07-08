const middleImgs = document.querySelector(".middle-imgs")
console.log(middleImgs)
const newImageBox = document.createElement("div")
newImageBox.classList.add("img-box")

const newImage = document.createElement("img")
newImage.src = "https://cdn.pixabay.com/photo/2023/06/14/05/40/duckling-8062337_1280.jpg"
newImage.alt = "duck"
newImage.height = 200
newImage.width = 200

const newImageText = document.createElement("div")
newImageText.classList.add("text")
newImageText.textContent = "This is some subtext under some image"

newImageBox.appendChild(newImage)
newImageBox.appendChild(newImageText)

middleImgs.appendChild(newImageBox)