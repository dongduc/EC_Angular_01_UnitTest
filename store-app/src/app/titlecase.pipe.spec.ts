import { TitlecasePipe } from './titlecase.pipe';

describe('TitlecasePipe', () => {
  let pipe = new TitlecasePipe();

  it('Transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('Transforms "duc da o day" to "Duc Da O Day"', () => {
    expect(pipe.transform('duc da o day')).toBe('Duc Da O Day');
  });
});
