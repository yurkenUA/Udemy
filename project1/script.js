"use strict"

// let money = prompt("Ваш бюджет на месяц?", "");
// let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
// let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
// let totalExpenses = prompt( "Во сколько обойдется?", "");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// }

// alert( money );


let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


// for (let i = 0; i < 2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

//     if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//      && a != '' && b != '' && a.length < 50 ){
//          console.log('done');
//          appData.expenses[a] = b;
//      } else {
//          i--;
//      }
// }

let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');
//     i++;
//     if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//     && a != '' && b != '' && a.length < 50 ){
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// } while (i <2);

while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    i++;
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
    && a != '' && b != '' && a.length < 50 ){
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
}



// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

appData.moneyPerDay = appData.budget / 30;
alert ("Ваш бюджет на день " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("У Вас минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("У Вас средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("У Вас высокий уровень достатка");
} else {
    console.log("Введено не число");
}
