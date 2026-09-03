# Spoken Time

Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.

Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:

Minutes | Spoken
0 | "Y o'clock"
15 | "quarter past Y"
1–29 (excluding 15) | "X minutes past Y"
30 | "half past Y"
45 | "quarter to Z"
31–59 (excluding 45) | "X minutes to Z" (where X is 60 - minutes)
Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

Note: Hand angles may not land exactly on a number, consider rounding them somehow.
