/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {

 	   constructor(){
 	   	   this.missed = 0;
 	   	   this.phrases = this.createPhrases()
 	   	   this.activePhrase= ''
 	   }

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

 	   getRandomPhrase(){

 	   	let randomPhrase = Math.floor(Math.random() * this.phrases.length)
 	   	let retrievePhrase = this.phrases[randomPhrase]
 	   	return retrievePhrase


 	   }

 	   startGame(){
        const overLay = document.getElementById('overlay')
        overLay.style.display = "none"
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()

 	   }

		checkForWin(){

			const ul = document.querySelector("ul")

			if(ul.innerHTML.includes(`<li class="letter hide"`)){
			return false
			} 

			else return true 

		}

	    removeLife(){
	    	
	    	
	    	let li = document.querySelectorAll('#scoreboard img')
	    		
	    		this.missed ++
	    		if(this.missed < 5){
	    			li[5 - this.missed].src = "images/lostHeart.png"}
	    			else if(this.missed === 5){
	    				this.gameOver()
	    			}
	    		}
         gameOver(){

         	    const mainScreen = document.getElementById('overlay')
                mainScreen.style.display = "inherit"
                const h1 = document.getElementById('game-over-message')
               
                
                if(this.missed === 5){
                   
                	h1.innerHTML = "Sorry, you lost! Better luck next time."
                	button.innerHTML = "Try again"
                	mainScreen.style.backgroundColor = "#cc3300"
                	button.addEventListener("click", function (){window.location.reload()})


                } else if(this.missed < 5){
                	h1.innerHTML = `Congratulations... You won!`
                	button.innerHTML = "Play again"
                	mainScreen.style.backgroundColor = "#99cc33"
                	button.addEventListener("click", function (){window.location.reload()})
                }

         }

         handleInteraction(buttonKey){
       

                   if(game.activePhrase.checkLetter(buttonKey.innerHTML)){
                   	   buttonKey.className = "chosen";
                   	   game.activePhrase.showMatchedLetter(buttonKey.innerHTML)
                   	   if(game.checkForWin()){                  	   	 
                   	   	  game.gameOver()
                   	   }
                   } else{buttonKey.className = "wrong";
                           game.removeLife()}

	    	}
         	}
