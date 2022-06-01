"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const personTuple1 = ['Name', 35];
        const personTuple2 = ['Name2', 45];
        console.log(personTuple1, personTuple2);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const OwnerDog = [{
                name: 'Name1',
                age: 25,
            }, {
                name: 'Name2',
                age: 3,
                brand: 'type1',
            }];
        console.log(OwnerDog);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle1 = [[-2, 1], [2, 2], [1, 2]];
        const triangle2 = [[1, 2], [4, 2], [4, 1]];
        console.log({
            triangle1,
            triangle2,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map