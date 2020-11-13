/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Matt Hawes
 * app.js */


/*********************************************************************
* Declared Variables
*********************************************************************/

let game = ''
const button = document.getElementById('btn__reset')
const buttonKey = document.getElementsByClassName("key")


/*********************************************************************
* Event Listener to start a new game 
*********************************************************************/

button.addEventListener('click', function(){

		game = new Game()
		game.startGame()    
	})

/*********************************************************************
* When key board 'key' is clicked, the handleInteraction function 
* runs from Game.js
*********************************************************************/

for(let button of buttonKey){
		button.addEventListener('click', function(){	    
		game.handleInteraction(button) }		
	)}