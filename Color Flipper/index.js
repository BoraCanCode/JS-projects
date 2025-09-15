const button = document.getElementById('btn')
const hexCode = document.getElementById('hex')

function colorFlipper(){
  const r = Math.floor(Math.random()*256).toString(16).padStart(2 , '0')
  const g = Math.floor(Math.random()*256).toString(16).padStart(2, '0')
  const b = Math.floor(Math.random()*256).toString(16).padStart(2, '0')
  return `#${r}${g}${b}`;
}

button.addEventListener('click' , ()=>{
    const color = colorFlipper()
    document.body.style.background = color
    hexCode.textContent = color
    // hexCode.style.color =color
})

