document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString);
    console.log(depositeAmount)
})