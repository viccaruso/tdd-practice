// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected0 = 'puppy!!!';
    const expected1 = 'chocolate!!!';
    const expected2 = 'hooray!!!'

    const actual0 = addExclamationPoints('puppy');
    const actual1 = addExclamationPoints('chocolate');
    const actual2 = addExclamationPoints('hooray');

    expect.equal(actual0, expected0, '"puppy" should return "puppy!!!"');
    expect.equal(actual1, expected1, '"chocolate" should return "chocolate!!!"');
    expect.equal(actual2, expected2, '"hooray" should return hooray!!!"');
});



test('multiplyBySeven should return the product of a number multiplied by 7', (expect) => {
    const expected0 = 77;
    const expected1 = 0;
    const expected2 = -35;

    const actual0 = multiplyBySeven(11);
    const actual1 = multiplyBySeven(0);
    const actual2 = multiplyBySeven(-5);

    expect.equal(actual0, expected0, '11 should return 77');
    expect.equal(actual1, expected1, '0 should return 0');
    expect.equal(actual2, expected2, '-5 should return -35');
});

test('multiplyBy12ThenHalve should multiply a number by 12 and then divide the result by 2', (expect) => {
    const expected0 = 6;
    const expected1 = 0;
    const expected2 = -60;

    const actual0 = multiplyBy12ThenHalve(1);
    const actual1 = multiplyBy12ThenHalve(0);
    const actual2 = multiplyBy12ThenHalve(-10);

    expect.equal(actual0, expected0, '1 should return 6');
    expect.equal(actual1, expected1, '0 should return 0');
    expect.equal(actual2, expected2, '-10 should return -60');
});