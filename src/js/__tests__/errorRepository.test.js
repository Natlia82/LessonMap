import ErrorRepository from '../errorRepository';

test('there is an error', () => {
  const result = new ErrorRepository();

  expect(result.translate(2)).toBe('ошибка вторая');
});

test('no value', () => {
  const result = new ErrorRepository();

  expect(result.translate(5)).toBe('Unknown error');
});
