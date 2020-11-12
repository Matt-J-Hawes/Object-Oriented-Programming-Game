/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 class Phrase{

 	constructor(phrase){
 		this.phrase = phrase.toLowerCase()
 	}

	addPhraseToDisplay(){
		const ul = document.querySelector("ul")
		const splitLetter = this.phrase.split('')

		for(let char of splitLetter){
		if(char !== ' '){

			let letterLi = document.createElement('li')
			letterLi.innerHTML = char
			letterLi.className = "letter"
			ul.appendChild(letterLi)
			} 

		else {

			let spaceLi = document.createElement('li')
			spaceLi.innerHTML = char
			spaceLi.className = "space"
			ul.appendChild(spaceLi)

			}
		}
		return splitLetter
	}

	checkLetter(letter){
        
        return this.phrase.includes(letter)

		
	}

	showMatchedLetter(letter){
         
         const matchedLetter = this.checkLetter(letter)
         const li = document.getElementsByClassName('letter')
         for(let x = 0; x < li.length; x++){
         if(matchedLetter){
  
         		li[x].className = "show"}
         	}

         }
         
        
    }
          
       
	




    





