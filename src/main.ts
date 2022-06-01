const addNumbers = (num1: number, num2: number): number => num1 + num2;
  type binaryStringBuilder = (str1: string, str2: string) => string;

const joinStrings: binaryStringBuilder = (str1, str2) => `${str1} ${str2}`;

const createInitials: binaryStringBuilder = function (str1, str2) {
  return str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
};

const sum: number = addNumbers(5, 7);
const joinedString: string = joinStrings('Penediktas', 'Tušinis');
const initials: string = createInitials('Penediktas', 'Tušinis');

console.log({
  sum,
  joinedString,
  initials,
});

function printRedText(text: string): void {
  console.log(`%c ${text}`, 'color: #ee0000');
}

printRedText('printRed funkcijos argumentas');

console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
  const multiply = (a: number, b: number): number => a * b;

  const power = function (base: number, power: number): number {
    return base ** power;
  };

  const squareRoot = (number: number): number => number ** (1 / 2);

  const root = function (base: number, nthRoot: number): number {
    return base ** (1 / nthRoot);
  };

  const printBlueText = (text: string): void => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();

console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
    type UnaryNumberProductNumberFunction = (number: number) => number;
    type UnaryStringProductVoidFunction = (str: string) => void;
    type BinaryNumberProductNumberFunction = (num1: number, num2: number) => number;

    const multiply: BinaryNumberProductNumberFunction = (a, b) => a * b;

    const power: BinaryNumberProductNumberFunction = function (base, power) {
      return base ** power;
    };

    const squareRoot: UnaryNumberProductNumberFunction = (number) => number ** (1 / 2);

    const root: BinaryNumberProductNumberFunction = function (base, nthRoot) {
      return base ** (1 / nthRoot);
    };

    const printBlueText: UnaryStringProductVoidFunction = (text) => console.log(`%c${text}`, 'color: #0000ee');

    const num1: number = 16;
    const num2: number = 4;

    console.log({
      [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
      [`power(${num1}, ${num2})`]: power(num1, num2),
      [`squareRoot(${num1})`]: squareRoot(num1),
      [`root(${num1}, ${num2})`]: root(num1, num2),
    });
    printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
