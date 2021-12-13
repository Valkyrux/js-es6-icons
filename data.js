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
	const keyValueArray = [];
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

// genero un array per i vari tipi di icone con cui do il valore alle option delle select
const typeArray = valuesForKey(faIcons, "type");
// costruisco la struttura da appendere nell'header
const nav = document.createElement("nav");
nav.append("Filtra per tipo");
const selectType = document.createElement("select");
for (i in typeArray) {
	const optionValue = document.createElement("option");
	optionValue.value = typeArray[i];
	optionValue.append(typeArray[i]);
	selectType.append(optionValue);
}
nav.append(selectType);
// prendo l'header dall'htmpl
const header = document.querySelector("header");
header.append(nav);

for (let i in faIcons) {
	header.append(getIconCard(faIcons[i]));
}