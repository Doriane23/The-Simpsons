import { useState } from "react";
function Avatar(props) {
	// function Avatar({image, firstName, lastName}) {
	/**
	 * props = {
	 *  key: "value"
	 * }
	 *
	 * props = {
	 *  image: "value",
	 *  firstName: "value",
	 *  lastName: "value"
	 * }
	 *
	 * EXERCICE :
	 * Bart : https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png
	 * Je souhaite une carte des simpson
	 * Avec en 1er une image de bart => https://www.stickees.com/cartoon/the-simpsons/
	 *
	 * et en dessous de l'image, son prenom NOM
	 *
	 * Homer : https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png
	 *
	 */
	const [donut, setDonut] = useState(0);
	// const [ nomDuState, setNomDuState ] = useState(<valeur-initial>)
	function donutBox() {
		// La fonction donut doit ajouter 1 donut à chaque click
		setDonut(donut + 1);
	}

	return (
		<div>
			<img src={props.image} alt={props.firstName} />
			<p>
				{props.firstName} {props.lastName}
			</p>
			<button onClick={donutBox}>🍩 {donut}</button>
		</div>
	);
}

export default Avatar;
/*
   __&__      
  /     \     
 |       |    
 |  (o)(o)    
 C   .---_)   hmmm des donuts 😋🍩
  | |.___|    
  |  \__/     
  /_____\     
 /_____/ \    
/         \

 |\/\/\/|  
 |      |  
 |      |  
 | (o)(o)  
 C      _) 
  | ,___|  
  |   /    
 /____\    
/      \

/\ /\  /\      
| V  \/  \---. 
 \_        /   
  (o)(o)  <__. 
 _C         /  
/____,   )  \  
  \     /----' 
   ooooo       
  /     \
*/
// ┏(-_-)┛ ┗(-_- )┓ ┗(-_-)┛ ┏(-_-)┓
// <('-'<) <(^-^)> (>'-')>

// Qui peut me déclarer un state appelé "jambon" avec une valeur par défaut un tableau vide ?

// Go répondre ici ->
//   const [jambon, setJambon] = useState([])
// :D GG

// Déclarez moi le state "compteur de like" qui commence à 10
// go -> const [like, setLike] = useState(10) 🎆 GG

// Déclarez moi un state avec valeur par défaut une string qui dit "Hello"
// const [string, setString] = useState("Hello") GG WP 🚀🚀🚀

// <p> <affiche moi ici le state string> </p>
// <p> {string} </p> 🚀🚀🚀🚀🚀

// Changez moi le nombre de likes de 10 en valeur initiale à 70 sa nouvelle valeur
// setLike(70) bien vu ! 🚀

// Changer moi le state string en ajoutant à sa suite "World"
// setString(string + " World")

// Affichez moi le state string dans un bouton JSX
// <button>{string}</button> Very Nice !  (avec la voix de Borat !) :,)
