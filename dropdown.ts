var selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cars');
var optionElement: HTMLOptionElement = document.createElement("option");
optionElement.text = "Text";
optionElement.value = "value";
selectElement.add(optionElement);
