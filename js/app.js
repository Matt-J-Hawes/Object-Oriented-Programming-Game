/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = ''

const button = document.getElementById('btn__reset')

button.addEventListener('click', function(){

	game = new Game()
	game.startGame()


    
})


const buttonKey = document.getElementsByClassName("key")

for(let button of buttonKey){
button.addEventListener('click', function(){
    
	game.handleInteraction(button)
})}

console.log(game.activePhrase)
