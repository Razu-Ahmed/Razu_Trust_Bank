
//Login Button Event Handler

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-sec")
    loginArea.style.display ="none";
    const transactionArea =document.getElementById("transaction-area");
    transactionArea.style.display = "block";

});
//Diposit Button Event Handler
const depositBtn = document.getElementById("addDeposit");
    depositBtn.addEventListener("click", function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);

        const depositNumber = getinputNumber("depositAmount");


    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber );


    /*const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;*/

    updateSpanText("currentBalance", depositNumber );

    document.getElementById("depositAmount").value ="";
})

//Withdraw Button Event Handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
//     const withdrawAmount = document.getElementById("withdrawAmount").value;
//    const withdrawNumber = parseFloat(withdrawAmount);
    const withdrawNumber = getinputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getinputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}