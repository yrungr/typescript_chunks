var selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cars');
var optionElement: HTMLOptionElement = document.createElement("option");
optionElement.text = "Text";
optionElement.value = "value";
selectElement.add(optionElement);
selectElement.addEventListener('change',dropdown);
function dropdown(){
	console.log(selectElement.value);
	var output: HTMLElement = <HTMLElement>document.getElementById('output');
	output.innerText = selectElement.value;
}