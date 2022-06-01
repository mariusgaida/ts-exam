"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const strings = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];
const booleans = [true, true, true, true, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const firstElem = (arr) => arr[0];
    console.log({ numbers, result: firstElem(numbers) });
    console.log({ strings, result: firstElem(strings) });
    console.log({ booleans, result: firstElem(booleans) });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const lastElem = (arr) => arr[arr.length - 1];
    console.log({ numbers, result: lastElem(numbers) });
    console.log({ strings, result: lastElem(strings) });
    console.log({ booleans, result: lastElem(booleans) });
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const exact = (arr) => {
        const copy = arr.map((x) => x);
        return copy;
    };
    console.log({ numbers, result: exact(numbers) });
    console.log({ strings, result: exact(strings) });
    console.log({ booleans, result: exact(booleans) });
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const arr = (value, count) => Array.from(new Array(count)).map((_) => value);
    const dataSamples = [
        ['a', 2],
        [77, 4],
        [true, 1],
    ];
    dataSamples.forEach((args) => console.log(`arr(${args.join(', ')}):`, arr(...args)));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const union = (arr1, arr2) => [...arr1, ...arr2];
    const args1 = [[6, 5, 4], [3, 2, 1]];
    const args2 = [['text1', 'text2', 'text3'], ['text4', 'text5', 'text6']];
    const args3 = [[true, true, true], [false, false, false]];
    console.log({ args: args1, result: union(...args1) });
    console.log({ args: args2, result: union(...args2) });
    console.log({ args: args3, result: union(...args3) });
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const getObj = (initialValue) => {
        let value = initialValue;
        return {
            setValue: (newValue) => value = newValue,
            getValue: () => value,
        };
    };
    const value1 = 7;
    const value2 = ['text1', 'text2', 'text3'];
    const value3 = { name: 'name', surname: 'surname' };
    const obj1 = getObj(value1);
    const obj2 = getObj(value2);
    const obj3 = getObj(value3);
    console.log('initial values');
    console.log({
        value1: obj1.getValue(),
        value2: obj2.getValue(),
        value3: obj3.getValue(),
    });
    console.log('changing values...');
    obj1.setValue(9);
    obj2.setValue(['Pakeista']);
    obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const isWorker = (person) => person.avgMonthlyPay !== undefined;
    const isStudent = (person) => {
        const student = person;
        return student.university !== undefined && student.course !== undefined;
    };
    const combined = (people) => {
        const groupedPeople = people.reduce((prevGroupedPeople, person) => {
            const newGroupedPeople = Object.assign({}, prevGroupedPeople);
            if (isWorker(person))
                newGroupedPeople.workers.push(person);
            if (isStudent(person))
                newGroupedPeople.students.push(person);
            else
                newGroupedPeople.people.push(person);
            return newGroupedPeople;
        }, {
            people: [],
            students: [],
            workers: [],
        });
        return groupedPeople;
    };
    const people = [
        {
            name: 'Name1', surname: 'Surname1', university: 'VU', course: 3,
        },
        { name: 'Name2', surname: 'Surname2' },
        { name: 'Name3', surname: 'Surname3', avgMonthlyPay: 1500 },
        { name: 'Name4', surname: 'Surname4' },
        { name: 'Name5', surname: 'Surname5', avgMonthlyPay: 800 },
        {
            name: 'Name6', surname: 'Surname6', university: 'VU', course: 2,
        },
        { name: 'Name7', surname: 'Surname7', avgMonthlyPay: 2500 },
        {
            name: 'Name8', surname: 'Surname8', university: 'KTU', course: 1,
        },
    ];
    const groupedPeople = combined(people);
    console.log(groupedPeople);
}
//# sourceMappingURL=main.js.map