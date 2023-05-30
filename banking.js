document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('button clicked');

    const depositInputField = document.getElementById('deposit-input');
    const newDepositText = depositInputField.value;
    // console.log(newDeposit)
    const newDepositAmmount = parseFloat(newDepositText)

    // deposit 
    const depositeTotal = document.getElementById('deposit-total');
    const priviousDepositeText = depositeTotal.innerText;
    const priviousDepositeAmmount = parseFloat(priviousDepositeText);

    const newDepositTotal = newDepositAmmount + priviousDepositeAmmount;
    depositeTotal.innerText = newDepositTotal;

    //balace update
    const balaceTotal = document.getElementById('balace-total');
    const balaceTotalText = balaceTotal.innerText;
    const balaceTotalAmmount = parseFloat(balaceTotalText);

    const newBalanceTotal = balaceTotalAmmount + newDepositAmmount;
    balaceTotal.innerText = newBalanceTotal;

    depositInputField.value = '';

})


document.getElementById('withdra-button').addEventListener('click', function () {
    // console.log('withdra-button clicked')
    const withdrawInputfield = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputfield.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText);
    console.log(withdrawInputText)

    //withdrow totlal
    const withdrowTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrowTotal.innerText;
    const priviousWithdrawTotalAmmount = parseFloat(withdrawTotalText);

    const newWithdrawInputAmmount = withdrawInputAmmount + priviousWithdrawTotalAmmount;
    withdrowTotal.innerText = newWithdrawInputAmmount;

    //balace update
    const balaceTotal = document.getElementById('balace-total');
    const balaceTotalText = balaceTotal.innerText;
    const balaceTotalAmmount = parseFloat(balaceTotalText);

    const newBalanceTotal = balaceTotalAmmount - withdrawInputAmmount;
    balaceTotal.innerText = newBalanceTotal;


    //  clear input
    withdrawInputfield.value = '';

})