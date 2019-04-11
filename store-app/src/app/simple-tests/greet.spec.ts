import { greet } from './greet';

xdescribe('Duc', () => {
  it('Duc da o day', () => {
    const name = 'duc';

    expect(greet(name)).toContain(name);
  });
});
