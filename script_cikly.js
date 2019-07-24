'use strict';
let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start ();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {

    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");

        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

            console.log ("done");

            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }

    }
}

chooseExpenses();

function chooseOptExpenses() {

    for (let i = 0; i < 3; i++) {
        let c = prompt ("Введите необязательную статью расходов в этом месяце", ""),
            d = prompt ("Во сколько обойдется?", "");

        if ( typeof(c)==='string' && typeof(c) != null && typeof(d) != null && c != "" && d != "" && c.length < 50) {

            console.log ("done");

            appData.optionalExpenses[c] = d;
        } else {                            
            console.log ("bad result");
            i--;
        }

    }
}

//chooseOptExpenses();



// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

function detectDayBudget (){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}

 detectDayBudget();   


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

detectLevel();




function checkSavings() {
    if (appData.savings ==true) {
        let save = +prompt("Какова сумма накоплений"),
        persent = +prompt("под каккой процент?");

        appData.monthIncome = save/100/100*persent;
        alert(" Доход в месяц с вашего депозита: " + appData.monthIncome);
}
}

checkSavings();