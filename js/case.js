function updateCaseQuantity(isIncrease){
    const caseQuantityField = document.getElementById('case-quantity');
    const caseQuantityString = caseQuantityField.value;
    const previousCaseQuantity = parseInt(caseQuantityString);

    let newCaseQuantity;
    if(isIncrease){
        newCaseQuantity = previousCaseQuantity + 1;
        caseQuantityField.value = newCaseQuantity;
    } else{
        if(previousCaseQuantity > 1){
            newCaseQuantity = previousCaseQuantity - 1;
            caseQuantityField.value = newCaseQuantity;
        } else{
            alert('You can not make the quantity less than 1');
            return previousCaseQuantity;
        }
    }

    return newCaseQuantity;
    
}


function updateCaseTotalPrice(newCaseQuantity){
    const newCaseTotal = newCaseQuantity * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = newCaseTotal;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
   const newCaseQuantity = updateCaseQuantity(true);
   updateCaseTotalPrice(newCaseQuantity);
   updateSubTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
   const newCaseQuantity = updateCaseQuantity(false);
   updateCaseTotalPrice(newCaseQuantity);
   updateSubTotal();
})