let nums = [10,1,21,2];
nums.sort((a,b) => a-b); // ascending order
console.log(nums);
nums.sort((a,b) => b-a); // descending order
console.log(nums);

let fruits = ['apple','banana',"cherry"];
fruits.sort((a, b) => a.localeCompare(b)) // ascending order
fruits.sort((a, b) => b.localeCompare(a)) // descending order
console.log(fruits);


// arrow Functions