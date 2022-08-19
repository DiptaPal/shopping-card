function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currntSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currntSubTotal;
    setTextElementValueById('sub-total',currntSubTotal);

    const textAmout = currntSubTotal * 0.1;
    setTextElementValueById('tax-amount', textAmout.toFixed(3));

    const finalAmount = currntSubTotal + textAmout;
    setTextElementValueById('final-total', finalAmount);
}