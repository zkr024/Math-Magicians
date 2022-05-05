import operate from '../operate';

it('Adding operation', () => {
  expect(operate(1, 1, '+')).toEqual('2');
});

it('Substracting operation', () => {
  expect(operate(17, 19, '-')).toEqual('-2');
});

it('Multiply operation', () => {
  expect(operate(10, 19, 'x')).toEqual('190');
});

it('Division operation', () => {
  expect(operate(100, 10, '÷')).toEqual('10');
});

it('Error operation', () => {
  expect(operate(100, 0, '%')).toEqual(
    "Can't find modulo as can't divide by 0.",
  );
});
