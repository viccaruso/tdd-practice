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

test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected0 = 10 // 8 4 5
    const expected1 = 0 // 0 2 4
    const expected2 = -300 // -6 -2 -100

    const actual0 = divideThenMultiply(8, 4, 5);
    const actual1 = divideThenMultiply(0, 2, 4);
    const actual2 = divideThenMultiply(-6, -2, -100);

    expect.equal(actual0, expected0, '8, 4, 5 should return 10');
    expect.equal(actual1, expected1, '0, 2, 4, should return 0');
    expect.equal(actual2, expected2, '-6, -2, -100 should return -300');
});

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected0 = [8, 4, 5];
    const expected1 = [1, 2, 3];
    const expected2 = [10, 50, 20];

    const actual0 = returnAsAnArray(8, 4, 5);
    const actual1 = returnAsAnArray(1, 2, 3);
    const actual2 = returnAsAnArray(10, 50, 20);

    expect.deepEqual(actual0, expected0, 'input of (8, 4, 5) should return array of [8, 4, 5]');
    expect.deepEqual(actual1, expected1, 'input of (1, 2, 3) should return array of [1, 2, 3]');
    expect.deepEqual(actual2, expected2, 'input of (10, 50, 20) should return array of [10, 50, 20]');
});

test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected0 = '123';
    const expected1 = '-1-2-3';
    const expected2 = '100011001001';

    const actual0 = returnAsAString(1, 2, 3);
    const actual1 = returnAsAString(-1, -2, -3);
    const actual2 = returnAsAString(1000, 1100, 1001);

    expect.equal(actual0, expected0, 'input of (1, 2, 3) should return "123"');
    expect.equal(actual1, expected1, 'input of (-1, -2, -3) should return "-1-2-3"');
    expect.equal(actual2, expected2, 'input of (1000, 1100, 1001) should return "100011001001');
})