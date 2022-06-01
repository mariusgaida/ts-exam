type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type FirstTuple = [string, number];
  type Dog = {
    name: string,
    age: number,
    brand: 'type1' | 'type2',
  };
  type DogOwner = {
    name: string,
    age: number,
  };
  type ComplectTuple = [DogOwner, Dog];
  type Acme = [number, number];
  type Triangle = [Acme, Acme, Acme];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const personTuple1: FirstTuple = ['Name', 35];
    const personTuple2: FirstTuple = ['Name2', 45];

    console.log(personTuple1, personTuple2);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const OwnerDog: ComplectTuple = [{
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
    const triangle1: Triangle = [[-2, 1], [2, 2], [1, 2]];
    const triangle2: Triangle = [[1, 2], [4, 2], [4, 1]];

    console.log({
      triangle1,
      triangle2,
    });
  }
  console.groupEnd();
}
console.groupEnd();
