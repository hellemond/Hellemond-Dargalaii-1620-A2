var budgetArray = [];

createBudgetButton = document.querySelector('.btn1')

viewAllBudgetsButton = document.querySelector('.btn2')
viewAllBudgetsButton.style.display = 'none'

cardInfo = document.querySelector('.get-card-info')
cardInfo.style.display = 'none'




createBudgetButton.addEventListener('click', ()=>{
    cards = document.querySelector('.budget-cards').style.display = 'none'
    createBudgetButton.style.display = 'none'
    viewAllBudgetsButton.style.removeProperty("display");
    cardInfo.style.removeProperty("display");
})





function budgetCards(budgetObj){
    const card =`
    <div class='budget-card'>
        <h2>${budgetObj.title}</h2>
        <p>${budgetObj.description}</p>
        <p>${budgetObj.budget}</p>
    </div>
    `
    return card
}

function getBudgetData(){

}























