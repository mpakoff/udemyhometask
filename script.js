let money = prompt ("Ваш бюджет на месяц?", "");
let data = prompt ("Введите дату в формате YYYY-MM-DD", "");
let itemOfExp = prompt("Введите обязательную статью расходов в этом месяце");
let price = prompt("Во сколько обойдётся?");
let addData = {
    budget: money,
    timeData: data,
    expenses: {
        expItem: price,
        
    },
    optionalExpenses:{
        
    },
    income: [],
    savings: false
}

oneDayBudget = ((addData.budget - addData.expenses.expItem)/30);
alert (oneDayBudget);

console.log(addData);


   