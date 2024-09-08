document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString);
    

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeAmountString = depositeTotalElement.innerText;
    const previousDepositeAmount = parseFloat(depositeTotalElement);

})