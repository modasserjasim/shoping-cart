function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseFloat(phoneTotalString)

    return currentPhoneTotal;
}

function setElementValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
     subtotalElement.innerText = value;
}

function updateSubTotal(){
     //calculate sub total
     const currentPhoneTotal = getElementValueById('phone-total');
     const currentCaseTotal = getElementValueById('case-total');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('cart-subtotal', currentSubTotal);
     

     // calculate Tax
     const totalTax = (10/100) * currentSubTotal;
     const taxElement = document.getElementById('tax');
     setElementValueById('tax', totalTax.toFixed(2));

     //calculate total
     const totalAmount = currentSubTotal + totalTax;
     setElementValueById('total', totalAmount);
}