import plant from './../src/plant.js';

describe('plant', () => {
  test("should correctly convert '1' to 'I'", () => {
    expect(toRoman(1)).toEqual('I');
  });
});
