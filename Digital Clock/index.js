const clock = document.getElementById('clock')

function updateClock(){
   const now =new Date()
   let hours =now.getHours()
   let minutes = now.getMinutes()
   let second = now.getSeconds()
   hours = String(hours).padStart(2, '0')
   minutes =String(minutes).padStart(2, '0')
   second = String(second).padStart(2 , '0')
   const time = `${hours} ${minutes} ${second}`
   console.log(time)
   clock.textContent = time
}
// or we can use time = now.toLocaleTimeString()
  setInterval(updateClock,1000)
  updateClock()
