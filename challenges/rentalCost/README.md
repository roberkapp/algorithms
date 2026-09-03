# Rental Cost

Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

- Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
- The rental tier is the number of days before the rental is due back: 1, 3, or 7.
- Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
- Each day past the due date and time incurs a late fee.

Pricing is as follows:

Tier |Base cost| Late fee per day
1 day |$4.99| $3.99
3 days |$3.99| $2.99
7 days |$2.99| $0.99

Return the total cost rounded to two decimal places in the format "$D.CC".
