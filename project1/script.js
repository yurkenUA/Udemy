"use strict"

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while ((isNaN(money)) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};


function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
choseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("У Вас минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("У Вас средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("У Вас высокий уровень достатка");
    } else {
        console.log("Введено не число");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();