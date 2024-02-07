// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:
//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk
// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
function calculateElectronicsBudget(laptop, tablet, mobile){
    // let laptop = 35000;
    // let tablet = 15000;
    // let mobile = 20000;
    const total_money = laptop + tablet + mobile;
    return total_money;
}
const total_budget = calculateElectronicsBudget(10, 20, 10);
console.log('calculate the buy electronics:',total_budget);
