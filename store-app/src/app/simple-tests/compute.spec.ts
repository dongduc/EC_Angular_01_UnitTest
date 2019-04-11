import { compute } from './compute';

// test suite - group of related tests
describe('compute', () => {
  // spec or a test
  it('Truyen vao -1 va nhan gia tri 0', () => {
    const result = compute(-1);
    let x= 0;
    expect(result).toEqual(x);
  });

  it('Truyen vao 1 va nhan gia tri 2', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
