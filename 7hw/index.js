let year = prompt("В якому році Ви народилися?", "");
let city = prompt("В якому місті Ви живете?", "");
let sport = prompt("Ваш улюблений спорт?", "");
const age = 2022 - year;
let resultAge;
if (year == null) {
    resultAge = ("Шкода, що Ви не захотіли ввести свою дату народження.");
} else {
    resultAge = ("Вам " + age + " років.");
}
let resultCity;
switch (city){
        case "Київ":
            resultCity = ("Ви живете у столиці України.");
            break;
        case "Вашингтон":
            resultCity = ("Ви живете у столиці США.");
            break;
        case "Лондон":
            resultCity = ("Ви живете у столиці Великобританії.");
            break;
        case (city = null):
            resultCity = ("Шкода, що Ви не захотіли ввести своє місто.");
            break;
        default:
            resultCity = ("Ви живете у місті " + city + ".");
            break;
    }
let resultSport;
    switch (sport){
        case "Хокей":
            resultSport = ("Круто! Хочете стати Вейном Ґрецкі?");
            break;
        case "Бейсбол":
            resultSport = ("Круто! Хочете стати Джекі Робінсоном?");
            break;
        case "Крикет":
            resultSport = ("Круто! Хочете стати Жаком Каллісом?");
            break;
        case (sport = null):
            resultSport = ("Шкода, що Ви не захотіли ввести свій улюблений спорт.");
            break;
        default:
            resultSport = ("Ваш улюблений спорт це " + sport + ".");
            break;
    }
alert(resultAge + "\n" + resultCity + "\n" + resultSport);
