var dropdownElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cars');
var dropdownOption: HTMLOptionElement = document.createElement("option");
dropdownOption.text = "Kiwi";
dropdownOption.value = "fucking kiwi"
dropdownElement.add(dropdownOption);
