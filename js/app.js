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
const mainScreen = document.getElementById('overlay')
const nameInput = document.getElementById("player-name")
const warning = document.querySelector(".player-name")
const warningDiv = document.querySelector(".player-info")
warning.style.display = "none"
nameInput.value = ''
nameInput.focus()

/*********************************************************************
* Event Listener to start a new game 
*********************************************************************/

	button.addEventListener('click', function(){

		if(nameInput.value){
		game = new Game()
		game.startGame()  
		} else {warning.style.display = "block"} })

/*********************************************************************
* When key board 'key' is clicked, the handleInteraction function 
* runs from Game.js
*********************************************************************/

		for(let button of buttonKey){
		button.addEventListener('click', function(){	    
		game.handleInteraction(button) }	)}	
		
   

/*********************************************************************
* If the game is not in the main screen - it will listen to keyboard 
* clicks - runs from Game.js
*********************************************************************/

        document.addEventListener('keydown', function(key){
        	if(mainScreen.style.display === "none"){
        	game.handleKeyboardInteraction(key)}
        })