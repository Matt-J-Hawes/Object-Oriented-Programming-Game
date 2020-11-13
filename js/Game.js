/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Matt Hawes
 * Game.js */
 class Game {

 	   constructor(){
 	   	   this.missed = 0;
 	   	   this.phrases = this.createPhrases()
 	   	   this.activePhrase= ''
 	   }

		/*********************************************************************
		* Creates phrases for use in game
		* @return {array} An array of phrases that could be used in the game
		*********************************************************************/

 	   createPhrases(){
        const phrase = [
          new Phrase("Im the king of the world"),
          new Phrase("They call it a royale with cheese"),
          new Phrase("Wax on Wax off"),
          new Phrase("My precious"),
          new Phrase("Good morning Vietnam")
            ]
         return phrase
 	   }

 	   /***********************************************************************
		* Selects random phrase from phrases property
		* @return {Object} Phrase object chosen to be used
		***********************************************************************/

 	   getRandomPhrase(){
 	   	let randomPhrase = Math.floor(Math.random() * this.phrases.length)
 	   	let retrievePhrase = this.phrases[randomPhrase]
 	   	return retrievePhrase
 	   }

 	    /**********************************************************************
		* Begins game by selecting a random phrase and displaying it to user
		***********************************************************************/

 	   startGame(){
        const overLay = document.getElementById('overlay')
        overLay.style.display = "none"
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()

 	   }

		/**********************************************************************
		* Checks for winning move
		* @return {boolean} True if game has been won, false if game wasn't won
		***********************************************************************/

		checkForWin(){
			const ul = document.querySelector("ul")
			if(ul.innerHTML.includes(`<li class="letter hide"`)){
			return false}		
			else{return true}
		}

		/***********************************************************************
		* Increases the value of the missed property
		* Removes a life from the scoreboard
		* Checks if player has remaining lives and ends game if player is out
		************************************************************************/

	    removeLife(){	    	
	    	let li = document.querySelectorAll('#scoreboard img')	    		
	    	   this.missed ++
			if(this.missed < 5){
				li[5 - this.missed].src = "images/lostHeart.png"}
			else if(this.missed === 5){
				this.gameOver()
			}
		}

		/***********************************************************************
		* Displays game over message
		* @param {boolean} gameWon - Whether or not the user won the game
		***********************************************************************/

         gameOver(){
     	    const mainScreen = document.getElementById('overlay')
            mainScreen.style.display = "inherit"
            const h1 = document.getElementById('game-over-message')                             
            if(this.missed === 5){                 
            	h1.innerHTML = `Sorry, you lost! Better luck next time.`
            	button.innerHTML = "Try again"
            	mainScreen.style.backgroundColor = "#cc3300"
            	button.addEventListener("click", function (){window.location.reload()})}
            else if(this.missed < 5){
            	h1.innerHTML = `Congratulations... You won! The quote was
            	<br><p class= "end-quote">"${game.activePhrase.phrase.toUpperCase()}"</p>`
            	button.innerHTML = "Play again"
            	mainScreen.style.backgroundColor = "#99cc33"
            	button.addEventListener("click", function (){window.location.reload()})
            }
	     }

		/***********************************************************************
		* Handles onscreen keyboard button clicks
		* @param (HTMLButtonElement) button - The clicked button element
		************************************************************************/

         handleInteraction(buttonKey){
			if(game.activePhrase.checkLetter(buttonKey.innerHTML)){
				buttonKey.className = "chosen";
				game.activePhrase.showMatchedLetter(buttonKey.innerHTML)
			if(game.checkForWin()){                  	   	 
				game.gameOver()}}
		    else{buttonKey.className = "wrong";
				game.removeLife()}
		    }
		 }