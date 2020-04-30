"use strict"

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let totalExpenses = prompt( "Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        obligatoryExpenses : totalExpenses
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

alert( money );
