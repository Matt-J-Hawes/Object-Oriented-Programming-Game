/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Matt Hawes
 * Phrase.js */


class Phrase{

	constructor(phrase){
		this.phrase = phrase.toLowerCase() }

/*******************************************************
* Display phrase on game board
********************************************************/

	addPhraseToDisplay(){
		const ul = document.querySelector("ul")
		const splitLetter = this.phrase.split('')
		for(let char of splitLetter){
		if(char !== ' '){
		let letterLi = document.createElement('li')
		letterLi.innerHTML = char
		letterLi.classList.add("letter")
		letterLi.classList.add("hide")
		ul.appendChild(letterLi) }				
		else {
		let spaceLi = document.createElement('li')
		spaceLi.innerHTML = char
		spaceLi.className = "space"
		ul.appendChild(spaceLi) } }			
		return splitLetter }
		
/********************************************************
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*********************************************************/

	checkLetter(letter){        
		return this.phrase.includes(letter) }			 

/*********************************************************
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
**********************************************************/

	showMatchedLetter(letter){
		const li = document.querySelectorAll('li.hide.letter')
		li.forEach(phrase => {
		if(letter === phrase.textContent.toLowerCase()){
		phrase.classList.replace("hide", "show") }}) } }
		
