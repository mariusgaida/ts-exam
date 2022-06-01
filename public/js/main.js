"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('enums types - užduotys');
{
    let LTCity;
    (function (LTCity) {
        LTCity["Vilnius"] = "Vilnius";
        LTCity["Kaunas"] = "Kaunas";
        LTCity["Klaipeda"] = "Klaipeda";
        LTCity["Siauliai"] = "Siauliai";
        LTCity["Panevezys"] = "Panevezys";
    })(LTCity || (LTCity = {}));
    let Countries;
    (function (Countries) {
        Countries[Countries["China"] = 0] = "China";
        Countries[Countries["India"] = 1] = "India";
        Countries[Countries["UnitedStates"] = 2] = "UnitedStates";
        Countries[Countries["Indonesia"] = 3] = "Indonesia";
        Countries[Countries["Pakistan"] = 4] = "Pakistan";
    })(Countries || (Countries = {}));
    let BiggestGDP;
    (function (BiggestGDP) {
        BiggestGDP[BiggestGDP["UnitedStates"] = 1] = "UnitedStates";
        BiggestGDP[BiggestGDP["China"] = 2] = "China";
        BiggestGDP[BiggestGDP["Japan"] = 3] = "Japan";
        BiggestGDP[BiggestGDP["Germany"] = 4] = "Germany";
        BiggestGDP[BiggestGDP["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(BiggestGDP || (BiggestGDP = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const city1 = LTCity.Kaunas;
        const city2 = LTCity.Klaipeda;
        console.log({ city1, city2 });
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const largestCountries = [Countries.China, Countries.Pakistan];
        console.log(largestCountries);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const EconomiesGDP = [
            BiggestGDP.UnitedStates,
            BiggestGDP.China,
            BiggestGDP.Japan,
            BiggestGDP.Germany,
            BiggestGDP.UnitedKingdom,
        ];
        console.log(EconomiesGDP);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map