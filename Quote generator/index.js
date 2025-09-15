const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" }
];
const quote = document.getElementById('quote')
const author =document.getElementById('author')
const previous  =document.getElementById('prev')
const next = document.getElementById('next')
let currentIndex = 0

next.addEventListener('click',()=>{
    currentIndex++
    if (currentIndex>=quotes.length){
    currentIndex=0
    }   
     showQuote(currentIndex)
})
previous.addEventListener('click',()=>{
    currentIndex--
    if(currentIndex<0){
        currentIndex =quotes.length-1
    }
    showQuote(currentIndex-1)
})

function showQuote(index){
 const fullQuotes = quotes[index]
 quote.innerText = fullQuotes.text
 author.innerText  = `--${fullQuotes.author}`
}

showQuote(currentIndex)