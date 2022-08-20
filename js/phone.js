function updatePhoneQuantity(isIncrease){
    const phoneQuantityField = document.getElementById('phone-quantity-field');
    const phoneQuantityFieldString = phoneQuantityField.value;
    const previousPhoneQuantity = parseInt(phoneQuantityFieldString);

    let newPhoneQuantity;
    if(isIncrease){
        newPhoneQuantity = previousPhoneQuantity + 1;
        phoneQuantityField.value = newPhoneQuantity;
    } else{
        if(previousPhoneQuantity > 1){
            newPhoneQuantity = previousPhoneQuantity - 1;
            phoneQuantityField.value = newPhoneQuantity;
        } else{
            alert("You can't make the quantity less than 1");
            return previousPhoneQuantity;
        }
    }
    return newPhoneQuantity;
}

function updatePhonePrice(newPhoneQuantity){
    const totalPhonePrice = newPhoneQuantity * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = totalPhonePrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneQuantity = updatePhoneQuantity(true);
    updatePhonePrice(newPhoneQuantity);
    updateSubTotal();

   

    
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneQuantity = updatePhoneQuantity(false);
    updatePhonePrice(newPhoneQuantity);
    updateSubTotal();
})