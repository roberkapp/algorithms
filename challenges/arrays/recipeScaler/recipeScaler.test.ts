import {expect , test} from '@jest/globals';
import { recipeScaler } from './recipeScaler';

test('Given a recipe: ["2 C Flour", "1.5 T Sugar"] should returna scaled recipe: ["4 C Flour", "3 T Sugar"]' , () => {
    expect(recipeScaler(["2 C Flour", "1.5 T Sugar"], 2)).toEqual(["4 C Flour", "3 T Sugar"]);
});

test('Given a recipe: ["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"] should return a scaled recipe: "5 C All-purpose Flour", "2.5 t Baking Soda", "2.5 t Salt", "2.5 C Butter", "1.25 C Sugar", "1.25 C Brown Sugar", "2.5 t Vanilla Extract", "5 C Chocolate Chips"]' , () => {
    expect(recipeScaler(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5)).toEqual(["5 C All-purpose Flour", "2.5 t Baking Soda", "2.5 t Salt", "2.5 C Butter", "1.25 C Sugar", "1.25 C Brown Sugar", "2.5 t Vanilla Extract", "5 C Chocolate Chips"]);
});