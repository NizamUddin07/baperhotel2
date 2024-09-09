document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString);
    

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeAmountString = depositeTotalElement.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountString);



    const newDepositeTotal = previousDepositeAmount + depositeAmount;
    depositeTotalElement.innerText = newDepositeTotal;



    const newTotalBalance = document.getElementById('total-balance');
    const newTotalBalanceString = newTotalBalance.innerText;
    const previousTotalAmount = parseFloat(newTotalBalanceString );

    const newReplacedTotalBalance = previousTotalAmount + newDepositeTotal;
    newTotalBalance.innerText = newReplacedTotalBalance;

    depositeField.value="";



})