let budgetInp = document.getElementById('budget-inp')
let setBudget =  document.getElementById('set-budget')
let productName = document.getElementById('product')
let productCoast = document.getElementById('product-coast')
let checkAmount = document.getElementById('check-amount')
let showBudget = document.getElementById('showBudget')
let showExpenses = document.getElementById('showExpenses')
let showBalance = document.getElementById('showBalance')
let totalExpenses = 0
setBudget.addEventListener('click',()=>{
    if (budgetInp.value === '') {
        alert('Enter Your Budget')
    }
    else{
        showBudget.innerText = budgetInp.value
        showBalance.innerText = budgetInp.value
    }
})
checkAmount.addEventListener('click',()=>{
    if (budgetInp.value !== '') {
        let productCoastValue = parseFloat(productCoast.value)
        totalExpenses += productCoastValue
        showExpenses.innerText = totalExpenses
        let showBalanceValue = parseFloat(showBalance.innerText)
        showBalanceValue -= productCoastValue
        showBalance.innerText = showBalanceValue
        productName.value = ""
        productCoast.value = ""
    }
    else{
        alert('Enter Your Budget Plz')
    }
})