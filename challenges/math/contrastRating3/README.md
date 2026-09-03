# Contrast Rating 3

Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:

- Divide each channel [R, G, B] by 255 to get a value between 0 and 1
- Apply the gamma correction formula to each channel:
- If the channel value is less than or equal to 0.04045: channel / 12.92
- Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
- Calculate luminance: 0.2126 _ R + 0.7152 _ G + 0.0722 \* B

Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating| Normal Text| Large Text
"AAA" |7.0+ |4.5+
"AA" |4.5+ |3.0+
"Fail" |below 4.5| below 3.0
