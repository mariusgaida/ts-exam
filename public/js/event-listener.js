"use strict";
const inputField = document.querySelector('#input');
const result = document.querySelector('#result');
if (inputField === null)
    throw new Error('Neteisingas įvesties lauko selektorius');
if (result === null)
    throw new Error('Neteisingas rezultatų konteinerio selektorius');
const handleFieldChange = (event) => {
    const element = event.target;
    result.innerHTML = element.value;
};
inputField.addEventListener('keyup', handleFieldChange);
inputField.style.display = "flex";
inputField.style.margin = "0 auto";
result.style.textAlign = "center";
//# sourceMappingURL=event-listener.js.map