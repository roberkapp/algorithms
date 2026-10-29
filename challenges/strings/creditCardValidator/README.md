# Credit Card Validator

Given a string of digits for a credit card number, determine if it's a valid card number using the following method:

- Starting from the second-to-last digit, double every other digit moving left.
- If doubling a digit results in a number greater than 9, subtract 9.
- Sum all the digits (doubled and undoubled).
- If the total is divisible by 10, the number is valid.
