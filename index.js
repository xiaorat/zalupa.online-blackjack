let allcards = []
let sumofcards = 0
let message = document.getElementById("messageEl")
let sum = document.querySelector("#sum")
let cardcount = document.querySelector("#cards")
let hasblackjack = false
let isalive = true
let playerdata = document.getElementById("playerdata")

let player = {
    name: 'alex',
    babki: 228
}

playerdata.textContent = player.name + ": $" + player.babki


function rendergame() {
    cardcount.textContent = 'cards: '
    sum.textContent = "sum: "
    console.log(allcards)
    for (let i = 0; i < allcards.length; i++) {
        cardcount.textContent += allcards[i] + ' '
    }   
    if (sumofcards < 21) {
      message.textContent = "wanna new card?"
      sum.textContent = sum.textContent + sumofcards
    } 
    
    else if (sumofcards === 21) {
        message.textContent = "nihuya sebe" 
        sum.textContent = sum.textContent + sumofcards
        hasblackjack = true
        
    } 
    else { 
        message.textContent = "pososal"
        sum.textContent = sum.textContent + sumofcards
        isalive = false
    } 
    
}

function getrandomcard() {
    let randomnumber = Math.floor(Math.random() * 13) + 1
    if (randomnumber > 10) {
        return 10
    } 
    else if (randomnumber === 1) {
        return 11
    }
    else {
        return randomnumber
    }
    
}

function startgame() {
if (isalive === true && hasblackjack === false) {
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    allcards = [firstcard, secondcard]
    sumofcards = firstcard + secondcard
    rendergame()
   }
}


function newcard() {
  if (hasblackjack === false && isalive === true) {    
    const randomcard = getrandomcard()
    allcards.push(randomcard)
    sumofcards += randomcard
    rendergame()
  }
}




