const button = document.getElementById('btn')
const result = document.getElementById('result')
const dice = document.getElementById('dice')
const dice2 = document.getElementById('dice2')
const sum =  document.createElement('p')
document.body.appendChild(sum)
button.addEventListener('click',()=>{
    const randomNumber = (Math.floor(Math.random()*6)+1)
    const randomNumber2 = (Math.floor(Math.random()*6)+1)
    result.textContent = `You rolled ${randomNumber} at dice1 & ${randomNumber2} at dice2`
    dice.src = `assets/${randomNumber}.webp `
    dice2.src = `assets/${randomNumber2}.webp`

   sum.textContent = `The sum of you dices is ${randomNumber+randomNumber2}`
   
})