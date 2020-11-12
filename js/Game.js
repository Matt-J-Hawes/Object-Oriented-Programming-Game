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
 }