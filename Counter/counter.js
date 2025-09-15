const counter = document.getElementById('number')
const increase =document.getElementById('plus')
const decrease = document.getElementById('minus')
const reset = document.getElementById('reset')
const input = document.getElementById('step')
let count = 0

function updateCounter(){
  counter.textContent = count;

  if (count > 0) {
    counter.style.color = 'green';
  } else if (count < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
}

increase.addEventListener('click', ()=>{
     count+=Number(input.value)||1
     console.log(count)
     updateCounter()
})

decrease.addEventListener('click',()=>{
    count-= Number(input.value)||1
    console.log(count)
    updateCounter()
})
reset.addEventListener('click',()=>{
    count =0
    updateCounter()
})
