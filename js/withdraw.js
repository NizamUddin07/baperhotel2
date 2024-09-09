document.getElementById('btn-withdraw').addEventListener('click', function(){
const withdrawFieldElement = document.getElementById('withdraw-field');
const withdrawFieldString = withdrawFieldElement.value;
const withdrawField = parseFloat(withdrawFieldString);

const withdrawTotalAmount = document.getElementById('withdraw-total');
const withdrawTotalAmountString = withdrawTotalAmount.innerText;
const withdrawTotalAmountNew = parseFloat(withdrawTotalAmountString);


const newWithdrawReplace = withdrawTotalAmountNew + withdrawField;
withdrawTotalAmount.innerText = newWithdrawReplace;

withdrawField.value = "";




})