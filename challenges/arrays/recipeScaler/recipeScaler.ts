export function recipeScaler(ingredients: string[], scale: number): string[]{
    return ingredients.map((i) => {
        const [quantity, unit, ...ingredients] = i.split(' ');
        return [Number(quantity) * scale, unit, ...ingredients].join(' ');
    })
}