const cvs = document.getElementById('canvas')

const ctx = cvs.getContext('2d')

//create unit

const box = 32

//

//load image
let ground = new Image()

ground.src = './img/ground.png'

let food = new Image()

food.src = './img/food.png'
//load audio

let audioName = new Audio()

audioName.src = './audio'

audioName.play()

ctx.drawImage(imageName, X, Y, Width, Height)

ctx.drawImage()

ctx.fillStyle = 'red'
ctx.fillRect(100, 300, 30, 30)
