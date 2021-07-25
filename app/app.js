


viewAllBudgetsButton = document.querySelector('.btn2')
viewAllBudgetsButton.style.display = 'none'

createBudgetButton = document.querySelector('.btn1')
createBudgetButton.addEventListener('click', ()=>{
    cards = document.querySelector('.budget-cards').style.display = 'none'
    createBudgetButton.style.display = 'none'
    viewAllBudgetsButton.style.removeProperty("display");
})