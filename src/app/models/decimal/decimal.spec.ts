import { Decimal } from './decimal';

describe('Decimal', () => {
  it('should create an instance', () => {
    expect(new Decimal({integer: 0, fraction: 0})).toBeTruthy();
  });
});
