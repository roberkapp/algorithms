import { expect, test } from '@jest/globals';
import { generateSnowflake } from './generateSnowflake';

test('Given a string: "X=~" should return a mirror image: "X=~~=X"', () => {
  expect(generateSnowflake('X=~')).toBe('X=~~=X');
});

test('Given a string: "*   *\n * * \n* * *\n * * \n*   *")" should return a mirror image: "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *"', () => {
  expect(generateSnowflake('*   *\n * * \n* * *\n * * \n*   *')).toBe(
    '*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *',
  );
});
