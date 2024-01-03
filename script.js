let redbox = document.getElementById('red')
redbox.onclick = () => {
    alert('You click on Red box')
}

let yellowbox = document.getElementById('yellow')
yellowbox.onclick = () => {
    alert('You click on Yellow box')
}

let greenbox = document.getElementById('green')
greenbox.onclick = () => {
    alert('You click on Green box')
}






const squares = document.querySelectorAll('.colorSqure')

const timeClicked = {'red':0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
    square.onclick = ()=> {
        timeClicked[square.value] +=1 
        square.innerText = timeClicked[square.value]
    }
})


function clearScores() {
    squares.forEach(square =>{
        square.innerText = ' '
    })
}


const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()