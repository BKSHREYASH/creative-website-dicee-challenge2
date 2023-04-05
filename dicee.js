function onLoad(){
  let rand = (Math.random()*6)+1

let randDicee = Math.floor(rand)

console.log(randDicee)

if(randDicee == 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png")
} else if(randDicee == 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
} else if(randDicee == 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
} else if(randDicee == 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
} else if(randDicee == 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
} else {

    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
  }









  let rand2 = (Math.random()*6)+1

  let randDicee2 = Math.floor(rand2)

  console.log(randDicee2)

  if(randDicee2 == 1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png")
  } else if(randDicee2 == 2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
  } else if(randDicee2 == 3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
  } else if(randDicee2 == 4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
  } else if(randDicee2 == 5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
  } else {

    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
  }



if(randDicee === randDicee2){
  document.querySelector("h1").innerHTML = "Draw!"
} else if(randDicee > randDicee2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}






}

// let randomNumber1 = Math.floor((Math.random()*6)+1)
// let randomDiceeImage = "dice"+randomNumber1+".png"
// let randomImageSource = "images/"+randomDiceeImage
//
// let image1 = document.querySelectorAll("img")[0]
// image1.setAttribute("src",randomImageSource)
//
//
// let randomNumber2 = Math.floor((Math.random()*6)+1)
// let randomImageSource2 = "images/dice"+randomNumber2+".png"
//
// let image2 = document.querySelectorAll("img")[1]
// image2.setAttribute("src",randomImageSource2)
