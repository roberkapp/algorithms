# Kaprekar's Routine

Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:

- Arrange the digits in descending order to form the largest number
- Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
- Subtract the smaller from the larger
- Repeat with the new number
