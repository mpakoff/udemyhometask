let money = prompt ("Выш бюджет на месяц?", "");
let data = prompt ("Введите дату в формате YYYY-MM-DD", "");
let itemOfExp = prompt("Введите обязательную статью расходов в этом месяце");
let price = prompt("Во сколько обойдётся?");
let addData = {
    budget: money,
    timeData: data,
    expenses: {
        expItem: itemOfExp,
        expPrice: price
    },
    optionalExpenses:{
        
    },
    income: [],
    savings: false
}

oneDayBudget = ((addData.budget - addData.expenses.expPrice)/30);
alert (oneDayBudget);

console.log(addData);


   