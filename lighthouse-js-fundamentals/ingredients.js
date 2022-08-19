const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking poweder", "chocolate chips", "bananas"];

let i= 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
    
}
for (let repeat = 0; repeat < 8; repeat++) {
    console.log(ingredients);
} 
const reversed = ingredients.reverse();
console.log('reversed;', reversed);
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}