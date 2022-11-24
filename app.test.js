const capitalize = require('./app');
const reverseString = require('./app');
const calculator = require('./app');


// test('First character is capitalized',()=>{
//     expect(capitalize('capital')[0]).toBe('C')
// });
// test('String is reversed',()=>{
//     expect(reverseString('cap')).toBe('pac')
// });
test('Test basic calculator operations,subtract',()=>{
    let calc = new calculator()
    expect(calc.sub(10,2)).toEqual(8);
});
test('Test basic calculator operations,multiply',()=>{
    let calc = new calculator()
    expect(calc.multiply(10,2)).toEqual(20);
});
