var dropdownElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cars');
var dropdownOption: HTMLOptionElement = document.createElement("option");
dropdownOption.text = "Text";
dropdownOption.value = "value";
dropdownElement.add(dropdownOption);
