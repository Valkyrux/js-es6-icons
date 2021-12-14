const faIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
// funzione che trova tutti i valori possibili per una determinata chiave all'interno di un array di oggetti
function valuesForKey (objArray, key) {
	const keyValueArray = ["All"];
	for (let i = 0; i < objArray.length; i++) {
		if (!keyValueArray.includes(objArray[i][key])) {
			keyValueArray.push(objArray[i][key]);
		}
	}
	return keyValueArray;
}
// funzione che genera la struttura della card dato l'oggetto che contiene le icone
function getIconCard(obj) {
	const card = document.createElement("div");
	card.classList.add("icon-card");
	const faIcon = document.createElement("i");
	faIcon.classList.add(obj.family, obj.prefix + obj.name);
	faIcon.style.color = obj.color;
	card.append(faIcon);
	card.append(obj.name);
	return card;
}
// funzione che genera un colore casuale in formato esadecimale
function getRandColor() {
	let randColor = "#"
	let charDigit = "abcdef";
	for (let i = 0; i < 6; i++) {
		let colorDigit =  Math.floor(Math.random()* 16);
		if (colorDigit > 9) {
			colorDigit = charDigit[colorDigit - 10];
		}
		randColor += colorDigit;
	}
	return randColor;
}
// funzione che assegna la funzione getRandColor per categoria in modo da avere lo stesso colore randomico per lo stesso type
function randColorForKey (objArray, typeKey, colorKey) {
	const keyArray = valuesForKey(objArray, typeKey);
	const colorArray = [];
	for (let i = 1; i < keyArray.length; i++) {
		colorArray.push(getRandColor());
	}
	for (i in objArray) {
		let foundMatch;
		for (let j = 1; j < keyArray.length; j++) {
			if (objArray[i][typeKey] == keyArray[j]) {
				foundMatch = j;
			}
		}
		objArray[i][colorKey] = colorArray[foundMatch - 1]; 
	}
	return colorArray;
}
// genero un array per i vari tipi di icone con cui do il valore alle option delle select
const typeArray = valuesForKey(faIcons, "type");
// costruisco la struttura da appendere nell'header
const nav = document.createElement("nav");
nav.append("Filtra per tipo");
const selectType = document.createElement("select");
// prendo la parte dell HTML che conterra le icone
const iconContainer = document.querySelector(".icon-container");
for (i in typeArray) {
	const optionValue = document.createElement("option");
	optionValue.value = typeArray[i];
	optionValue.append(typeArray[i]);
	// avevo messo l'addEventListener sulle option, su FF funziona :(
	// if(optionValue.value != "All") {	
	// 	optionValue.addEventListener("click",
	// 		function () {
	// 			iconContainer.innerHTML = "";
	// 			randColorForKey (faIcons, "type", "color");
	// 			const foundIcons = faIcons.filter((element) => {return this.value == element.type});
	// 			for (let i in foundIcons) {
	// 				iconContainer.append(getIconCard(foundIcons[i]));
	// 			}
	// 		}
	// 	);
	// } else {
	// 	optionValue.addEventListener("click", 
	// 		function () {
	// 			iconContainer.innerHTML = "";
	// 			for(let i in faIcons) {
	// 				iconContainer.append(getIconCard(faIcons[i]));
	// 			}
	// 		}
	// 	);
	// }
	selectType.append(optionValue);
	
}
selectType.addEventListener("change", 
	function () {
		if(selectType.value != "All") {	
			iconContainer.innerHTML = "";
			randColorForKey (faIcons, "type", "color");
			const foundIcons = faIcons.filter((element) => {return this.value == element.type});
			foundIcons.forEach((element) => {iconContainer.append(getIconCard(element));});
		} else {
			iconContainer.innerHTML = "";
			faIcons.forEach((element) => {iconContainer.append(getIconCard(element));});
		}
	}
);
nav.append(selectType);
// prendo l'header dall'htmpl
const header = document.querySelector("header");
header.append(nav);
// prendo il container

for (let i in faIcons) {
	iconContainer.append(getIconCard(faIcons[i]));
}